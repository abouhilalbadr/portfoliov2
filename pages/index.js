import { firestore } from "../utils/firebase";
import { collection, getDocs } from "@firebase/firestore";

import Head from "next/head";
import About from "../components/About";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewProject from "../components/NewProject";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Startup from "../components/Startup";
import Testimonials from "../components/Testimonials";
import Works from "../components/Works";

const Home = ({ home }) => {
  return (
    <>
      <Head>
        <title>Abouhilal Badr | Desinger, Full-stack Developer</title>
        <meta
          name="description"
          content="Desinger, Full-stack Developer"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header page="home" header={home.header} hero={home.hero} />
      <About about={home.about} />
      <Skills skills={home.about.fields} />
      <Works works={home.works} />
      <Clients clients={home.clients} />
      <Startup startup={home.projects} />
      <Projects
        projects={home.projects.items}
        collaboration={home.projects.collaboration}
      />
      <Testimonials testimonials={home.testimonials} />
      <NewProject newProject={home.new} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const collectionRef = collection(firestore, "home");
  const getHome = await getDocs(collectionRef);
  const home = getHome.docs.map((doc) => doc.data());

  return {
    props: {
      home: home.length > 0 && home[0],
    },
  };
};

export default Home;
