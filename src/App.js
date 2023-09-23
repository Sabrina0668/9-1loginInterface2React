import "./App.css";
import { BsGoogle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BiSolidStar } from "react-icons/bi";
import {
  AiFillCopyrightCircle,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <section className="left-section">
        <header>
          <BsGoogle size={30} />
          <h3>Welcome back</h3>
          <p>Welcome back! Please enter your details.</p>
        </header>
        <form className="signIn-details">
          <input type="Email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button type="submit">Sign in</button>
          <button>
            <FcGoogle />
            Sign in with Google
          </button>
        </form>
        <p className="createAccount">
          Need an account? <span>Create an account</span>
        </p>
      </section>
      <section className="right-section">
        <article className="testimonial">
          <div className="box1"></div>
          <div className="box2"></div>
          <p>
            ”Untitle truly has solved all our design and content problems,
            freeing up our time to work on more important things. We can’t
            imagine working without it.”
          </p>
          <div className="box3"></div>
          <div className="box4"></div>
        </article>
        <article className="testimonialCharacter">
          Mischca Sullivan
          <div className="fiveStar">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
          </div>
        </article>
        <article className="testimonialOrigin">
          <div>
            <AiFillCopyrightCircle
              size={20}
              style={{ verticalAlign: "middle" }}
            />
            Bolt Agency
          </div>
          <div>
            <button>
              <AiOutlineArrowLeft color="White" />
            </button>
            <button style={{ marginLeft: "15px" }}>
              <AiOutlineArrowRight color="White" />
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
