import Head from 'next/head'
import Header from '../../components/Header'
import Form from '../../components/Form'

export default function Project() {
  return (
    <>
      <Head>
        <title>Abouhilal Badr | New Project</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Header page="form" />
      <Form
        title="I’m excited to learn about your project. Ready to get started?"
        type="project"
      />
    </>
  )
}