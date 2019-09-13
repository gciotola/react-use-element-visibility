import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { useElementVisibility } from '../src/useElementVisibility'
import { OffsetController } from './components/OffsetController'
import { OffsetLine } from './components/OffsetLine'
import { Status } from './components/Status'
import { TrackedBox } from './components/TrackedBox'

const App: React.FC = () => {
  const [offset, setOffset] = useState(0)

  const el = useRef<HTMLDivElement>(null)
  const elementVisibilityStatus = useElementVisibility(el, offset, 10)

  return (
    <div>
      <h1>Example: scroll the page down</h1>
      <OffsetController
        value={offset}
        onChange={newOffset => {
          setOffset(newOffset)
        }}
      />
      <OffsetLine offsetTop={offset} />
      <TrackedBox refProp={el} />
      <Status status={elementVisibilityStatus} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
