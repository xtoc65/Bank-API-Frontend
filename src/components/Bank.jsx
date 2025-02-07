import "../assets/styles/bank.css";

function Bank() {
  return (
    <section className="bank">
      <article>
        <div className="div">
          <h3>Argent Bank Checking (x8349)</h3>
          <p>$2,082.79</p>
          <p className="description">Available Balance</p>
        </div>
        <button>View transactions</button>
      </article>
      <article>
        <div className="div">
          <h3>Argent Bank Saving (x6712)</h3>
          <p>$10,928.42</p>
          <p className="description">Available Balance</p>
        </div>
        <button>View transactions</button>
      </article>
      <article>
        <div className="div">
          <h3>Argent Bank Credit Card (x8349)</h3>
          <p>$184.30</p>
          <p className="description">Available Balance</p>
        </div>
        <button>View transactions</button>
      </article>
    </section>
  );
}

export default Bank;
