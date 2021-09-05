import Carousel from "./helpers/Carousel"

const Testimonials = () => {
  return (
    <section className="px-6 lg:px-0 py-16 lg:py-36 border-t border-gray">
      <div className="container">
        <div className="w-full lg:w-1/2 mx-auto text-center">
          <h2 className="font-bold mb-6 text-2xl lg:text-3xl">
            Testimonials
          </h2>
          <p className="font-light text-lg mb-6">People I've worked with have said some nice things...</p>
          <Carousel />
        </div>
      </div>
    </section>
  )
}

export default Testimonials