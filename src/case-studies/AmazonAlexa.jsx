import React from "react";

import amazonEchoMini from '../assets/images/amazon-alexa/Amazon_Echo_Mini 1.png';
import amazonEchoPlus from '../assets/images/amazon-alexa/Amazon_Echo_Plus 1.png';
import harryStyles from '../assets/images/amazon-alexa/Group 77.png';
import nintendo from '../assets/images/amazon-alexa/Group 78.png';
import amazonEchoDot from '../assets/images/amazon-alexa/image 44.png';
import alexaTitle from '../assets/images/amazon-alexa/Mask group (2).png';
import amazonAlexaProducts from '../assets/images/amazon-alexa/Mask group (3).png';
import theAgencyLogo from '../assets/images/amazon-alexa/The Agency_White Logo.png';
import divider from '../assets/images/amazon-alexa/Mint_Divider.png';
import caseStudyTag from '../assets/images/amazon-alexa/Group 63.png';
import background from '../assets/images/amazon-alexa/background.png';

const AmazonAlexa = () => {
  return (
    <div className="relative h-[6923px] w-full bg-[#FFFFFF] text-white font-sans overflow-hidden">

      {/* Echo Dot image */}
      <div className="absolute top-0 left-0 w-full h-[550px] z-10">
        <img
          src={amazonEchoDot}
          alt="Amazon Echo Dot"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'top center' }}
        />
      </div>

      {/* Background gradient image */}
      <div className="absolute top-0 left-0 w-full h-[6923px] z-20">
        <img
          src={background}
          alt="Background gradient"
          className="w-full h-full object-cover object-top"
          //creates overlap effect
          style={{ marginTop: '-430px' }}
        />
      </div>

      {/* Main Text Content for Top Section */}
      <div className="relative z-30 px-[100px] pt-[480px] pb-[48px] max-w-[1152px]">
        {/* Case Study Label */}
        <div className="mb-[24px]">
          <img src={caseStudyTag} alt="Case Study" className="h-[50px]" />
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
<section className="relative z-30 px-[100px] pt-[200px] max-w-[1180px] text-white">
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

</div>

  );
};

export default AmazonAlexa;