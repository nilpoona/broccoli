# padokia 
React Context API Wrapper

## Installation

padokia requires React 16.3 or later.

```
npm install --save padokia
```

## Usage

``` javascript
import React from 'react';
import createContextComponents from 'padokia';

const initialState = {counter: 0};
const handlers = {
  increase: {
    func: function() {
      return {
        counter: this.counter + 1
      };
    }
  },
};

const components = createContextComponents(initialState, handlers);
const { Provider, withConsumer } = components;

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div>
          { this.state.counter }
        </div>
        <Counter />
      </Provider>
    );
  }
}

const Counter = withConsumer(() => {
  return (
    <IncreaseBtn />
  );
});

const IncreaseBtn = withConsumer((props) => {
  const handleOnClick = () => {
    props.handlers.increase();
  };
  
  return (
    <button onClick={handleOnClick}>
      +
    </button>
  );
});
```


