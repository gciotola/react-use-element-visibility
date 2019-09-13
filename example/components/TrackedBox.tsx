import styled from '@emotion/styled'
import React from 'react'

interface Props {
  refProp: React.MutableRefObject<HTMLDivElement>
}

export const TrackedBox: React.FC<Props> = ({ refProp }) => {
  return <StyledBox ref={refProp}>😎I am a tracked box😎</StyledBox>
}

const StyledBox = styled.div`
  display: block;
  width: 400px;
  margin: 120vh auto;
  border: 2px solid red;
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
`
