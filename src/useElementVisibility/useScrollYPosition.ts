import { throttle } from 'lodash'
import { useEffect, useState } from 'react'

type ScrollYPosition = number

const isBrowser = typeof window !== `undefined`
const getScrollYPosition = (): ScrollYPosition => {
  return isBrowser ? window.pageYOffset : 0
}

export const useScrollYPosition = (delayMs: number) => {
  const [scollYPosition, setScrollYPosition] = useState<ScrollYPosition>(
    getScrollYPosition()
  )

  const handleScroll = () => {
    setScrollYPosition(getScrollYPosition())
  }

  const throttledHandleScroll = throttle(handleScroll, delayMs)

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.addEventListener('scroll', throttledHandleScroll.cancel)
    }
  }, [])

  return scollYPosition
}
