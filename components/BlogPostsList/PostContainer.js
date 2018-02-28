import PropTypes from 'prop-types';
import PostContent from './PostContent';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const PostContainer = ({ metadata }) => (
	<section className="post">
		<img width="200" height="150" src={metadata.featured_image} alt={metadata.title} />
		<div className="post__wrapper">
			<PostHeader title={metadata.title} author={metadata.author} />
			<PostContent content={metadata} />
			<PostFooter published={metadata.published} tags={metadata.tags} />
		</div>
		<style jsx>{`
			.post {
				background: white;
				border: 1px solid #dbdbdb;
				padding: 0.5em;
				margin: 1em 0.5em 1em 0.5em;
				display: flex;
			}

			.post__wrapper {
				display: flex;
				flex-direction: column;
				flex: 1;
			}
		`}</style>
	</section>
);

PostContainer.propTypes = {
	metadata: PropTypes.object.isRequired
};

export default PostContainer;
