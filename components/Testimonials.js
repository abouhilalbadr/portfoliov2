import Carousel from "./helpers/Carousel";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="px-6 lg:px-0 py-16 lg:py-36 border-t border-gray dark:border-dark-gray">
      <div className="container">
        <div className="w-full lg:w-1/2 mx-auto text-center">
          <h2 className="font-bold mb-6 text-2xl lg:text-3xl">
            {testimonials.title}
          </h2>
          <p className="font-light text-lg mb-6">{testimonials.description}</p>
          <Carousel people={testimonials.items} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
