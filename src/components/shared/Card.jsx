import PropTypes from 'prop-types'

// separate Card component to share with otehr,give chidren and could show card component
function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
  )
}
Card.defaultProps = {
  revese: true,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card
