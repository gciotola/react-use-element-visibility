import { throttle } from 'lodash'
import { useEffect, useState } from 'react'

type WindowHeight = number

const getWindowHeight = () => window.innerHeight

export const useWindowHeight = (delayMs: number) => {
  const [windowHeight, setWindowHeight] = useState<WindowHeight>(
    getWindowHeight()
  )

  const handleResize = () => {
    setWindowHeight(getWindowHeight())
  }

  const throttledHandleRezise = throttle(handleResize, delayMs)

  useEffect(() => {
    window.addEventListener('resize', throttledHandleRezise)
    return () => {
      window.addEventListener('resize', throttledHandleRezise.cancel)
    }
  }, [])

  return windowHeight
}
