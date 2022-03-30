import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
  const headerStyles = {
    backgroungColor: bgColor,
    color: textColor
  }
  return (
    <div>
      <header style={headerStyles}>
        <div className="ciontainer">
          <h2>{text}</h2>
        </div>
      </header>
    </div>
  )
}

// 預設props值
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header

