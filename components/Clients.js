const Clients = ({ clients }) => {
  return (
    <section className="px-6 lg:px-0 py-16 lg:py-36 border-t border-gray">
      <div className="container">
        <div className="w-full lg:w-1/2 mx-auto text-center">
          <h2 className="font-bold mb-6 text-2xl lg:text-3xl">
            {clients.title}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap">
          {clients.items.map((client, i) => (
            <div className="w-full lg:w-1/3" key={i}>
              <div className="flex justify-center items-center p-8 h-full">
                <img src={client.logo} alt={client.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
