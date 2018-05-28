import React, { Component, createContext } from 'react';

function isObject(obj) {
  return typeof obj === 'object'
    && obj !== undefined
    && obj !== null
    && Object.prototype.toString.call(obj) !== '[object Array]';
}

const Validator = {
  validateState: (state) => {
    if (!isObject(state)) {
      throw new Error('state is not object');
    }
  },
  validateHandlers: (handlers) => {
    if (!isObject(handlers)) {
      throw new Error('handlers is not object');
    }

    const keys = Object.keys(handlers);
    keys.forEach((key) => {
      const handler = handlers[key];
      if (typeof handler.func !== 'function') {
        throw new Error('handler is not function');
      }
    });
  },
};

export default function createContextComponents(initialState, handlers) {
  const Context = createContext();

  Validator.validateState(initialState);
  Validator.validateHandlers(handlers);

  class Provider extends Component {
    constructor(props) {
      super(props);
      this.state = initialState;
    }

    get handlers() {
      const receiver = {
        state: {
          ...this.state
        }
      };

      return Object.keys(handlers).reduce((hs, key) => {
        const { func, async } = handlers[key];
        // TODO: refactoring
        let updateState;
        if (async) {
          updateState = async (...args) => {
            const newState = await func.call(receiver, ...args);
            if (isObject(newState)) {
              this.setState(newState);
            }
          };
        } else {
          updateState = (...args) => {
            const newState = func.call(receiver, ...args);
            if (isObject(newState)) {
              this.setState(newState);
            }
          };
        }

        hs[key] = updateState;
        return hs;
      }, {});
    }

    render() {
      return (
        <Context.Provider
          value={ {
            state: {
              ...this.state
            },
            handlers: {
              ...this.handlers
            }
          } }
        >
          { this.props.children }
        </Context.Provider>
      )
    }
  }

  const withConsumer = Component => props => {
    return (
      <Context.Consumer>
        {({ state, handlers}) => (
            <Component
              state={state}
              handlers={handlers}
            />
        )}
      </Context.Consumer>
    );
  };

  return {
    Provider,
    withConsumer
  }
}