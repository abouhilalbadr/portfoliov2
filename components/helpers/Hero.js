import Image from "next/image";
const Hero = ({ hero }) => {
  return (
    <section className="px-4 lg:px-0 pt-6 lg:pt-12">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-extrabold text-4xl leading-normal mb-2 tracking-wider">
          {hero.title}
        </h1>
        <h2 className="text-xl font-thin my-4">{hero.description}</h2>
        <Image
          src={hero.profile}
          alt="Abouhilal badr"
          width={264}
          height={280}
        />
      </div>
      <div className="flex justify-center pt-10 lg:pt-20">
        <Image src={hero.image} alt="hero image" width={650} height={265} />
      </div>
    </section>
  );
};

export default Hero;
