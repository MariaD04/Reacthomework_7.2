import React from 'react'
import Popular from './Popular'
import New from './New'

export const withHighlight = (Component) => {
  return (props) => {
    if (props.views >= 1000) {
        return <Popular><Component {...props} /></Popular>
    } else if (props.views < 100) {
        return <New><Component {...props} /></New>
    }
    return <Component {...props} />
  }
}

export default withHighlight
