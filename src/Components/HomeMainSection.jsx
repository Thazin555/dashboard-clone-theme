import React from 'react'
import Container from './Container'
import HomeStatus from './HomeStatus'
import HomeUpperPart from './HomeUpperPart'

const HomeMainSection = () => {
  return (
    <Container>
        <HomeStatus/>
        <HomeUpperPart/>
    </Container>
  )
}

export default HomeMainSection