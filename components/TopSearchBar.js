import React, { Component } from 'react';

class TopSearchBar extends Component {
	state = {};
	render() {
		return (
			<div className="search-bar">
				<form>
					<input type="text" placeholder="Busca en la web..." required />
					<button type="submit">
						<i className="fas fa-2x fa-search" />
					</button>
				</form>
				<style jsx>{`
					.search-bar {
						margin: 1em;
						background: #4a4a4a;
						padding: 0.5em;
						borde-radius: 10px;
					}
					form {
						display: flex;
						flex-direction: row;
						align-items: center;
					}

					form input {
						flex-grow: 1;
						transition: padding 0.3s ease;
					}

					form input:hover {
						padding: 0.3em;
					}

					form input:focus {
						font-size: 19px;
					}
					form input::placeholder {
						font-style: italic;
						font-weight: bold;
					}

					button {
						background: #f5da55;
						padding: 0.5em;
						flex: 1;
						transition: 0.3s ease all;
						border-radius: 10px;
					}

					button svg {
						color: #4a4a4a;
					}
					button:hover {
						cursor: pointer;
						transform: scale(1.1);
						background: #f8d730;
					}
				`}</style>
			</div>
		);
	}
}

export default TopSearchBar;
