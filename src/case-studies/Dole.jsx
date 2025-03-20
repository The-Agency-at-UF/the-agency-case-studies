import React from "react";

import '../styles/dole.css';
// import example from '../assets/images/dole/example.png';


const Dole = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#ED9612] bg-opacity-70 via-[#C8D7A0] to-[#7AC4D8] text-white">
            <h1 className="header">Case Study</h1>
            <h1 className="header">Dole x The Agency</h1>
            <p className="body">Swapping Dull Insights for Dole-Certified Analytics</p>

            {/*Section 1*/}
            <h1 className="header">THE OPPORTUNITY</h1>
            <p className="body">Dole needed insights about the
                general public’s view of pineapples that would
                help the fruit company find new ways to market
                its product. The Agency had 14 days to analyze
                the online conversation surrounding pineapples
                in both the fruit and canned fruit markets. Our
                team’s extensive level of curiosity helped us
                discover a <b>gateway for uncommon yet surprising
                pineapple conversations.</b></p>

            {/*Section 2*/}
            <h1 className="header">THE SOLUTION</h1>
            <p className="body">Within a few days, our research
                team dove into pineapple conversations online
                using <b>Netbase Quid</b>. The team developed research
                questions based on relevant Boolean to go beyond
                typical themes associated with the tropical fruit.
                Aside from the ongoing pineapple pizza debate, we
                thoroughly explored online discussions to uncover
                an <b>expansive dashboard</b> of the most unexpected
                pineapple ingredients and products.</p>

            <h1 className="header">MIND MAPPING</h1>
            <p className="body">Our Al-generated “<b>mind maps</b>”
                illustrate the conversations forming and evolving
                over time across online spaces: social, news, blogs,
                forums, eCommerce, reviews, comments, etc. The AI
                analyzes <gitb>sentence structure</gitb>, <b>common keywords</b> and
                <b>upload</b> time among multiple posts.</p>

            {/*Section 3*/}
            <h1 className="header">THE IMPACT</h1>
            <p className="body">Our research stirred up insights
                about how Dole can <b>enter the environmental space</b>
                through <b>pineapple leather</b> and <b>quench tropical drink
                desires</b> with <b>piña coladas</b>. Focusing specifically on
                canned pineapple yielded results about recipes,
                cooking and baking, but the general consensus
                maintained that canned fruit pales in comparison to
                fresh fruit. Dole used these insights to develop an
                <b>updated marketing strategy</b> to fit its target
                audience’s current associations with pineapple.</p>

            <h1 className="header">Dole x The Agency</h1>
        </div>
    );
};

export default Dole;
