import Head from "next/head";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <>
      <Head>
        <title>Slider</title>
        <meta name="description" content="Slider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto mt-40 h-screen max-w-screen-md">
        <Slider />
      </main>
    </>
  );
};

export default Home;
