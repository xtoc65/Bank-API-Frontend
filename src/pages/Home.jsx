import BannierHeader from "../components/Bannier";

import Chat from "../assets/Chat.png"
import Money from "../assets/Money.png"
import Security from "../assets/Security.png"
import "../assets/styles/home.css";

function Home() {
  return (
    <main >
      <BannierHeader />
      <section className="features">
        <div>
          <img src={Chat} alt="Chat Icon"  />
          <h3>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div>
          <img
            src={Money}
            alt="Money Icon"
          />
          <h3>More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div>
          <img
            src={Security}
            alt="Security Icon"
          />
          <h3>Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;