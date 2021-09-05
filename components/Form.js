import Image from 'next/image'
import profilePic from '../assets/abouhilalbadr.svg'

import ContactForm from './helpers/ContactForm'

const Form = ({title, type}) => {
  return (
    <section className="text-center">
      <div className="container">
        <div className="w-full lg:w-3/4 mx-auto">
          <div className="-mt-14 mb-10 lg:mb-14 mx-auto">
            <Image
              src={profilePic}
              alt="Abouhilal badr"
              width={90}
              height={90}
            />
          </div>
          <h1 className="text-3xl lg:text-4xl my-6 w-full lg:w-3/4 px-6 lg:px-0 mx-auto">{title}</h1>
          <ContactForm type={type} />
        </div>
      </div>
    </section>
  )
}

export default Form