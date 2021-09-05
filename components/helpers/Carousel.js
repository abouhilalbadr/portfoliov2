import { useState } from "react"
import lex from '../../assets/lex.jpeg'
import camille from '../../assets/camille.jpeg'
import Person from "./Person"

const Carousel = () => {
  const [active, setActive] = useState(0)

  const people = [
    { img: camille, name: "Camille Larmanou", role: "External Affairs Officer", quote: "The School of Collective Intelligence can not thank Badr enough for his lightning speed, flexibility and quality work on our website frontend design. We got access to exactly the features we needed, all in record time. A warm thank you and a strong recommendation from all of us at the School." },
    { img: lex, name: "Lex Paulson", role: "Executive Director at UM6P; Associé at SCIAM", quote: "Fantastic and rapid work on our website -- a great coder and true professional. Bravo Badr." }
  ]

  return (
    <div className="py-10">
      {people.map((person, index) => (
        (active === index) && <Person person={person} key={index} />
      ))}
      <div>
        <button
          className={"inline-block mx-2 w-4 h-4 rounded-full border-2 cursor-pointer transition duration-500 ease-in-out " + ((active === 0 ? 'bg-mainColor border-mainColor' : 'border-gray'))}
          onClick={() => setActive(0)}
        >
        </button>
        <button
          className={"inline-block mx-2 w-4 h-4 rounded-full border-2 cursor-pointer transition duration-500 ease-in-out " + ((active === 1 ? 'bg-mainColor border-mainColor' : 'border-gray'))}
          onClick={() => setActive(1)}
        >
        </button>
      </div>
    </div>
  )
}

export default Carousel