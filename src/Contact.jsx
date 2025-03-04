function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-900 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-400">Get in Touch</h2>
          <p className="text-lg text-gray-300 mt-4">
            Have a question or want to work together? Send me a message!
          </p>
  
          <form className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  