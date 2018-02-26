const Footer = () => (
	<footer>
		<div className="copyright">
			Copyright &copy; {new Date().getFullYear()}
			<span> Javascrupt</span>
		</div>
		<div className="socialIcons">
			<ul>
				<li>
					<i className="fab fa-twitter fa-2x" />
				</li>
				<li>
					<i className="fab fa-youtube fa-2x" />
				</li>
				<li>
					<i className="fab fa-facebook fa-2x" />
				</li>
				<li>
					<i className="fab fa-github fa-2x" />
				</li>
			</ul>
		</div>
		<style jsx>
			{`
				footer {
					background: #eee;
					padding: 0.5em;
					font-family: Lusitana, Georgia, sans-serif;
					color: black;
					width: 100%;
					display: flex;
					justify-content: space-around;
					align-items: center;
					flex-wrap: wrap;
					border: 1px solid #dbdbdb;
					height: auto;
				}

				footer > .socialIcons > ul {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					padding: 0.3em;
					list-style: none;
					border-top: 1px solid black;
					border-bottom: 1px solid black;
				}
				.copyright {
					text-transform: uppercase;
				}
				.copyright span {
					font-style: italic;
					margin-left: 5px;
				}

				ul > li {
					margin: 10px;
				}

				svg.fa-twitter {
					color: #55acee;
				}

				svg.fa-github {
					color: #black;
				}

				svg.fa-youtube {
					color: #ff0000;
				}

				svg.fa-facebook {
					color: #3b5998;
				}
			`}
		</style>
	</footer>
);

export default Footer;
