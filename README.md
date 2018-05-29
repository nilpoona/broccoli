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

const initialState = {count: 0};
const handlers = {
  increase: {
    func: function() {
      return {
        count: this.state.count + 1
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
        <Counter />
      </Provider>
    );
  }
}

const Counter = () => {
  return (
    <div>
      <Count />
      <IncreaseBtn />
    </div>
  );
};

const Count = withConsumer((props) => {
  return (
    <h1>
      {props.state.count}
    </h1>
  )
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


