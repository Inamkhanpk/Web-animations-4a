import React, { useLayoutEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid'
import './App.css';

function App() {


  const red_queen_and_alice = useRef(null);
  const foreground1 = useRef(null);
  const foreground2 = useRef(null); 
  const background1 = useRef(null);
  const background2 = useRef(null); 


   useLayoutEffect(() => {
    var sceneryFrames =   [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }   
    ];
    
    var sceneryTimingBackground = {
      duration: 24000,
      iterations: Infinity
    };
    
    var sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity
    };
    
    
    var background1Movement = background1.current.animate(
    sceneryFrames, sceneryTimingBackground);
    
    
    var background2Movement = background2.current.animate(
    sceneryFrames, sceneryTimingBackground);
    
   
    
    var foreground1Movement = foreground1.current.animate(
    sceneryFrames, sceneryTimingForeground);
    
    
    var foreground2Movement = foreground2.current.animate(
    sceneryFrames, sceneryTimingForeground);
    
    var spriteFrames = [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' }   
    ];
     
    var redQueen_alice = red_queen_and_alice.current.animate(
    spriteFrames, {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    });
    
    var sceneries = [foreground1Movement, foreground2Movement, background1Movement, background2Movement];
    
    var adjustBackgroundPlayback = function() {
      if (redQueen_alice.playbackRate < .8) {
        sceneries.forEach(function(anim) {
          anim.playbackRate = redQueen_alice.playbackRate/2 * -1;
        });
      } else if (redQueen_alice.playbackRate > 1.2) {
        sceneries.forEach(function(anim) {
          anim.playbackRate = redQueen_alice.playbackRate/2;
        });
      } else {
        sceneries.forEach(function(anim) {
          anim.playbackRate = 0;    
        });
      }   
    }
    adjustBackgroundPlayback();
    
    setInterval( function() {
      if (redQueen_alice.playbackRate > .4) {
        redQueen_alice.playbackRate *= .9;    
      } 
      adjustBackgroundPlayback();
    }, 3000);


    
    var goFaster = function() {
      redQueen_alice.playbackRate *= 1.1;
      adjustBackgroundPlayback();
    }
    
    window.addEventListener("click", goFaster);
    window.addEventListener("touchstart", goFaster);

   })

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
    <div className="wrapper">
        <div className="sky"></div>
        <div className="earth">
          <div className="alice">
            <img id="red-queen_and_alice_sprite" ref={red_queen_and_alice} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"  alt="Alice and the Red Queen running to stay in place."/>
          </div>
        </div>
      
        <div className="scenery" ref={foreground1}>
          <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"  alt=" "/>
        </div>
        <div className ="scenery" ref={foreground2}>    
          <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"  alt=" " />
          <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"  alt=" "/>
        </div>
        <div className="scenery" ref={background1}>
          <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"  alt=" "/>
          <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"  alt=" "/>
          <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"  alt=" "/>
        </div>
        <div className="scenery" ref={background2}>
          <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"  alt=" "/>
      
          <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"  alt=" "/>
          <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"  alt=" "/>
        </div>
      </div>
      </Grid>
      </Grid>
  );
}

 export default App;



