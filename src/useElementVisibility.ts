import { useEffect, useState } from 'react'
import { useScrollYPosition } from './useScrollYPosition'
import { useWindowHeight } from './useWindowHeight'

export const useElementVisibility: ElementVisibility = (
  elementToTrack,
  offsetTop,
  throttleMs
) => {
  const throttleValue = throttleMs !== undefined ? throttleMs : 10
  const scrollYposition = useScrollYPosition(throttleValue)
  const windowHeight = useWindowHeight(throttleValue)

  const [elementVisibility, updateElementVisibility] = useState<
    VisibilityObject
  >({
    isPartiallyVisible: false,
    isTotallyVisible: false,
    isTotallyHidden: false,
    isPartiallyAboveViewport: false,
    isTotallyAboveViewport: false,
    isPartiallyBelowViewport: false,
    isTotallyBelowViewport: false,
  })

  useEffect(() => {
    const isTrackableElement = Boolean(elementToTrack.current)
    const bounding =
      elementToTrack.current && elementToTrack.current.getBoundingClientRect()

    const isPartiallyVisible =
      isTrackableElement &&
      bounding &&
      bounding.top <= windowHeight &&
      bounding.bottom >= offsetTop
        ? true
        : false

    const isPartiallyAboveViewport =
      isTrackableElement && bounding && bounding.top - offsetTop <= 0
        ? true
        : false

    const isTotallyAboveViewport =
      isPartiallyAboveViewport && !isPartiallyVisible

    const isPartiallyBelowViewport =
      isTrackableElement && bounding && bounding.bottom >= windowHeight
        ? true
        : false

    const isTotallyBelowViewport =
      isPartiallyBelowViewport && !isPartiallyVisible

    const isTotallyVisible =
      isPartiallyVisible &&
      !isPartiallyAboveViewport &&
      !isPartiallyBelowViewport

    const isTotallyHidden = !isTotallyVisible && !isPartiallyVisible

    updateElementVisibility({
      isPartiallyVisible,
      isTotallyVisible,
      isTotallyHidden,
      isPartiallyAboveViewport,
      isTotallyAboveViewport,
      isPartiallyBelowViewport,
      isTotallyBelowViewport,
    })
  }, [offsetTop, scrollYposition, windowHeight])

  return elementVisibility
}

export interface VisibilityObject {
  isPartiallyVisible: boolean
  isTotallyVisible: boolean
  isTotallyHidden: boolean
  isPartiallyAboveViewport: boolean
  isTotallyAboveViewport: boolean
  isPartiallyBelowViewport: boolean
  isTotallyBelowViewport: boolean
}

type ElementVisibility = (
  elementToTrack: React.RefObject<HTMLElement | null>,
  offsetTop: number,
  throttleMs?: number
) => VisibilityObject
