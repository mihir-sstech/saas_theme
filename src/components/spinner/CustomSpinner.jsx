import React from 'react'
import { Spinner } from 'react-bootstrap'

const CustomSpinner = ({customStyle, customSize = "md"}) => {
  return (
    <Spinner animation="border" role="status" size={customSize} style={customStyle}>
        <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default CustomSpinner