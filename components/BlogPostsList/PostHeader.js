import PropTypes from 'prop-types';

const PostHeader = ({ title, author }) => (
	<div className="post__header--content">
		<h2>{title}</h2>
		<span>
			Escrito por {author.first_name} {author.last_name}
		</span>
		<style jsx>{`
			.post__header--content {
				background: #eee;
				padding: 0.3em 1em;
				border: 1px solid #dbdbdb;
				display: flex;
				justify-content: space-between;
			}
			.post__header--content h2 {
				margin: 0.2em;
				align-self: flex-start;
			}

			.post__header--content span {
				align-self: flex-end;
			}
			img {
				margin-right: 1em;
			}
		`}</style>
	</div>
);

PostHeader.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.shape({
		first_name: PropTypes.string.isRequired,
		last_name: PropTypes.string.isRequired
	})
};
export default PostHeader;
