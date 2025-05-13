import React from "react";

const Seagram = () => {
    return (
        <div className="relative bg-black text-white font-monserrat overflow-x-hidden">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-screen bg-no-repeat bg-cover bg-center z-0"
                style={{ backgroundImage: "url('src/assets/images/gators-unidos/seagrams/seagrambg.png')" }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-seagramgradientStart to-seagramgradientEnd z-0" />

            {/* Case Study Label */}
            <div className="absolute top-40 left-40 px-9 py-3 border-4 border-[#C8D7A0] bg-black text-2xl font-extrabold shadow-lg text-center z-10">
                Case Study
            </div>
            <div className="relative">
                <img
                    src="src/assets/images/gators-unidos/seagrams/bubbles.png"
                    alt="Seagram Mockup"
                    className="absolute top-0 right-0 w-[500px] object-contain opacity-0 animate-fade-in"
                    style={{ animation: "fadeIn 3s ease-out forwards" }}
                />

            </div>

            {/* Main Content */}
            <div className="relative z-10 px-40 pt-[345px] flex flex-col items-start space-y-12">
                {/* Logos Row */}
                <div className="flex items-center space-x-4">
                    <img src="src/assets/images/gators-unidos/seagrams/seagramlogo.png" alt="Seagram" className="w-[425px] h-auto" />
                    <p className="text-lg font-extrabold">X</p>
                    <img src="src/assets/images/gators-unidos/seagrams/The Agency_White Logo.png" alt="The Agency" className="w-[425px] h-auto" />
                </div>

                {/* Underline */}
                <div className="w-[1000px]">
                    <svg width="100%" height="4">
                        <line x1="0" y1="2" x2="1000" y2="2" stroke="#C8D7A0" strokeWidth="4" />
                    </svg>
                </div>

                {/* Title */}
                <div className="text-[2.5rem] leading-relaxed w-[1300px]">
                    <p>
                        Fighting for the Limelight: Distinguishing and Growing Seagram’s Brand Among Competitors
                    </p>
                </div>
            </div>
            <div id="The Opportunity" className="relative z-10 px-40 pt-[150px] flex flex-col items-start space-y-12">
                <div className="mt-20 w-[1300px]">
                    <div className="w-[700px] font-extrabold text-[6rem] leading-snug">
                        <p>THE</p>
                    </div>
                    <div className="group w-full text-[#EBA842] font-extrabold text-[6rem] leading-snug relative">
                        <p className="relative h-[6.5rem]">
                            <span className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                                OPPORTUNITY
                            </span>
                            <span className="absolute inset-0 text-[5rem] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                THE THIRST FOR DISTINCTION
                            </span>
                        </p>
                    </div>
                </div>

                {/* Paragraph */}
                <div className="flex text-[1.7rem] leading-relaxed w-[1300px]">
                    <div className="w-[80%] pr-10">
                        <p>
                            As a sugar-sweetened soft drink (SSD) company, Seagram's competes among drink giants.
                            Whether it be Coca-Cola or Canada Dry, the beverage market is oversaturated with multi-billion
                            dollar organizations. <br /><br />

                            As a result, it has been difficult for Seagram's to distinguish itself to consumers.
                            Although it had a basic grasp of its existing customers, it was missing a clear brand and
                            campaign strategy. The company came to us to help bring the brand into the limelight of
                            the highly contested industry. <br /><br />

                            We needed to uncover the most effective strategy for making Seagram's a more relevant ginger ale
                            option by upgrading its brand image.
                        </p>
                    </div>
                    <img
                        src="src/assets/images/gators-unidos/seagrams/seagramgold.png"
                        alt="Seagram Mockup"
                        className="absolute top-[80px] right-0 w-[1000px] object-contain"
                    />
                </div>
            </div>



            <section id="scrolling-packages" className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-20">
                <img
                    src="src/assets/images/gators-unidos/seagrams/packageScroll.png"
                    alt="Seagram"
                    className="w-full h-auto object-cover"
                />
            </section>


            <div id="The solution" className="relative z-10 px-40 pt-[5px] flex flex-col items-start space-y-10">
                <div className="mt-20 w-[1300px]">
                    <div className="w-[700px] font-extrabold text-[6rem] leading-snug">
                        <p>THE</p>
                    </div>
                    <div className="group w-full text-[#EBA842] font-extrabold text-[6rem] leading-snug relative">
                        <p className="relative h-[6.5rem]">
                            <span className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                                SOLUTION
                            </span>
                            <span className="absolute inset-0 text-[5rem] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                HOW WE QUENCHED IT
                            </span>
                        </p>
                    </div>
                </div>

                {/* Paragraph */}
                <div className="flex text-[1.7rem] leading-relaxed w-[1300px]">
                    <div className=" pr-10">
                        <p>
                            To differentiate Seagram's from competitors, The Agency quickly executed a multi-pronged research, insights and strategy plan.
                            We started by developing Talkwalker Boolean to form a deep analysis of the ginger ale landscape in the beverage industry.<br /><br />

                            Based on our research findings, we produced questions for a focus group consisting of the typical soft drink consumer.
                            We surveyed seven people in our focus group to gain a better understanding of what influences the beverage buying habits of everyday consumers.
                        </p>
                    </div>

                </div>
            </div>



            <div id="The Impact" className="relative z-10 px-40 pt-[40px] flex flex-col items-start space-y-12">
                <div className="mt-40 w-[1300px] relative flex items-start justify-between">
                    {/* Title block */}
                    <div className="w-auto">
                        <div className="w-[700px] font-extrabold text-[6rem] leading-snug">
                            <p>THE</p>
                        </div>
                        <div className="group text-[#EBA842] font-extrabold text-[6rem] leading-snug relative">
                            <p className="relative h-[6.5rem]">
                                <span className="absolute inset-0 transition-opacity duration-300 opacity-100">
                                    IMPACT
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Floating image */}
                    <img
                        src="src/assets/images/gators-unidos/seagrams/Mockup.png"
                        alt="Seagram Mockup"
                        className="absolute top-[-300px] right-0 w-[700px] object-contain"
                    />
                </div>

                {/* Paragraph */}
                <div className="flex text-[1.7rem] leading-relaxed w-[1300px]">
                    <div className="pr-10">
                        <p>
                            To gather intel about the drink market, we sent our team on a mission to the front lines — virtually and physically.
                            Our initial stage of our research included analyzing competitors' social media pages and advertisements.<br /><br />

                            However, the investigation extended beyond digital spaces to achieve a more comprehensive analysis.
                            We visited multiple grocery stores across the country to take photos of Seagram's shelving placement next to competitors.
                            Once we finished gathering intelligence, we were ready to implement our findings.<br /><br />

                            Through our research, we discovered a Catch-22 within the market:
                            Seagram's wasn't being noticed at the store but needed more bottling to garner attention.
                            To solve the issue, we helped Seagram's prepare a pitch to bottlers. The goal of the presentation was to convince
                            manufacturers to buy into Seagram's future market growth.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-4 relative z-10 flex justify-center mt-[200px]">
                <img src="src/assets/images/gators-unidos/seagrams/seagramlogo.png" alt="Seagram" className="w-[425px] h-auto" />
                <p className="text-lg font-extrabold">X</p>
                <img src="src/assets/images/gators-unidos/seagrams/The Agency_White Logo.png" alt="The Agency" className="w-[425px] h-auto" />
            </div>




            {/* Extra Space to Scroll */}
            <div className="relative -mt-[25rem] text-white text-3xl font-bold z-10">
                <img
                    src="src/assets/images/gators-unidos/seagrams/delicious-healthy-tea-concept-with-copy-space 1.png"
                    alt="Seagram"
                    className="w-full h-auto"
                />

            </div>
        </div>
    );
};

export default Seagram;