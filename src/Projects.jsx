function Projects() {
    const projects = [
      {
        title: "InToll",
        description: "In a team-based final project, I was responsible for designing the UI for InToll, an app concept where toll fees are charged through a post-payment system. Inspired by Japan's ETC (Electronic Toll Collection) system, InToll integrates an in-car identification device that allows vehicles to pass through toll gates seamlessly without stopping.",
        image: "InToll.png", 
        link: "",
      },
      {
        title: "FlexiCar",
        description: "For my final Web Programming project, I developed FlexiCar, a car rental website with dedicated user and admin pages for managing vehicle data. The platform allows users to search for available cars, view automatic price calculations, make bookings, and track vehicle status (available, booked, or returned).",
        image: "project2.png",
        link: "",
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
  
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center h-64 text-center">
              <h3 className="text-2xl font-semibold text-gray-300">More Coming Soon</h3>
              <p className="text-gray-400 mt-2 px-4">Stay tuned for upcoming projects!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  