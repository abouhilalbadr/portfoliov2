import Image from "next/image"

import tv2m from '../assets/clients/2m.png'
import leet from '../assets/clients/1337.png'
import um6p from '../assets/clients/um6p.png'
import sci from '../assets/clients/sci.png'
import factory from '../assets/clients/1450.png'
import iwaco from '../assets/clients/iwaco.png'

const Clients = () => {
  const logos = [
    { url: um6p, title: 'UM6P' },
    { url: sci, title: 'School of collective intelligence' },
    { url: leet, title: '1337' },
    { url: tv2m, title: '2m' },
    { url: factory, title: '1450 Factory' },
    { url: iwaco, title: 'IWACO' },
  ]
  return (
    <section className="px-6 lg:px-0 py-16 lg:py-36 border-t border-gray">
      <div className="container">
        <div className="w-full lg:w-1/2 mx-auto text-center">
          <h2 className="font-bold mb-6 text-2xl lg:text-3xl">
            I'm proud to have collaborated with some awesome companies:
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap">
          {(logos.map((logo, i) => (
            <div className="w-full lg:w-1/3" key={i}>
              <div className="flex justify-center items-center p-8">
                <Image
                  src={logo.url}
                  alt={logo.title}
                />
              </div>
            </div>
          )))}
        </div>
      </div>
    </section>
  )
}

export default Clients