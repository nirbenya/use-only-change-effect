# :dizzy: use-only-change-effect

You want to use a useEffect every time some value or values are changed but you don't want it to be called on initial
render? use-only-change-effect got you covered!

## Motivation

React hooks are great, we can use useEffects to run callbacks after the components mounts, when it unmounts and when
some values are changed.

But the thing with useEffects that depend on some values in their dependencies array is that they run also after the
initial render, even if the value in the dependencies array doesn't change, (well, it "changes" from undefined to its
current value).

In the good(?) old days of class components, we had the "componentWillReceiveProps" method that got called on every prop
change but not on initial render, but only when new props were received (changed). Many times we want this behavior with
hooks too.

So here comes "useOnlyChangeEffect" that will act like the useEffect we all love but will run only when the value
actually changes.

## Installation

```npm install --save use-only-change-effect```

or

```yarn add use-only-change-effect```

## Usage

```javascript
import useOnlyChangeEffect from 'use-only-change-effect';


const MyComponent = ({ value }) => {
    
    // this console.log will run only when the "value" prop changes, and not on initial render too.
    useOnlyChangeEffect(() => {
        console.log('I got called!')
    }, [value])

    return null
}
```


