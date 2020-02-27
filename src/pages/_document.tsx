import Document, { Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
	render() {
		return (
			<html lang="en-US">
				<Head>
					<title>Ruina</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
				</Head>
				<body className="bg-gray-200 pb-12">
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
