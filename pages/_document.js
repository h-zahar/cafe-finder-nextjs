import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preload" href="/fonts/Cuprum-Regular.ttf" as="font" crossOrigin="anonymous" ></link>
                    <link rel="preload" href="/fonts/Cuprum-Bold.ttf" as="font" crossOrigin="anonymous" ></link>
                    <link rel="preload" href="/fonts/Cuprum-SemiBold.ttf" as="font" crossOrigin="anonymous" ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;