# react-use-element-visibility

A React Hook to track visibility of an element in viewport

[DEMO](https://gciotola.github.io/react-use-element-visibility/)

##How to use

Create an element `ref`

```jsx
const elementToTrack = useRef < HTMLDivElement > null
```

Pass the element `ref` to `useElementVisibility` hook

```jsx
const elementVisibilityStatus = useElementVisibility(elementToTrack, 0, 10)
```

### Options

`useElementVisibility` accepts 3 parameters:

- `elementToTrack`: React.RefObject
- `offsetTop`: in case you need to deal with a fixed element on top of you viewport
- `throttleMs`: number in milliseconds for throttle the scollbar event hook
