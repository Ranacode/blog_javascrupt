import PropTypes from 'prop-types';
import PostContent from './PostContent';
import styles from './styles/blogpost';

const PostContainer = (props) => (
	<section className="post">
		<img width="200" height="150" src={props.metadata.featured_image} alt={props.metadata.title} />
		<div className="post__header">
			<div className="post__header--content">
				<h2>{props.metadata.title}</h2>
				<span>
					Escrito por {props.metadata.author.first_name} {props.metadata.author.last_name}
				</span>
			</div>
			<PostContent content={props.metadata.body} />
			<footer>
				<strong>
					Publicado el {new Date(props.metadata.published).toLocaleDateString()} ~{' '}
					{new Date(props.metadata.published).toLocaleTimeString()}
				</strong>
				<div className="tags">
					{props.metadata.tags.map((tag) => {
						return <span key={tag.slug}>{tag.name}</span>;
					})}
				</div>
			</footer>
		</div>
		<style jsx>{styles}</style>
	</section>
);

PostContainer.propTypes = {
	metadata: PropTypes.object.isRequired
};

export default PostContainer;
