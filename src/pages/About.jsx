import React from "react";

function About() {
  return (
    <div className="bg-gray-50 text-gray-800 mt-14">
      {/* Hero Section */}
      <header className="bg-gray-500 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Areopark Ticket Booking & Aviation Training</h1>
        <p className="mt-4 text-lg">
          Book your tickets and learn how to fly with our comprehensive aviation guidance.
        </p>
      </header>

      <div className="container mx-auto px-14 py-10 text-start">
        {/* Section 1: About Areopark */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Areopark</h2>
          <p className="text-gray-700 leading-relaxed">
            Areopark is more than just a flight booking platform. We aim to provide a complete aviation experience. Whether you’re booking a domestic or international flight, or looking to gain knowledge about aerodynamics, aviation rules, and guidelines, Areopark is your go-to destination. With exclusive deals and training programs, we bring aviation closer to you.
          </p>

        </section>

        {/* Section 2: Booking Flights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Book Your Flights</h2>
          <p className="text-gray-700 leading-relaxed">
            Booking your flight with Areopark is simple and efficient. Our platform offers a user-friendly interface where you can:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Search for flights with multiple filters for the best deals.</li>
            <li>Book tickets for domestic and international destinations.</li>
            <li>Get exclusive discounts for students, senior citizens, doctors, and armed forces personnel.</li>
          </ul>

        </section>

        {/* Section 3: Learn to Fly */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Learn to Fly</h2>
          <p className="text-gray-700 leading-relaxed">
            At Areopark, we also offer aviation training programs for enthusiasts who want to learn how to fly. Our programs include:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Theoretical training on the principles of flight and aerodynamics.</li>
            <li>Hands-on training with certified flight instructors.</li>
            <li>Simulator training for real-life flying experiences.</li>
          </ul>

        </section>

        {/* Section 4: Aerodynamics Rules & Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Aerodynamics Rules & Guidelines</h2>
          <p className="text-gray-700 leading-relaxed">
            Understanding aerodynamics and aviation guidelines is crucial for anyone involved in flying. Areopark provides resources on:
          </p>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li>FAA (Federal Aviation Administration) regulations for pilots.</li>
            <li>ICAO (International Civil Aviation Organization) guidelines for international flights.</li>
            <li>Weather and its impact on flying.</li>
            <li>Safety procedures for passengers and pilots.</li>
          </ol>

        </section>

        {/* Section 5: Why Choose Areopark? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose Areopark?</h2>
          <p className="text-gray-700 leading-relaxed">
            Areopark combines convenience and expertise. With our platform, you get:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Seamless flight booking experience.</li>
            <li>Comprehensive aviation training programs.</li>
            <li>Access to exclusive resources on aerodynamics and aviation safety.</li>
            <li>24/7 customer support for all your needs.</li>
          </ul>

        </section>

        {/* Section 6: Testimonials */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Areopark made booking my flight so easy! I also enrolled in their aviation training program and had a fantastic experience. Highly recommend it!"
              </p>
              <footer className="mt-4 text-right font-bold">- John D.</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Learning to fly was always a dream, and Areopark helped me achieve it. Their resources on aerodynamics are top-notch."
              </p>
              <footer className="mt-4 text-right font-bold">- Sarah K.</footer>
            </blockquote>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
