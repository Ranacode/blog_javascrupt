import Link from 'next/link';

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
               a {
                   text-decoration: none;
                   color: #323330;
                   cursor:pointer;
                   transition: all 0.4s ease-in;
               }
                 .header h1 {
                     font-size:40px;
                     margin:0 0 0.1em 0;
                 }

                ul.nav-items {
                    list-style: none
                    display:flex;
                    justify-content: space-between;
                    padding:5px;
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
                
                .bars-icon {
                    display:none;
                }
             
                .activeToggle {
                    visibility:visible !important;
                    height: auto !important;
                    opacity:1 !important;
                }
                @media screen and (max-width:985px) {
                    .header {
                        margin: 0.3em 0;
                        border-bottom:1px solid black;
                        text-align:center;
                        width: 95%;
                    }
                }

                @media screen and (max-width:758px) {
                     .header {
                         display:flex;
                         justify-content: space-between;
                         align-items: center;
                         border: none;
                     }

                    .bars-icon {
                         display:block;
                         cursor:pointer;
                    }
                       ul.nav-items {
                           flex-direction:column;
                           align-content:center;
                           width:50%;
                           height:0;
                           opacity: 0;
                           visibility: hidden;
                           transition: visibility 0s opacity 0.3s linear;
                       }

                       ul.nav-items li{
                           text-align:center;
                       }
                    
                }
            }
            `}</style>
			</nav>
		);
	}
}

export default Navbar;
