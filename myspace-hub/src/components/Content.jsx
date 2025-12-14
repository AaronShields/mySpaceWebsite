import pinkposter from "../assets/pink_background.jpeg"
import pinkfancy from "../assets/pink_fancy.jpeg"
import NYC from "../assets/NYC.jpeg"
import Duckie from "../assets/my_duckie.jpeg"
import VHS from "../assets/vhs_tape.gif"
import Fatal from "../assets/fatal_error.jpeg"

export default function Content() {
  return (
    <main className="content">
      <div className="canvas">
      <img className="hero" src={NYC} alt="NYC"/>
    
    {/*stickers*/}
    <img
          src={Duckie}
          alt="duckie"
          className="sticker"
          style={{
            top: "80%",
            left: "90%",
            transform: "scale(1.4) rotate(-6deg)",
          }}
          
        />
      
      <img 
          src={VHS}
          alt="VHS"
          className="sticker"
          style={{
            top:"5%",
            left: "85%",
            transform: "scale(1.3) rotate(-10deg)",
          }}
        />

        <img 
          src={Fatal}
          alt="VHS"
          className="sticker drift"
          style={{
            top:"65%",
            left: "55%",
            transform: "scale(1.2) rotate(10deg)",
          }}
        />
      </div>
    </main>
  );
}
