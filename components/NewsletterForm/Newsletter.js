import React from 'react';
import Validator from 'validator';

class Newsletter extends React.Component {
	state = {
		email: '',
		showError: false
	};

	_validateEmail = (event) => {
		if (!Validator.isEmail(this.state.email)) {
			this.setState({ showError: true });
			event.preventDefault();
		} else {
			this.setState({ showError: false });
		}
	};

	onChange = (event) => {
		this.setState({
			email: event.target.value
		});
	};

	render() {
		return (
			<div className="newsletter">
				<form
					action="https://javascrupt.us17.list-manage.com/subscribe/post?u=66eb37d4582b7216a539d121f&amp;id=950b6165a1"
					method="POST"
					name="mc-embedded-subscribe-form"
					onSubmit={this._validateEmail}
				>
					<h2>Entérate de las últimas noticias de Javascrupt</h2>
					<div className="email-input">
						<i className="far fa-3x fa-envelope" />
						<input
							type="email"
							value={this.state.email}
							name="EMAIL"
							placeholder="Tu email aqui"
							required
							onChange={this.onChange}
						/>
					</div>
					{this.state.showError && <span className="inline-error">El emáil no es válido, revísalo.</span>}
					<button type="submit">¡Suscribirme!</button>
				</form>
				<style jsx>
					{`
						.newsletter {
							font-family: Lusitana, Georgia, sans-serif;
							margin: 1em 0.5em;
							padding: 1em;
							border: 1px solid #dbdbdb;
							background: white;
						}
						.newsletter form {
							padding: 0.1em;
							display: flex;
							flex-direction: column;
							align-content: center;
						}

						.newsletter form h2 {
							margin: 0.1em;
						}

						.newsletter form .email-input {
							display: flex;
							flex-direction: row;
							align-items: center;
						}

						.email-input input {
							flex-grow: 1;
							transition: 0.3s ease all;
						}

						.email-input input:hover {
							padding: 0.5em;
						}

						.email-input input:focus {
							font-family: Raleway, Verdana, sans-serif;
							font-size: 20px;
							outline: 1px solid green;
						}
						email-input svg {
							margin-right: 0.3em;
						}

						.newsletter form button {
							width: 100%;
							background: #f5da55;
							color: #323330;
							text-align: center;
							padding: 0.5em;
							font-size: 20px;
							font-weight: bold;
							cursor: pointer;
						}
						.inline-error {
							margin: 0.25rem 0;
							font-size: 0.875rem;
							color: #dc3545;
							font-style: italic;
							text-align: center;
						}

						@media screen and (max-width: 1020px) {
							.newsletter {
								margin: 0 auto;
								width: 60%;
							}
						}

						@media screen and (max-width: 615x) {
							.newsletter {
								margin: 0 auto;
								width: 80%;
							}
						}
					`}
				</style>
			</div>
		);
	}
}

export default Newsletter;
