import PropTypes from 'prop-types'

const Divider = ({ color, height }) => {
  const dividerStyle = {
    width: '100%',
    height: height || '1px',
    backgroundColor: color || '#ddd', // Set default color to light gray if not provided
    margin: '10px 0', // Adjust margin as needed
  }

  return <div style={dividerStyle}></div>
}

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
}

export default Divider
