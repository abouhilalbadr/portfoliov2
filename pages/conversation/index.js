import Head from 'next/head'
import Header from '../../components/Header'
import Form from '../../components/Form'

export default function Conversation() {
  return (
    <>
      <Head>
        <title>Abouhilal Badr | Start a conversation</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Header page="form" />
      <Form
        title="Want to discuss a startup collaboration? I'm most definitely game."
        type="conversation"
      />
    </>
  )
}