const Navbar = () => {
	return (
		<nav>
			<div>
				<h1>JAVASCRUPT</h1>
			</div>
			<ul>
				<li className="notification">
					Artículos
					<i class="far fa-bell" />
				</li>
				<li>Front-End</li>
				<li>Back-End</li>
				<li>Cursos</li>
				<li>Sobre mí</li>
				<li>Contacto</li>
			</ul>
			<style jsx>{`
                 nav {
                     background: #f5da55;
                     color:#323330;
                     width:100%;
                     height: auto;
                     border-bottom: 3px solid #323330;
                     display:flex;
                     justify-content: space-around;
                     align-items: center;
                     flex-wrap: wrap;
                 }

                 h1 {
                     font-size:40px;
                     margin:0 0 0.1em 0;
                 }

                ul {
                    list-style: none
                    display:flex;
                    justify-content: space-between;
                    padding:5px;
                }
                i.far.fa-bell {
                    position:absolute;
                    right:10px;
                    bottom:5px;
                }
                li {
                    font-family: Lusitana, Georgia, sans-serif;
                    font-size:22px;
                    border: 1px solid #323330;
                    margin:5px;
                    padding:0.6em;
                    border-radius: 8px;
                    transition: 0.3s ease-in-out;
                }

                li:hover {
                    cursor: pointer;
                    color: #f5da55;
                    background: #323330;
                    border-color: #f1d131;
                    transform: scale(1.1);

                }

                li.notification {
                    position:relative;
                }

            `}</style>
		</nav>
	);
};

export default Navbar;
