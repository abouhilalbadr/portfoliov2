import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"

import messageImage from '../assets/thanks.svg'
export default function Custom404() {
  return (
    <>
      <Head>
        <title>Abouhilal Badr | 404 Error</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <Image
          src={messageImage}
          alt="Page not found"
          height={400}
          width={600}
        />
        <h1 className="text-3xl lg:text-6xl font-medium mb-6 mt-4">Message received. Thanks!</h1>
        <p className="font-thin text-xl w-full lg:w-1/3 mb-8 lg:mb-12 px-2">I'll be in touch with you shortly.</p>
        <Link href="/">
          <a className="border-2 border-mainColor py-4 px-10 text-mainColor rounded-full hover:bg-mainColor hover:text-white transition duration-500 ease-in-out tracking-wide">
            Back to Home
          </a>
        </Link>
      </div>
    </>
  )
}