import styles from './styles/contact.js';

const ContactForm = () => (
	<div className="form__container">
		<form action="https://formspree.io/romerodeveloper@techie.com" method="POST">
			<label>
				<input required autoFocus name="email" placeholder="Tu email para responderte" type="email" />
			</label>
			<textarea
				minLength="10"
				maxLength="1000"
				placeholder="Dejame tus inquietudes aquí"
				name="message"
				required
			/>
			<button type="submit">
				<span>ENVIAR</span>
			</button>
		</form>
		<style jsx>{styles}</style>
	</div>
);

export default ContactForm;
