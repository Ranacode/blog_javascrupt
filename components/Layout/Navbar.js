import Link from 'next/link';
import styles from './styles/navbar';

class Navbar extends React.Component {
	state = {
		activeToggle: false
	};

	activeToggle = () => {
		this.setState({ activeToggle: !this.state.activeToggle });
	};
	render() {
		return (
			<nav>
				<div className="header">
					<h1>
						<Link href="/">
							<a>JAVASCRUPT</a>
						</Link>
					</h1>
					<div onClick={this.activeToggle} className="bars-icon ">
						<i className="fas fa-bars fa-2x" />
					</div>
				</div>

				<ul className={`nav-items ${this.state.activeToggle ? 'activeToggle' : ''}`}>
					<li>Artículos</li>
					<li>Front-End</li>
					<li>Back-End</li>
					<li>Cursos</li>
					<li>Sobre mí</li>
					<li>Contacto</li>
				</ul>
				<style jsx>{styles}</style>
			</nav>
		);
	}
}

export default Navbar;
