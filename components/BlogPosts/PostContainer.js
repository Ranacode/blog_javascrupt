import PostContent from './PostContent';

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

		{/*
		<PostContent className="post__body" content={props.metadata.body} />

*/}
		<style jsx>
			{`
				.post {
					background: white;
					border: 1px solid #dbdbdb;
					padding: 0.5em;
					margin: 1em 0 1em 0.5em;
					display: flex;
				}

				.post__header {
					display: flex;
					flex-direction: column;
					flex: 1;
				}

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
			`}
		</style>
	</section>
);

export default PostContainer;
