
const Clients = () => {
  const clients = [
    { name: "John Lewis", logo: "/JohnLewis.svg" },
    { name: "Virgin Media", logo: "/VirginMedia.svg" },
    { name: "Ticketmaster", logo: "/Ticketmaster.svg" },
    { name: "Sainsbury's", logo: "/Sainsburys.svg" },
    { name: "NOW TV", logo: "/Now.svg" },
    { name: "WPP", logo: "/WPP.svg" },
    { name: "VML", logo: "/VML.svg" },
    { name: "Net-a-Porter", logo: "/Net-a-Porter.svg" },
    { name: "Hometree", logo: "/Hometree.svg" },
    { name: "Wayflyer", logo: "/Wayflyer.svg" },
    { name: "HandPickedHotels", logo: "/HandPickedHotels.svg" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground">Our clients</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className="h-8 md:h-10 flex items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
