# :dizzy: use-only-change-effect
You want to use a useEffect every time some value or values are changed but you dont want it to be called on initial render? use-only-change-effect got you covered!

## Motivation
In the good(?) old days of class components, we had the "componentWillReceiveProps" method that got called on every prop change but not on initial render, but only when new props were received (changed).
Many times we want this behavior with hooks too.

## Installation
```npm install --save use-only-change-effect```

or 

```yarn add use-only-change-effect```

## Usage

```javascript
import useOnlyChangeEffect from 'use-only-change-effect';


const MyComponent = ({ value }) => {
    
    // this effect only when the value really changes, and not on initial render
    useOnlyChangeEffect(() => {
        console.log('I got called!')
    }, [value])
}
```


