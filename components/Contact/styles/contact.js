import css from 'styled-jsx/css';

export default css`
	.form__container {
		margin: 1em auto;
		padding: 1em;
		max-width: 600px;
		background: white;
		border: 1px solid #dbdbdb;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
		font-family: Raleway, Georgia, serif;
	}
	.form__container form {
		padding: 1em;
		height: auto;
		text-align: center;
		border: 1px solid #dbdbdb;
	}
	.form__container input {
		width: 90%;
		font-size: 20px;
		padding: 0.5em;
		margin: 0.5em auto;
		background: rgba(136, 128, 127, 0.1);
		border: 1px solid rgba(233, 54, 22, 0.5);
		color: rgba(1, 6, 7, 0.8);
		transition: 0.4s ease all;
	}

	.form__container *:required {
		-moz-box-shadow: none;
		box-shadow: none;
	}

	.form__container input:invalid {
		box-shadow: 0 0 3px red;
	}
	.form__container input:focus,
	.form__container textarea:focus {
		padding: 0.7em;
	}

	.form__container input::placeholder,
	.form__container textarea::placeholder {
		font-size: 20px;
		padding-left: 0.9em;
	}

	.form__container textarea {
		margin: 0.5em auto;
		padding: 0.5em;
		width: calc(100% - 45px);
		height: 300px;
		resize: none;
		transition: 0.4s ease all;
	}

	.form__container button {
		position: relative;
		width: 100%;
		display: block;
		margin: 30px auto;
		padding: 0;
		overflow: hidden;

		border-width: 0;
		outline: none;
		border-radius: 2px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, .6);

		background-color: #2ecc71;
		color: #ecf0f1;
	}

	.form__container button:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		display: block;
		width: 0;
		padding-top: 0;
		border-radius: 100%;
		background-color: rgba(236, 240, 241, .3);
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.form__container button:active:before {
		width: 120%;
		padding-top: 120%;
		transition: width .2s ease-out, padding-top .2s ease-out;
	}
	.form__container button > * {
		position: relative;
	}

	.form__container button:hover,
	.form__container button:focus {
		background-color: #27ae60;
	}

	.form__container button span {
		display: block;
		padding: 12px 24px;
		font-size: 24px;
	}
`;
