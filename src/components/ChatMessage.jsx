import PropTypes from 'prop-types'

export const ChatMessage = ({username, message}) => {
  return (
    <div>
        <b>{username}</b>: {message}
    </div>
  )
}

ChatMessage.propTypes = {
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}