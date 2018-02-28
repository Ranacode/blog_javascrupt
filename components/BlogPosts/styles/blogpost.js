import css from 'styled-jsx/css';

export default css`
	.post {
		background: white;
		border: 1px solid #dbdbdb;
		padding: 0.5em;
		margin: 1em 0.5em 1em 0.5em;
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
`;
