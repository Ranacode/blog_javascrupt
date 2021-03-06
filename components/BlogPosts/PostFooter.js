import PropTypes from 'prop-types';

const PostFooter = ({ published, tags }) => (
	<footer>
		<strong>
			Publicado el {new Date(published).toLocaleDateString()} ~ {new Date(published).toLocaleTimeString()}
		</strong>
		<div className="tags">
			{tags.map((tag) => {
				return <span key={tag.slug}>{tag.name}</span>;
			})}
		</div>
		<style jsx>{`
			footer {
				text-align: center;
			}
			.tags {
				padding: 0.6em;
			}
			.tags span {
				background: #4a4a4a;
				color: #fff;
				font-size: 16px;
				padding: .4em;
				margin-right: .6em;
				border-radius: 12px;
				margin-top: 22em;
			}
		`}</style>
	</footer>
);

PostFooter.propTypes = {
	published: PropTypes.Date,
	tags: PropTypes.array.isRequired
};

export default PostFooter;
