import React from 'react'

const EtText = ({ children, ...rest }) => {
  return (
    <p {...rest} style={{ fontFamily: 'MyFont', margin: 0, ...rest.style }}>
      {children}
    </p>
  )
}

export default EtText
