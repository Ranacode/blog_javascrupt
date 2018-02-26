import Head from 'next/head';
import Reboot from 'material-ui/Reboot';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
				<meta charSet="utf-8" key="utf" />
				<title>Javascrupt - Lleva tus habilidades de Javascript al siguiente nivel</title>
				<link
					href="https://fonts.googleapis.com/css?family=Raleway|Lusitana"
					rel="stylesheet"
					key="globalFonts"
				/>
				<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
			</Head>
			<Reboot />
			<Navbar />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
