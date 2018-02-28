import Parser from 'html-react-parser';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostContent = ({ content }) => (
	<div className="article">
		<article className="article__content">{Parser(content.substring(0, 175))}....</article>
		<Link href="/post">
			<button>
				<a>Leer más</a>
			</button>
		</Link>

		<style jsx>
			{`
				.article {
					margin: 0.6em;
					padding-bottom: 0.4em;
					border-bottom: 1px solid #dbdbdb;
					display: flex;
					flex-direction: column;
				}

				.article__content {
					text-align: justify;
					text-justify: inter-word;
				}

				button {
					align-self: center;
				}
			`}
		</style>
	</div>
);

PostContent.propTypes = {
	content: PropTypes.string.isRequired
};

export default PostContent;
