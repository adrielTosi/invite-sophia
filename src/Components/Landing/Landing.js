import React from 'react';
import CountDown from 'reactjs-countdown';
import Sofianome from '../../Images/Sofianome.svg';
// import Sofiaflor from '../../Images/Sofiaflor.svg';

const Landing = () => (
  <div>
    <div className="container">
      <div id="nome">
        <img src={Sofianome} alt="nobg" />
      </div>
      <div>
        <div id="data">23 . 03 . 19</div>
        <div id="local">VILA ÖBEN</div>
      </div>
      <div id="countdown">
        <CountDown
          deadline="March 23, 2019"
        />
      </div>
    </div>
    <section id="countdown-dt">
      <CountDown
        deadline="March 23, 2019"
      />
    </section>
  </div>
);

export default Landing;
