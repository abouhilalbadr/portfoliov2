import Link from 'next/link'

const NewProject = () => {
  return (
    <section className="bg-mainColor text-white px-6 py-20 text-center">
      <div className="container">
        <div className="py-14 px-5 bg-secondColor shadow-lg -mt-36 rounded-xl">
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between">
            <div className="flex-grow flex-shrink flex-basis p-3">
              <h3 className="font-bold text-3xl">Start a project</h3>
            </div>
            <div className="flex-grow flex-shrink flex-basis p-3 mb-4 lg:mb-0">
              <p className="text-lg font-thin">Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
            </div>
            <div className="flex-grow flex-shrink flex-basis p-3">
              <Link href="/project">
                <a className="border-2 border-mainColor py-4 px-10 text-white rounded-full hover:bg-mainColor  transition duration-500 ease-in-out tracking-wide text-xl font-thin">
                  Let's do this
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewProject