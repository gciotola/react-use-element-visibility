import styled from '@emotion/styled'
import React from 'react'

interface Props {
  offsetTop: number
}

export const OffsetLine: React.FC<Props> = ({ offsetTop }) => {
  return <StyledLine offsetTop={offsetTop} />
}

const StyledLine = styled.div<Props>`
  display: block;
  width: 100%;
  position: fixed;
  top: ${({ offsetTop }) => offsetTop}px;
  left: 0;
  border-bottom: 1px dashed red;
`
