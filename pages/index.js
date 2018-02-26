import Link from 'next/link';
import Butter from 'buttercms';
import Layout from '../components/Layout/Layout';
import Parser from 'html-react-parser';

const butter = Butter('4a55813e1a9f5d6c1b68bc28f6fd710d9f00e595');

const Index = () => {
	return (
		<div>
			<Layout>
				<h3>Soy el contenido del layout</h3>
			</Layout>
			<style jsx global>{`
				body {
					background: #fafafa;
					font-family: Raleway, Helvetica, Arial, sans-serif;
					color: #000;
				}
			`}</style>
		</div>
	);
};

export default Index;
