import Bannier from '../assets/Bannier.jpeg';
import '../assets/styles/bannier.css';

function BannierHeader() {
  return (
    <div className="hero">
      <img src={Bannier} alt="Bannière - plante" />
      
      <div className="hero-content">
        <section>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    </div>
  );
}

export default BannierHeader;