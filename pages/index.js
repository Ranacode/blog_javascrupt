import Layout from '../components/Layout/Layout';

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
