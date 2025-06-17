import '../styles/bliss.css';
import { AnimateOnScroll, FadeInLeft, FadeInRight, FadeInUp } from '../components/AnimateOnScroll';

const Bliss = () => {
  return (
    <div className="relative bg-black text-white font-monserrat overflow-x-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-screen bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: "url('src/assets/images/bliss/welcomeImg.png')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 [background:linear-gradient(to_bottom,rgba(247,82,150,0)_0%,rgba(247,82,150,1)_20%)] z-0" />


      {/* Case Study Label */}
      <div className="absolute top-40 left-40 px-9 py-3 border-4 border-#75CFE5 bg-black text-2xl font-extrabold shadow-lg text-center z-10">
        Case Study
      </div>

      {/* Optional Floating Image */}
      {/* <div className="relative">
        <img
          src="your-floating-image.png"
          alt="Floating visual"
          className="absolute top-0 right-0 w-[500px] object-contain opacity-0 animate-fade-in"
          style={{ animation: "fadeIn 3s ease-out forwards" }}
        />
      </div> */}

      {/* Logos Row */}
      <AnimateOnScroll className="relative z-10 px-40 pt-[345px] flex flex-col items-start space-y-12">
        <div className="flex items-center space-x-4">
          <img src="src/assets/images/bliss/LogoBliss.png" alt="Logo 1" className="w-[300px] h-auto" />
          <p className="text-lg font-extrabold">X</p>
          <img src="src/assets/images/The Agency_White Logo.png" alt="the agency logo" className="w-[270px] h-auto" />
        </div>

        {/* Divider */}
        <div className="w-full">
          <svg width="100%" height="4">
            <line x1="0" y1="2" x2="1000" y2="2" stroke="#75CFE5" strokeWidth="4" />
          </svg>
        </div>

        {/* Title */}
        <div className="text-4xl font-extrabold leading-relaxed max-w-6xl">
          <p>
          Helping Bliss Get Skin in the Gen Z Game 
          </p>
        </div>
      </AnimateOnScroll>

      {/* Section Template */}
      <AnimateOnScroll id="section-1" className="relative z-10 px-40 pt-[150px] flex flex-col items-start space-y-12">
        {/* Animated Header */}
        <div className="w-full max-w-6xl">
          <div className="text-6xl font-extrabold">THE</div>
          <div className="group text-6xl font-extrabold text-yellow-400 relative">
            <p className="relative h-[6.5rem]">
              <span className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                OPPORTUNITY
              </span>
              <span className="absolute inset-0 text-5xl transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                YOUR ALT TITLE
              </span>
            </p>
          </div>
        </div>

        {/* Paragraph + Optional Image */}
        <div className="flex w-full max-w-6xl text-xl leading-relaxed relative">
          <div className="w-4/5 pr-10">
            <p>
            Healthy skin isn’t a luxury – it’s a necessity. Bliss knew this fact long before it was a trend, championing skincare as self-care beginning in the 1990s. Despite its decades-old ingenuity, Bliss struggled to gain the interest of younger generations.  Bliss, alongside Chicago-based agency Movers+Shakers, came to us to reach Gen Z and millennial audiences. Together, we determined content recommendations for Bliss’ Instagram and TikTok while discovering new ways to build brand loyalty.
            </p>
          </div>
          {/* <img
            src="section-image.png"
            alt="Visual"
            className="absolute top-[80px] right-0 w-[500px] object-contain"
          /> */}
        </div>
      </AnimateOnScroll>

      {/* Full-Width Scrolling Image */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-20">
        <img
          src="full-width-section.png"
          alt="Scrolling Visual"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Additional Section */}
      <AnimateOnScroll id="section-2" className="relative z-10 px-40 pt-[100px] flex flex-col items-start space-y-10">
        {/* Section Header */}
        <div className="text-6xl font-extrabold text-white">THE SOLUTION</div>

        {/* Paragraph */}
        <div className="w-full max-w-6xl text-xl leading-relaxed">
          <p>
            Continue your narrative here. This section will animate in using a fade/slide effect.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Final Impact Section */}
      <AnimateOnScroll id="section-3" className="relative z-10 px-40 pt-[100px] flex flex-col items-start space-y-12">
        <div className="text-6xl font-extrabold text-white">THE IMPACT</div>
        <div className="w-full max-w-6xl text-xl leading-relaxed">
          <p>
            Wrap up with results or next steps. Consider including graphs, metrics, or images here.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Footer Logos */}
      <div className="flex items-center space-x-4 relative z-10 justify-center mt-40">
        <img src="logo1.png" alt="Logo 1" className="w-[200px] h-auto" />
        <p className="text-lg font-extrabold">X</p>
        <img src="logo2.png" alt="Logo 2" className="w-[200px] h-auto" />
      </div>

      {/* Footer Image */}
      <div className="relative mt-20 text-white text-3xl font-bold z-10">
        <img
          src="footer-image.png"
          alt="Footer visual"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Bliss;
