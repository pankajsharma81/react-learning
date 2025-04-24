// 3. Create a component named "Header" that takes one prop - "title". The component should display a header element with the given title.

import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

export default Header