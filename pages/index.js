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
				console.log(result.data.data);
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
							{this.props.posts.map((post) => {
								return <PostContainer key={post.slug} metadata={post} />;
							})}
						</div>
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

					main {
						display: grid;
						grid-template-columns: 70% 30%;
					}
				`}</style>
			</div>
		);
	}
}

export default Index;
