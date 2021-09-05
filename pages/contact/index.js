import Head from 'next/head'

import Header from '../../components/Header'
import Form from '../../components/Form'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Abouhilal Badr | Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Header page="form" />
      <Form
        title="Thanks for taking the time to reach out. How can I help you today?"
        type="contact"
      />
    </>
  )
}
