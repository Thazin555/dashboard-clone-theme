import React from 'react'
import FormHeading from './FormHeading'
import Container from './Container'
import FormHorizontal from './FormHorizontal'
import FormVertical from './FormVertical'

const FormMainSection = () => {
  return (
    <Container>
        <FormHeading/>
        <FormHorizontal/>
        <FormVertical/>
    </Container>
  )
}

export default FormMainSection