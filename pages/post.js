import Layout from '../components/Layout/Layout';

const Post = (props) => {
	return (
		<Layout>
			<header>
				<div className="background">
					<div className="title__container">
						<h1>Titulo del post </h1>
					</div>
				</div>
			</header>
			<section>contenido del post</section>
			<style jsx>
				{`
					header {
						width: 100%;
						background: rgb(238, 238, 238);
						border: 1px solid #dbdbdb;
					}
					section {
						background: white;
						padding: 0.5em;
					}

					.title__container {
						background: rgb(245, 223, 111);
						margin: 0 auto;
						font-family: Raleway, Verdana, sans-serif;
						width: 50%;
						height: auto;
						border: 1px solid black;
						-webkit-border-bottom-right-radius: 10px;
						-webkit-border-bottom-left-radius: 10px;
						-moz-border-radius-bottomright: 10px;
						-moz-border-radius-bottomleft: 10px;
						border-bottom-right-radius: 10px;
						border-bottom-left-radius: 10px;
						display: flex;
						justify-content: center;
					}

					.title__container h1 {
					}
				`}
			</style>
		</Layout>
	);
};

export default Post;
