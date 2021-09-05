import Image from 'next/image'

const Person = ({ person, ...extra }) => {
  return (
    <div className="mb-8" { ...extra }>
      <Image
        className="rounded-full"
        src={person.img}
        alt={person.name}
      />
      <p className="font-thin leading-relaxed mt-8 text-xl lg:text-2xl mb-10 lg:h-48">“{person.quote}”</p>
      <h3 className="mb-1 font-extrabold text-xl">{person.name}</h3>
      <h4 className="font-light text-sm">{person.role}</h4>
    </div>
  )
}

export default Person