import styled from '@emotion/styled'
import React from 'react'

interface Props {
  value: number
  onChange: (newOffset: number) => void
}

export const OffsetController: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Box>
      Offset: {value}
      <StyledInput
        type='range'
        min={0}
        step={10}
        max={500}
        value={value}
        onChange={e => {
          onChange(parseInt(e.currentTarget.value, 10))
        }}
      />
    </Box>
  )
}

const StyledInput = styled.input`
  display: block;
  width: 300px;
`

const Box = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2rem;
`
