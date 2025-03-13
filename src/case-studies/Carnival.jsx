import React from 'react';

// Import your real images
import carnivalLogo from '../assets/images/gators-unidos/carnivalLogo.jpg';
import agencyLogo from '../assets/images/gators-unidos/The Agency_White Logo.png';
import funderstruck from '../assets/images/gators-unidos/funderstruck.png';
import cautiousTraveler from '../assets/images/gators-unidos/cautiousTraveler.png';
import prospectiveTraveler from '../assets/images/gators-unidos/prospectiveTraveler.png';
import chooseFun from '../assets/images/gators-unidos/chooseFun.png';

const Carnival = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans">
      {/* Floating Circles / Decorative Shapes */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500 rounded-full opacity-20 z-0" />
      <div className="absolute top-[40%] right-10 w-16 h-16 bg-red-400 rounded-full opacity-30 z-0" />
      <div className="absolute bottom-[-2rem] left-[40%] w-24 h-24 bg-blue-300 rounded-full opacity-40 z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-4 inline-block bg-blue-700 text-white text-sm uppercase font-bold px-3 py-1 rounded">
          Case Study
        </div>

        {/* Carnival x The Agency + Headline */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          {/* Logos */}
          <div className="flex items-center gap-4">
            <img
              src={carnivalLogo}
              alt="Carnival Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="text-xl font-bold text-gray-700">x</span>
            <img
              src={agencyLogo}
              alt="The Agency Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          {/* Headline */}
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 md:max-w-[50%]">
            The Agency Helps Carnival Navigate the Sentiments of Travelers Post-2021
          </h1>
        </div>

        {/* THE OPPORTUNITY Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Text */}
          <div className="flex-1 text-gray-800">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">THE OPPORTUNITY</h2>
            <p className="mb-4">
              2021 was an adjustment period for consumers and brands alike. Consumers
              needed to discover exciting ways to reconnect with one another, so Carnival
              decided to find strategies that fit the shared sentiments of their target
              audiences.
            </p>
            <p className="mb-4">
              Carnival Cruise decided it was time to lean into its reputation for fun
              with a communication intended to help travelers feel{" "}
              <em>“Funderstruck.”</em>
            </p>
            <p className="mb-4">
              The Funderstruck campaign showed potential cruise vacationers that the fun
              they’re searching for is best experienced on a Carnival Cruise ship. Our
              researchers gathered social data to glean how this “Funderstruck” message
              could be amplified on TikTok and Instagram, and refined our approach to
              feel Funderstruck.
            </p>
            <p>
              After refining our search, we pulled{" "}
              <strong>21.3 MILLION</strong> results to find the following: There are two
              types of people that want to travel in 2022.
            </p>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={funderstruck}
              alt="Funderstruck"
              className="max-w-full h-auto object-cover shadow-md"
            />
          </div>
        </div>

        {/* TWO TRAVELER TYPES */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* The Cautious Traveler */}
          <div className="flex-1 bg-blue-50 p-6 rounded shadow-sm">
            <h3 className="text-xl font-bold text-blue-700 mb-2">THE CAUTIOUS TRAVELER</h3>
            <p className="text-gray-700 mb-4">
              Prefers a more laid-back approach and wants to ensure safety and comfort
              while traveling.
            </p>
            <img
              src={cautiousTraveler}
              alt="Cautious Traveler"
              className="w-full h-auto object-cover rounded"
            />
          </div>

          {/* The Prospective Traveler */}
          <div className="flex-1 bg-blue-50 p-6 rounded shadow-sm">
            <h3 className="text-xl font-bold text-blue-700 mb-2">THE PROSPECTIVE TRAVELER</h3>
            <p className="text-gray-700 mb-4">
              Looks forward to exploring new destinations and seeking out adventure
              after a year of uncertainty.
            </p>
            <img
              src={prospectiveTraveler}
              alt="Prospective Traveler"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>

        {/* THE SOLUTION Section */}
        <section className="mb-12 bg-white text-blue-900 p-6 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">THE SOLUTION</h3>
          <p className="mb-4 text-gray-800">
            The Funderstruck campaign showed potential cruise vacationers that the fun
            they’re searching for is best experienced on a Carnival Cruise ship. Carnival
            needed big, bold ideas to captivate people who wanted to travel after a year
            of quarantine. Our researchers gathered social data to glean how this
            “Funderstruck” message could be amplified on TikTok and Instagram, and refined
            our approach to feel Funderstruck.
          </p>
          <p className="mb-4 text-gray-800">
            After refining our search, we pulled <strong>21.3 MILLION</strong> results to
            find the following: There are two types of people that want to travel in 2022.
          </p>

          {/* Example Solution Image */}
          <div className="mt-4">
            <img
              src={chooseFun}
              alt="Choose Fun"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* "SO, WHAT DOES THIS MEAN?" Section */}
        <section className="mb-12 bg-white text-blue-900 p-6 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">SO, WHAT DOES THIS MEAN?</h3>
          <p className="mb-4 text-gray-800">
            People are excited to travel... but why are they excited? Perhaps they’re
            cautious travelers looking for safe getaways, or prospective adventurers ready
            to see the world.
          </p>
          <p className="text-gray-800">
            By understanding travelers' sentiments, Carnival was able to create a campaign
            that aligned with what people wanted most—memorable, joyful experiences.
          </p>
        </section>

        {/* Trade Articles Section */}
        <section className="mb-12 bg-white text-blue-900 p-6 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">
            8 Published Trade Articles & 320,000+ Impressions
          </h3>
          <p className="text-gray-800">
            Carnival’s Funderstruck campaign garnered significant media coverage,
            resulting in over <strong>320,000</strong> impressions across <strong>8</strong>{" "}
            different trade publications. [Add more detail about the coverage and
            impact...]
          </p>
        </section>
      </div>
    </div>
  );
};

export default Carnival;
