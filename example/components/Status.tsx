import styled from '@emotion/styled'
import React from 'react'

import { VisibilityObject } from '../../src/useElementVisibility'

interface Props {
  status: VisibilityObject
}

export const Status: React.FC<Props> = ({
  status: {
    isPartiallyVisible,
    isTotallyVisible,
    isTotallyHidden,
    isPartiallyAboveViewport,
    isTotallyAboveViewport,
    isPartiallyBelowViewport,
    isTotallyBelowViewport,
  },
}) => (
  <StyledBox>
    <P>isPartiallyVisible: {isPartiallyVisible ? '✅' : '❌'}</P>
    <P>isTotallyVisible: {isTotallyVisible ? '✅' : '❌'}</P>
    <P>isTotallyHidden: {isTotallyHidden ? '✅' : '❌'}</P>
    <P>isPartiallyAboveViewport: {isPartiallyAboveViewport ? '✅' : '❌'}</P>
    <P>isTotallyAboveViewport: {isTotallyAboveViewport ? '✅' : '❌'}</P>
    <P> isPartiallyBelowViewport: {isPartiallyBelowViewport ? '✅' : '❌'}</P>
    <P>isTotallyBelowViewport: {isTotallyBelowViewport ? '✅' : '❌'}</P>
  </StyledBox>
)

const StyledBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  border: 1px solid #b4d455;
  padding: 1rem;
  background-color: #fff;
`

const P = styled.p``
