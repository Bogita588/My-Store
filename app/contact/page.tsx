// pages/Contact.js

import Head from 'next/head';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">Send us a message:</p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" className="w-full border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" className="w-full border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" placeholder="Your message" rows={5} className="w-full border-gray-300 rounded-md p-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Send</button>
            </form>
          </div>
          <div>
            <p className="mb-4">Contact Information:</p>
            <p>11001 City Centre</p>
            <p>Nairobi,Kenya</p>
            <p>Phone: +254745347544</p>
            <p>Email: bogitabrian@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
