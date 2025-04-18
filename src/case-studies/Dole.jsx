import '../styles/dole.css';
import caseStudyBox from '../assets/images/dole/caseStudyBox.svg';
import divider from '../assets/images/dole/divider.svg';
import cover from '../assets/images/dole/cover.png';
import DoleXTheAgency from '../assets/images/dole/DoleXTheAgency.svg';
import sun from '../assets/images/dole/sun.png';
import pineappleSlice from '../assets/images/dole/pineappleSlice.png';
import pineapple from '../assets/images/dole/pineapple.png';
import netbase from '../assets/images/dole/netbase.png';
import pineapples from '../assets/images/dole/pineapples.png';
import PropTypes from 'prop-types';

import { useEffect, useRef } from 'react';

export function AnimateOnScroll({ children, className = '' }) {
    const ref = useRef(null);

    const enter = 'animate-in fade-in slide-in-from-left-16 duration-700';
    const exit = 'animate-out fade-out slide-out-to-left-16 duration-700';

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const play = (add, remove) => {
            el.classList.remove(...remove.split(' '));
            void el.offsetWidth;
            el.classList.add(...add.split(' '));
        };

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    play(enter, exit); // Scroll into view
                } else {
                    play(exit, enter); // Scroll out of view (no delay)
                }
            },
            { threshold: 0 } // Trigger as soon as any part enters view
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`relative ${className}`}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </div>
    );
}

AnimateOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};


const Dole = () => {
    return (
        <div className="z-0 relative bg-dole-gradient text-white w-full h-full">

            {/*Cover page*/}
            <div className="relative h-screen">
                <img className="absolute inset-0 -z-10 w-full h-full object-cover opacity-40 fade-bottom" src={cover} alt="cover image"/>
                <div className="pl-40 z-20 left-1/2">
                    <div className="absolute top-1/4 left-40 flex justify-center items-center">
                        <img className="w-[280px] max-w-none" src={caseStudyBox} alt="box" />
                        <p className="absolute text-3xl font-semibold text-white">Case Study</p>
                    </div>
                    <img className="absolute top-1/2 w-[600px]" src={DoleXTheAgency} alt="Dole X The Agency"/>
                    <img className="absolute top-3/4 w-[700px] max-w-none" src={divider} alt="divider"/>
                    <p className="absolute top-3/4 pt-10 text-3xl font-semibold text-white">Swapping Dull Insights for Dole-Certified Analytics</p>
                </div>
            </div>

            <img className="absolute right-0 w-1/3" src={sun} alt="sun"/>

            {/*Section 1*/}
            <AnimateOnScroll className="pt-60">
                <h1 className="header">THE OPPORTUNITY</h1>
                <p className="body">Dole needed insights about the general public’s view of pineapples that would help the fruit company find new ways to market its product. The Agency had 14 days to analyze the online conversation surrounding pineapples in both the fruit and canned fruit markets. Our team’s extensive level of curiosity helped us discover a <b>gateway for uncommon yet surprising pineapple conversations.</b>
                </p>
            </AnimateOnScroll>




            {/*Section 2*/}

            <AnimateOnScroll className="pl-40">
                <img
                    className="absolute left-0 top-0 w-32 sm:w-40 md:w-[280px]"
                    src={pineappleSlice}
                    alt="pineapple slice"
                />
                <div>
                    <h1 className="header">THE SOLUTION</h1>
                    <p className="body">Within a few days, our research team dove into pineapple conversations online using <b>Netbase Quid</b>. The team developed research questions based on relevant Boolean to go beyond typical themes associated with the tropical fruit. Aside from the ongoing pineapple pizza debate, we thoroughly explored online discussions to uncover an <b>expansive dashboard</b> of the most unexpected pineapple ingredients and products.
                    </p>
                </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="pl-40">
                <div className="flex">
                    <img className="absolute left-0 top-0 w-32 sm:w-40 md:w-[280px]"
                         src={pineapple}
                         alt="pineapple"
                    />
                    <div className="w-4/6">
                        <h1 className="mini-header">MIND MAPPING</h1>
                        <p className="body">Our Al-generated “<b>mind maps</b>” illustrate the conversations forming and evolving over time across online spaces: social, news, blogs, forums, eCommerce, reviews, comments, etc. The AI analyzes <b>sentence structure</b>, <b>common keywords</b> and<b>upload</b> time among multiple posts.
                        </p>
                    </div>
                    <img className="m-auto object-cover w-1/2" src={netbase} alt="netbase"/>
                </div>
            </AnimateOnScroll>

            {/*Section 3*/}
            <AnimateOnScroll  className="pt-30">
                <h1 className="header">THE IMPACT</h1>
                <p className="body">Our research stirred up insights about how Dole can <b>enter the environmental space</b> through <b>pineapple leather</b> and <b>quench tropical drink desires</b> with <b>piña coladas</b>. Focusing specifically on canned pineapple yielded results about recipes, cooking and baking, but the general consensus maintained that canned fruit pales in comparison to fresh fruit. Dole used these insights to develop an <b>updated marketing strategy</b> to fit its target audience’s current associations with pineapple.
                </p>
            </AnimateOnScroll>
            <img className="object-cover m-auto w-3/4 pt-20 pb-40" src={DoleXTheAgency} alt="Dole X TheAgency"/>
            <img className="object-cover m-auto w-full bottom-14" src={pineapples} alt="pineapples"/>

        </div>
    );
};

export default Dole;
