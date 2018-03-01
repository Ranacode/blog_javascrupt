const Newsletter = (props) => (
	<div className="newsletter">
		<form
			action="https://javascrupt.us17.list-manage.com/subscribe/post?u=66eb37d4582b7216a539d121f&amp;id=950b6165a1"
			method="POST"
			name="mc-embedded-subscribe-form"
		>
			<h2>Entérate de las últimas noticias de Javascrupt</h2>
			<div className="email-input">
				<i className="far fa-3x fa-envelope" />
				<input type="email" name="EMAIL" placeholder="Tu email aqui" required />
			</div>
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
				}
			`}
		</style>
	</div>
);

export default Newsletter;
