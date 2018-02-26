import styles from './styles/footer';

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
		<style jsx>{styles}</style>
	</footer>
);

export default Footer;
