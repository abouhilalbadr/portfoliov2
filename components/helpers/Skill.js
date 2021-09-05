import Image from 'next/image'

const Skill = ({ skill, index, ...extra }) => {
  return (
    <div className="w-full lg:w-1/3" { ...extra }>
      <div className={"h-full py-8 lg:py-12 px-8 lg:px-16 text-center border-gray " + ((index === 1) ? "border-r border-l" : "")}>
        <Image
          src={skill.img}
          alt={skill.title}
          width={56}
          height={56}
        />
        <h3 className="py-4 text-xl font-bold">
          {skill.title}
        </h3>
        <p className="font-light text-lg leading-relaxed mb-8">
          {skill.desc}
        </p>
        <h4 className="text-mainColor font-medium mb-2">
          {skill.more.title}
        </h4>
        <p className="font-light leading-relaxed mb-8">
          {skill.more.languages.join(', ')}
        </p>
        <h4 className="text-mainColor mb-2">
          {skill.tools.title}
        </h4>
        <ul className="flex flex-col my-4">
          {skill.tools.tools.map((tool, i) => (
            <li className="font-thin leading-loose" key={i}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skill