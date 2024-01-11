import React from 'react'
import FormHeading from './FormHeading'
import Container from './Container'
import FormHorizontal from './FormHorizontal'
import FormVertical from './FormVertical'

const FormMainSection = ({menu}) => {
  return (
    <Container menu={menu}>
        <FormHeading/>
        <FormHorizontal/>
        <FormVertical/>
    </Container>
  )
}

export default FormMainSection