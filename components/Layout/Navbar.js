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
					<li title="Encuentra los artículos de tu interés">
						<Link href="/contact">
							<a>Artículos</a>
						</Link>
					</li>
					<li title="Todo lo relacionado con el Front esta aquí">
						<Link href="/contact">
							<a>Front-End</a>
						</Link>
					</li>
					<li title="Todo lo relacionado con el Back esta aquí">
						<Link href="/contact">
							<a>Back-End</a>
						</Link>
					</li>
					<li className="disabled" title="Nuevos cursos próximamente">
						<Link href="/contact">
							<a>Cursos</a>
						</Link>
					</li>
					<li title="Dejame tus inquietudes en esta zona">
						<Link href="/contact">
							<a>Contacto</a>
						</Link>
					</li>
				</ul>
				<style jsx>{styles}</style>
			</nav>
		);
	}
}

export default Navbar;
