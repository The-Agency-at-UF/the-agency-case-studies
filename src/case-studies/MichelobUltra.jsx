import BeforeEveryChamText from "../assets/images/MichelobUltra/Before-every-cham-text.png";
import BeforeEverySprint from "../assets/images/MichelobUltra/Before-every-sprint.png";
import BluuredBck1 from "../assets/images/MichelobUltra/bluured_bck-1.png";
import CaseStudiesUpdate1 from "../assets/images/MichelobUltra/Case-Studies-Update-1.png";
import Frame63 from "../assets/images/MichelobUltra/Frame-63.png";
import LogoMichelob from "../assets/images/MichelobUltra/Logo_Michelob.png";
import MichelobMockupCopy1 from "../assets/images/MichelobUltra/Michelob_Mockup-copy-1.png";
import MichelobUltraCheerSquad1651 from "../assets/images/MichelobUltra/MichelobUltra_CheerSquad_165-1.png";
import MichelobUltraFullLogo1 from "../assets/images/MichelobUltra/MichelobUltra_FULL-LOGO-1.png";
import MintDivider from "../assets/images/MichelobUltra/Mint_Divider.png";
import MUbbImage1 from "../assets/images/MichelobUltra/MU_bb_imnage-1.png";
import Rectangle68 from "../assets/images/MichelobUltra/Rectangle-68.png";
import Rectangle69 from "../assets/images/MichelobUltra/Rectangle-69.png";
import Rectangle73 from "../assets/images/MichelobUltra/Rectangle-73.png";
import Rectangle74 from "../assets/images/MichelobUltra/Rectangle-74.png";
import TeamAgencyAssists from "../assets/images/MichelobUltra/Team-Agency-Assists-Team-Ultras-Joy.png";
import TheAgencyWhiteLogo from "../assets/images/MichelobUltra/The-Agency_White-Logo.png";
import TheOpportunity from "../assets/images/MichelobUltra/THE-OPPORTUNITY.png";
import TheSolution from "../assets/images/MichelobUltra/THE-SOLUTION.png";
import Vector6 from "../assets/images/MichelobUltra/Vector-6.png";
import Vector7 from "../assets/images/MichelobUltra/Vector-7.png";
import Vector9 from "../assets/images/MichelobUltra/Vector-9.png";
import Vector11 from "../assets/images/MichelobUltra/Vector-11.png";
import Vector12 from "../assets/images/MichelobUltra/Vector-12.png";
import Vector13 from "../assets/images/MichelobUltra/Vector-13.png";
import Vector14 from "../assets/images/MichelobUltra/Vector-14.png";
import Vector15 from "../assets/images/MichelobUltra/Vector-15.png";
import X from "../assets/images/MichelobUltra/X.png";

// using the default Prettier extension.

function MichelobUltra() {
  return (
    <div className="bg-white w-full text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={BluuredBck1}
          alt="Background"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <img src={Frame63} alt="Case Study Label" className="mb-2 w-32" />
          <img
            src={MichelobUltraFullLogo1}
            alt="Michelob Logo"
            className="mb-2 w-64"
          />
          <img
            src={TheAgencyWhiteLogo}
            alt="Agency Logo"
            className="mb-2 w-64"
          />
          <img
            src={TeamAgencyAssists}
            alt="Title Text"
            className="mb-4 w-full max-w-xl"
          />
        </div>
      </div>

      {/* The Opportunity Section */}
      <div className="relative bg-[#f3f3f3] py-10 px-6">
        <img
          src={Vector7}
          alt="Red Diagonal"
          className="absolute left-0 top-0 w-full"
        />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <img
              src={TheOpportunity}
              alt="The Opportunity"
              className="mb-4 w-48"
            />
            <img
              src={BeforeEverySprint}
              alt="Before Every Sprint"
              className="mb-4 w-full"
            />
            <img
              src={BeforeEveryChamText}
              alt="Paragraph Text"
              className="w-full"
            />
          </div>
          <img
            src={MUbbImage1}
            alt="Basketball Player"
            className="flex-1 w-full max-w-sm"
          />
        </div>
      </div>

      {/* Phone Mockups Section */}
      <div className="bg-white py-10 px-4">
        <img
          src={MichelobMockupCopy1}
          alt="Phone Mockups"
          className="mx-auto w-full max-w-6xl"
        />
      </div>

      {/* The Solution Section */}
      <div className="relative bg-[#00214e] text-white py-10 px-6">
        <img
          src={Vector13}
          alt="Curved Divider"
          className="absolute top-0 left-0 w-full"
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <img
            src={TheSolution}
            alt="The Solution Title"
            className="mb-6 w-48"
          />
          <img
            src={CaseStudiesUpdate1}
            alt="Case Study Collage"
            className="mb-6 w-full rounded-md"
          />
          <p className="text-lg leading-relaxed">
            To help spread the word about Team ULTRA, our graphic designers
            provided materials that supplemented Michelob’s digital and
            traditional marketing through social media posts, email graphics and
            signage.
            <br />
            <br />
            Our team edited photos of Team ULTRA basketball players and
            competitive runners to visually entice athletes in a way that
            couldn’t be achieved with photography alone.
            <br />
            <br />
            The ULTRA-certified photos were posted on Michelob’s Instagram and
            featured in promotional emails with copy written by Agency
            copywriters to help push the Joy wins narrative.
            <br />
            <br />
            Beyond the digital marketing materials, our team of graphic
            designers also created signage used to cheer on Team ULTRA
            basketball players at a Michelob-sponsored pickup game.
          </p>
        </div>
      </div>

      {/* Footer Logos Section */}
      <div className="bg-white py-10 px-6 flex justify-center items-center gap-10 flex-wrap">
        <img
          src={MichelobUltraFullLogo1}
          alt="Michelob Logo"
          className="w-48"
        />
        <img src={TheAgencyWhiteLogo} alt="Agency Logo" className="w-48" />
      </div>
    </div>
  );
}

export default MichelobUltra;
