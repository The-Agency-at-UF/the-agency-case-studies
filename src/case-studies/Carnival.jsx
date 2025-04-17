import React from 'react';

// Import your real images
import carnivalLogo from '../assets/images/gators-unidos/carnivalLogo.jpg';
import agencyLogo from '../assets/images/gators-unidos/The Agency_White Logo.png';
import funderstruck from '../assets/images/gators-unidos/funderstruck.png';
import cautiousTraveler from '../assets/images/gators-unidos/cautiousTraveler.png';
import prospectiveTraveler from '../assets/images/gators-unidos/prospectiveTraveler.png';
import chooseFun from '../assets/images/gators-unidos/chooseFun.png';
import cruise1 from '../assets/images/gators-unidos/cruise1.png';
// Trade article images
import newStudy from '../assets/images/gators-unidos/newStudy.png';
import UFCarnivalFinds from '../assets/images/gators-unidos/UF&CarnivalFinds.png';
import travelEnthusiasm from '../assets/images/gators-unidos/travelEnthusiasm.png';
import NewsDesk from '../assets/images/gators-unidos/NewsDesk.png';
import NassauGuardian from '../assets/images/gators-unidos/NassauGuardian.png';
import carnivalNewsroom from '../assets/images/gators-unidos/carnivalNewsroom.png';

const Carnival = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#004E8E] text-white overflow-hidden font-sans">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 opacity-50" />
      <div className="absolute top-1/3 left-10 w-24 h-24 rounded-full bg-white/10 opacity-30" />
      <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-white/10 opacity-40" />

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

        {/* The Opportunity Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-red-500 mb-6">THE OPPORTUNITY</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p>
                2021 was an adjustment period for consumers and brands alike. Consumers needed 
                to discover exciting ways to connect with their loved ones. Brands needed 
                to find strategies that fit the shared sentiments of their target audiences.
              </p>
              <p>
                Carnival Cruise decided it was time to lean into its reputation for fun with a campaign introducing 
                the Funderstruck feeling.
              </p>
              <p>
                The Funderstruck campaign showed potential cruise vacationers that the fun 
                they're searching for is best experienced on a Carnival Cruise ship. Carnival 
                needed The Agency to identify how people wanted to travel after a year of quarantine. 
                Our researchers set sail on a digital exploration using Talkwalker, native social searches 
                on TikTok and Instagram, and Enterprise Research tools to determine if travelers were ready 
                to feel Funderstruck.
              </p>
              <p className="font-bold">
                After refining our search, we pulled 21.3 MILLION results to find the following:
                There are two types of people that want to travel in 2022.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={funderstruck} alt="Funderstruck" className="max-w-md rounded-lg shadow-xl" />
            </div>
          </div>
        </section>

        {/* Traveler Types */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">THE CAUTIOUS TRAVELER</h3>
            <p className="text-gray-300 mb-4">
              Concerned about safety, health, and security while traveling.
            </p>
            <img src={cautiousTraveler} alt="Cautious Traveler" className="w-full rounded-lg" />
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">THE PROSPECTIVE TRAVELER</h3>
            <p className="text-gray-300 mb-4">
              Comfortable with traveling in the post-pandemic world.
            </p>
            <img src={prospectiveTraveler} alt="Prospective Traveler" className="w-full rounded-lg" />
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-red-500 mb-6">THE SOLUTION</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p>
                Analyzing global conversations from 21.3 million results led us to two types of travelers: 
                the cautious traveler and the prospective traveler.
              </p>
              <p>
                We provided Carnival with a more in-depth understanding of post-quarantine travel sentiments 
                by defining priorities for travelers.
              </p>
              <p>
                Carnival used our traveler profiles to create a compelling Funderstruck campaign that appeals 
                to both cautious and prospective travelers.
              </p>
            </div>
            <div>
              <img src={chooseFun} alt="Choose Fun" className="w-full rounded-lg shadow-xl" />
            </div>
          </div>
        </section>

        {/* What Does This Mean */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">SO, WHAT DOES THIS MEAN?</h2>
          <h3 className="text-2xl font-bold text-blue-400 mb-4">THE ANSWER IS... RELATIONSHIPS</h3>
          <div className="space-y-6">
            <p>
              A lot of the conversation caused wanting to travel to spike, but the reasons 
              behind wanting to vacation/travel varied based on who they wanted to make 
              memories with.
            </p>
            <p>
              It is not about the place in particular that they want to vacation to... it's about the 
              people they want to see and spend memorable, quality time with.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">PEOPLE ARE EXCITED TO TRAVEL... BUT WHY ARE THEY EXCITED?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img src={cruise1} alt="People on cruise" className="w-full rounded-lg mb-4" />
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-blue-400">BEACH BABE VACATION 9.9%</h4>
                  <p>
                    Online users mentioned traveling with their "girlfriends," 
                    "gal pals," or "girls trips" to beaches and other vacation 
                    spots in the sun.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-400">COUPLE TRAVEL 9.7%</h4>
                  <p>
                    Many users mentioned traveling with their "significant 
                    other" or "partner" for their first trips together or simply 
                    were excited to go on "baecations" again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trade Articles Section */}
        <section className="mb-16">
          <div className="bg-red-600 text-white py-8 px-4 text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">8 PUBLISHED TRADE ARTICLES</h2>
            <h3 className="text-3xl font-bold">230,000+ IMPRESSIONS</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <img src={newStudy} alt="New Study With Carnival" className="w-full rounded-lg shadow-lg mb-6" />
            </div>
            <div className="col-span-1">
              <img src={UFCarnivalFinds} alt="UF and Carnival Finds" className="w-full rounded-lg shadow-lg mb-6" />
            </div>
            <div className="col-span-1">
              <img src={travelEnthusiasm} alt="Travel Enthusiasm is Back" className="w-full rounded-lg shadow-lg mb-6" />
            </div>
            <div className="col-span-1">
              <img src={NewsDesk} alt="News Desk" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="col-span-1">
              <img src={NassauGuardian} alt="Nassau Guardian" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="col-span-1">
              <img src={carnivalNewsroom} alt="Carnival Newsroom" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Footer Logos */}
        <section className="flex items-center justify-center gap-4 mb-8">
          <img src={carnivalLogo} alt="Carnival" className="h-12" />
          <span className="text-2xl font-bold">x</span>
          <img src={agencyLogo} alt="The Agency" className="h-12" />
        </section>
      </div>
    </div>
  );
};

export default Carnival;
