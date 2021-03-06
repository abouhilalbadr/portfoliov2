import Image from "next/image";

const Skill = ({ skill, index, ...extra }) => {
  return (
    <div className="w-full lg:w-1/3" {...extra}>
      <div
        className={
          "h-full py-8 lg:py-12 px-8 lg:px-16 text-center border-gray dark:border-dark-bgColor " +
          (index === 1 ? "border-r border-l" : "")
        }
      >
        <div className="rounded-full bg-white w-24 h-24 mx-auto flex justify-center items-center">
          <Image src={skill.image} alt={skill.title} width={56} height={56} />
        </div>
        <h3 className="py-4 text-xl font-bold">{skill.title}</h3>
        <p className="font-light text-lg leading-relaxed mb-8">
          {skill.description}
        </p>
        <h4 className="text-mainColor dark:text-white font-medium mb-2">
          {skill.knowledge.title}
        </h4>
        <p className="font-light leading-relaxed mb-8">
          {skill.knowledge.items.join(", ")}
        </p>
        <h4 className="text-mainColor dark:text-white mb-2">
          {skill.tools.title}
        </h4>
        <ul className="flex flex-col my-4">
          {skill.tools.items.map((tool, i) => (
            <li className="font-thin leading-loose" key={i}>
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skill;
