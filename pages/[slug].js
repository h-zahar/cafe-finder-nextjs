import Head from "next/head";
import { useRouter } from "next/router";

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <Head>
                <title>Page {slug}</title>
            </Head>
            <p>Page {slug}</p>
        </div>
    );
};

export default Slug;