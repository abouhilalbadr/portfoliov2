const Startup = ({ startup }) => {
    return (
        <section className="bg-mainColor dark:bg-secondColor px-6 lg:px-0 pt-24 lg:pt-32 pb-40 lg:pb-56">
            <div className="container">
                <div className="text-center w-full lg:w-3/5 mx-auto text-white">
                    <h2 className="font-bold text-3xl mb-6">{startup.title}</h2>
                    <p className="leading-8 text-lg font-thin">
                        {startup.description}
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Startup;
