# useElementVisibility - A custom react hook

A blazing fast custom React hook to track visibility of an DOM element in browser viewport.

This is usefull to know if an element is

- totally visibile
- partially visibile
- above viewport
- below viewport

[DEMO](https://gciotola.github.io/react-use-element-visibility/)

## Install

`$ npm install react-use-scroll`
or
`$ yarn add react-use-scroll`

## How to use

```jsx
import { useElementVisibility } from 'react-use-element-visibility'

const visibilityStatus = useElementVisibility(elementRef, 0)

console.log(visibilityStatus);
// output is:
{
  isPartiallyVisible: true,
  isTotallyVisible: true,
  isTotallyHidden: false,
  isPartiallyAboveViewport: false,
  isTotallyAboveViewport: false,
  isPartiallyBelowViewport: false,
  isTotallyBelowViewport: false,
}
```

Please note, an `elementRef` is required.
So, the first step is to create a React element ref, the best way to do this is to use React Hook `useRef`

## Complete example

```jsx
import React, { useRef } from 'react'
import { useElementVisibility } from 'react-use-element-visibility'

const MyComponent = props => {
  // creating empty ref object
  const element = useRef()
  const visibilityStatus = useElementVisibility(element, 0)

  console.log(visibilityStatus)

  return (
    <section>
      Status:{' '}
      {visibilityStatus.isTotallyHidden ? "you can't see me" : 'look at me'}
      <div ref={element}>Track me, if you can</div>
    </section>
  )
}
```

A detailed example can be found in the example folder

## Option

`useElementVisibility` accepts 3 parameters:

- `elementToTrack`: React.RefObject
- `offsetTop`: in case you need to deal with a fixed element on top of you viewport (example a fixed navbar)
- `throttleMs`: number in milliseconds to throttle the scollbar event hook

## Typescript

Full TypeScript support

```ts
// function hook signature
type ElementVisibility = (
  elementToTrack: React.RefObject<HTMLElement | null>,
  offsetTop: number,
  throttleMs?: number
) => VisibilityObject

// returned object
interface VisibilityObject {
  isPartiallyVisible: boolean
  isTotallyVisible: boolean
  isTotallyHidden: boolean
  isPartiallyAboveViewport: boolean
  isTotallyAboveViewport: boolean
  isPartiallyBelowViewport: boolean
  isTotallyBelowViewport: boolean
}
```
