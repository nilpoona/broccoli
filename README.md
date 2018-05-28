# padokia 
React Context API Wrapper

## Installation

padokia requires React 16.3 or later.

```
npm install --save padokia
```

## Usage

``` javascript
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
```


