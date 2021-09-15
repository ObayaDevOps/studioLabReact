import React from 'react';
import Sketch from 'react-p5';

function App() {
  let a = 300;
  let b = 300;
  let speed = 3;

  let setup = (p5, canvasParentRef) => {
    // eslint-disable-next-line
    let myCanvas = p5.createCanvas(1000, 800).parent(canvasParentRef);

    
    //centre the sketch
     let x = (p5.windowWidth - p5.width) / 2;
     let y = (p5.windowHeight - p5.height) / 2;
     myCanvas.position(x,y);

  };

  //To animate an object, we add conditional statements to the draw function
  let draw = (p5) => {
    p5.background("rgb(100%,0%,10%)");

    //the ball
    p5.stroke(255);
    p5.strokeWeight(4);
    p5.noFill(); //would be cool to make it multicoloured

    //(a,b) Positioning, last 2 params are for size
    p5.ellipse(a, b, 100, 100);

    if (a >= p5.width) {
      speed = -3;
    }
    if(a === 90) {
      speed = 3;
    }

    a = a + speed;

  };

  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} className="App" />
    </div>
  );
}

export default App;
