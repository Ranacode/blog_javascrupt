import css from 'styled-jsx/css';

export default css`
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
		-webkit-box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.75);
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
`;
