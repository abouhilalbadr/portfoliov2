import Skill from "./helpers/Skill";

const Skills = ({ skills }) => {
  return (
    <section className="pt-20 pb-4 px-6 -mt-56">
      <div className="container">
        <div className="flex flex-col lg:flex-row flex-wrap rounded-xl shadow-lg bg-white border border-gray">
          {skills.map((skill, i) => (
            <Skill skill={skill} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
