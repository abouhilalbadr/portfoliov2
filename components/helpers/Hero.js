import Image from 'next/image'
import profilePic from '../../assets/abouhilalbadr.svg'
import heroImage from '../../assets/hero.svg'
const Hero = () => {
  return (
    <section className="px-4 lg:px-0 pt-6 lg:pt-12">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-extrabold text-4xl leading-normal mb-2 tracking-wider">Creative Designer &amp; Full-stack Developer</h1>
        <h2 className="text-xl font-thin my-4">I design and code beautifully simple things, and I love what I do.</h2>
        <Image
          src={profilePic}
          alt="Abouhilal badr"
        />
      </div>
      <div className="flex justify-center pt-10 lg:pt-20">
        <Image
          src={heroImage}
          alt="hero image"
        />
      </div>
    </section>
  )
}

export default Hero