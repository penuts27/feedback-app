import PropTypes from 'prop-types'

function Button({children, version, type, isDisable}) {
  return (
    <>
      <button type={type} className={`btn btn-${version}`} disabled={isDisable}>
          {children}
      </button>
    </>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisable: false
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
}

export default Button
