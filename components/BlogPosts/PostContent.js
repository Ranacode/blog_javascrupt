import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

const PostContent = (props) => {
	return (
		<div className="article">
			<article className="article__content">{Parser(props.content.substring(0, 175))}....</article>
			<button>Leer más</button>
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
};

PostContent.propTypes = {
	content: PropTypes.string.isRequired
};

export default PostContent;
