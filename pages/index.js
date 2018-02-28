import Link from 'next/link';
import Butter from 'buttercms';
import Layout from '../components/Layout/Layout';
import PostContainer from '../components/BlogPosts/PostContainer';

const butter = Butter('4a55813e1a9f5d6c1b68bc28f6fd710d9f00e595');

class Index extends React.Component {
	static getInitialProps = () => {
		return butter.post
			.list({ page: 1, page_size: 5 })
			.then((result) => {
				return { posts: result.data.data };
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				<Layout>
					<main>
						<div className="blog-container">
							<header>
								<h3>Últimos artículos</h3>
							</header>
							{this.props.posts.map((post) => {
								return <PostContainer key={post.slug} metadata={post} />;
							})}
						</div>
						<section>columna 21</section>
					</main>
				</Layout>

				<style jsx global>{`
					body {
						background: #fafafa;
						font-family: Raleway, Helvetica, Arial, sans-serif;
						color: #000;
						margin: 0;
						padding: 0;
						box-sizing: border-box;
					}

					.blog-container {
						margin: 0.7em 1em;
					}
					header {
						background: white;
						border: 1px solid #dbdbdb;
						border-radius: 10px;
						padding: 0.4em;
						width: 100%;
						font-family: Lusitana, Verdana, sans-serif;
						width: 25%;
						margin: 0.5em;
					}

					header h3 {
						margin: 0.2em 0;
						font-size: 25px;
						width: 100%;
						text-align: center;
					}
					main {
						display: grid;
						grid-template-columns: 70% 30%;
					}

					@media screen and (max-width: 1024px) {
						main {
							grid-template-columns: 100%;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Index;
