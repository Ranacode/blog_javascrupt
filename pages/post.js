import React from 'react';
import Head from 'next/head';
import Butter from 'buttercms';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import Layout from '../components/Layout/Layout';

const butter = Butter('4a55813e1a9f5d6c1b68bc28f6fd710d9f00e595');

class Post extends React.Component {
	static getInitialProps = (props) => {
		return butter.post
			.search(props.query.title)
			.then((resp) => {
				return { post: resp.data.data[0] };
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<Layout>
				<Head>
					<meta name="description" content={this.props.post.meta_description} />
					<meta
						name="author"
						content={`${this.props.post.author.first_name} ${this.props.post.author.last_name}`}
					/>
					<meta name="keywords" content={this.props.post.tags.map((tag) => tag.name).join(', ')} />
					<link
						rel="stylesheet"
						href="http://d2z2rr99bkshyr.cloudfront.net/buttercms-post-defaults.css"
						key="codeStyles"
					/>
					<title>{this.props.post.seo_title}</title>
				</Head>
				<header>
					<div className="background">
						<div className="title__container">
							<h1>{this.props.post.title}</h1>
						</div>
					</div>
				</header>
				<section>
					<article>{Parser(this.props.post.body)}</article>
				</section>
				<style jsx>
					{`
					header {
						width: 100%;
						background: rgb(238, 238, 238);
						border: 1px solid #dbdbdb;
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

					section {
						background: white;
						margin: 0 auto;
						padding: 1em;
						border: 1px solid #dbdbdb;
						height: auto;
						width: 60%;
					}

					section article {
						padding: 0.4em;
						text-align: justify;
						text-justify: inter-word;
						font-family: Lusitana, Georgia, serif;
						font-size: 22px;
						line-height: 1.5;
					}

					@media screen and (max-width: 1119px) {
						.title__container {
							width: 70%;
						}

						section {
							width: 80%;
						}
					}

					@media screen and (max-width:480px) {
						.title__container {
							width: 100%;
						}

						section {
							width: 95%;
						}
					}
					}
				`}
				</style>
			</Layout>
		);
	}
}

Post.propTypes = {
	url: PropTypes.object.isRequired
};

export default Post;
