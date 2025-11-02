import PropTypes from "prop-types";

export const ChatMessage = ({ username, message }) => {
	return (
		<div>
			{username ? (
				<span>
					<b>{username}</b> : {message}
				</span>
			) : (
				<i>{message}</i>
			)}
			<b>{username}</b>: {message}
		</div>
	);
};

ChatMessage.propTypes = {
	username: PropTypes.string,
	message: PropTypes.string.isRequired,
};
