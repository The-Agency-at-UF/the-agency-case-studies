import React from "react";

import amazonEchoMini from '../assets/images/amazon-alexa/Amazon_Echo_Mini_1.png';
import amazonEchoPlus from '../assets/images/amazon-alexa/Amazon_Echo_Plus 1.png';
import harryStyles from '../assets/images/amazon-alexa/Group 77.png';
import nintendo from '../assets/images/amazon-alexa/Group_78.png';
import amazonEchoDot from '../assets/images/amazon-alexa/image 44.png';
import alexaTitle from '../assets/images/amazon-alexa/Mask group (2).png';
import amazonAlexaProducts from '../assets/images/amazon-alexa/Mask group (3).png';
import theAgencyLogo from '../assets/images/amazon-alexa/The Agency_White Logo.png';
import divider from '../assets/images/amazon-alexa/Mint_Divider.png';
import caseStudyTag from '../assets/images/amazon-alexa/Group 63.png';
import background from '../assets/images/amazon-alexa/background.png';

const AmazonAlexa = () => {
  return (
<div className="relative min-h-screen w-full bg-[#FFFFFF] text-white font-sans overflow-hidden">

      {/* Echo Dot image */}
      <div className="absolute top-0 left-0 w-full h-[550px] z-10">
        <img
          src={amazonEchoDot}
          alt="Amazon Echo Dot"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'top center' }}
        />
      </div>

      {/* Background gradient image OVER echo dot image*/}
      <div className="absolute inset-0 z-20">
        <img
          src={background}
          alt="Background gradient"
          className="absolute inset-0 w-full h-full object-cover object-top -translate-y-[230px]"
        />
      </div>

      {/* Background gradient image */}
        <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="Background gradient"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* Main Text Content for Top Section */}
      <div className="relative z-30 px-[123px] pt-[460px] pb-[48px] max-w-[1152px]">
        {/* Case Study Label */}
        <div className="mb-[24px]">
          <img src={caseStudyTag} alt="Case Study" className="h-[63px] -translate-y-[30px]" />
        </div>

        {/* Logos */}
        <div className="flex items-center gap-[45px] mb-[24px]">
          <img src={alexaTitle} alt="Alexa" className="max-w-[200px] max-h-[150px]" />
          <span className="text-[50px]">x</span>
          <img src={theAgencyLogo} alt="The Agency at UF" className="max-w-[450px] max-h-[200px]" />
        </div>

        {/* Divider */}
        <div className="my-[16px]">
          <img src={divider} alt="Divider" className="max-w-[750px]" />
        </div>

        {/* Subtitle */}
        <p className="text-[40px] font-semibold max-w-[750px] leading-snug">
          Showcasing Alexa’s Personality, One Gen Z Answer at a Time
        </p>
      </div>

      {/* Speaker Image Section */}
      <img
        src={amazonEchoPlus}
        alt="Echo Plus Speaker"
        className="absolute right-0 top-[350px] w-[800px] z-20"
      />
    

  {/* The Opportunity Section */}
  <section className="relative z-30 px-[173px] pt-[200px] max-w-[1410px] text-white">
    {/* Title */}
    <h2 className="text-[100px] font-extrabold text-[#5FCAF4] leading-tight mb-10">
      <span className="block text-white">THE</span>
      OPPORTUNITY
    </h2>

    {/* Paragraphs */}
    <div className="text-[27px] space-y-[24px] leading-relaxed">
      <p>
        People love to discover that Amazon Alexa knows about their favorite game, anime or TV show.
        To make this kind of experience possible, Alexa must be able to answer questions about the most
        popular aspects of today’s culture. It should be carefully crafted to withstand the culture’s
        complex, ever-changing nature.
      </p>
      <p>
        In light of this challenge, the <span className="font-bold">Amazon Alexa Personality Team</span> had an important task for us:
        surprise and delight Alexa users from around the globe while staying true to Alexa’s personality.
        We were ready to research and write.
      </p>
    </div>
  </section>

  {/* Harry Styles Image! */}
  <div className="relative z-30 flex justify-center mt-[100px]">
    <img
      src={harryStyles}
      alt="Harry Styles Image"
      className="w-[800px]"
    />
  </div>


  {/* The Solution Section */}
  <section className="relative z-30 px-[173px] pt-[10px] text-white">
    {/* Title */}
    <h2 className="text-[100px] font-extrabold text-[#5FCAF4] leading-tight mb-10">
      <span className="block text-white">THE</span>
      SOLUTION
    </h2>

    {/* Paragraphs */}
    <div className="text-[27px] space-y-[24px] leading-relaxed">
      <p>
      After rounds of social listening and market research, members of our team would present concise research packages 
      to the Amazon Alexa Personality Team on a wide range of culturally relevant, Gen Z-related topics. 
      <span className="font-bold"> In simple terms, we told them what is hot and what is not, according to our research.</span>

      </p>
      <p>
      Using these insights, our copywriters collaborated with the personality team in a writers' room setting. 
      Together, we finalized over <span className="font-bold">250 </span> engaging and research-based responses for some of the most frequently 
      asked questions among young audiences.
      </p>
    </div>
  </section>

  {/* The Nintendo & Alexa Image Section */}
  <div className="mt-[30px] relative z-30 flex items-end w-full h-[1020px] overflow-hidden">
    <img
      src={amazonEchoMini}
      alt="Alexa Section"
      className="h-full object-cover z-20 -translate-y-[250px]"
    />
    <img
      src={nintendo}
      alt="Nintendo Section"
      className="h-full object-cover -ml-[550px] z-10"
    />
  </div>

  {/* The Impact Section */}
  <section className="relative z-30 px-[173px] pt-[10px] text-white mt-[30px]">
    {/* Title */}
    <h2 className="text-[100px] font-extrabold text-[#5FCAF4] leading-tight mb-10">
      <span className="block text-white">THE</span>
      IMPACT
    </h2>

    {/* Paragraphs */}
    <div className="text-[27px] space-y-[24px] leading-relaxed">
      <p>
      Generated insights on topics such as video games, music, anime and TV 
      shows to be used by the Amazon Alexa Personality Team for years to come
      </p>
      <p>
      Wrote <span className="font-bold">over 250 approved responses</span>, which can be heard by millions 
      around the world in <span className="font-bold">8 languages and 42 countries</span>
      </p>
    </div>
  </section>

{/* Footer Amazon Products Image */}
<div className="relative z-30 flex justify-center mt-0">
  {/* Background Image */}
  <img
    src={amazonAlexaProducts}
    alt="Amazon Products Image"
    className=""
  />

  {/* Logos Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
    <div className="flex items-center gap-[45px] mb-[24px]">
      <img src={alexaTitle} alt="Alexa" className="max-w-[180px] max-h-[150px]" />
      <span className="text-[50px]">x</span>
      <img src={theAgencyLogo} alt="The Agency at UF" className="max-w-[430px] max-h-[200px]" />
    </div>
  </div>
</div>


</div>

  );
};

export default AmazonAlexa;