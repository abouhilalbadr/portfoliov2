import Head from 'next/head'
import About from '../components/About'
import Clients from '../components/Clients'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NewProject from '../components/NewProject'
import Projects from '../components/projects'
import Skills from '../components/Skills'
import Startup from '../components/Startup'
import Testimonials from '../components/Testimonials'
import Works from '../components/Works'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abouhilal Badr | Desinger, Full-stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Header page="home" />
      <About />
      <Skills />
      <Works />
      <Clients />
      <Startup />
      <Projects />
      <Testimonials />
      <NewProject />
      <Footer />
    </>
  )
}
