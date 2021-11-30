const About = ({ about }) => {
  return (
    <section className="bg-mainColor px-6 lg:px-0 pt-24 lg:pt-36 pb-56 lg:pb-72">
      <div className="container">
        <div className="text-center w-full lg:w-3/5 mx-auto text-white">
          <h2 className="font-bold text-2xl lg:text-3xl mb-6">{about.title}</h2>
          <p className="leading-8 lg:text-lg font-thin">{about.description}</p>
        </div>
      </div>
    </section>
  );
};
export default About;
