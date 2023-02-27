import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1> Congratulations </h1>
      <div className="card">
        <div className="justify">
          <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
          <h2> Kiran.v </h2>
          <p className="para">
            {" "}
            Vishnu institute of computer education and Technology, Bhimavaram.{" "}
          </p>
          <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
        </div>
      </div>
    </div>
  );
}
