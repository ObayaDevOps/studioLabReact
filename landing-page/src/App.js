import React from 'react';
import Sketch from 'react-p5';


function App() {
  // eslint-disable-next-line
  let a = 300;
  // eslint-disable-next-line
  let b = 300;
  let setup = (p5, canvasParentRef) => {
    // eslint-disable-next-line
    let myCanvas = p5.createCanvas(1000, 800).parent(canvasParentRef);

    //centre the sketch
     let x = (p5.windowWidth - p5.width) / 2;
     let y = (p5.windowHeight - p5.height) / 2;
     myCanvas.position(x,y);

  };

  let draw = (p5) => {
    p5.background("rgb(100%,0%,10%)");
  };

  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} className="App" />
    </div>
  );
}

export default App;
