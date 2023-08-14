import React from 'react'
import { Alert } from 'react-bootstrap'

function Message( content ) {
  return (
    <Alert variant={content.variant}>
        {content.children}
    </Alert>
  )
}

export default Message
