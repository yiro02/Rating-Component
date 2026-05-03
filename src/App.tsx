import Star from "./assets/imagenes/icon-star.svg";
import ThankYou from "./assets/imagenes/illustration-thank-you.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectedRating = (rating: number) => {
    setSelectedRating(rating);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedRating !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      {isSubmitted && selectedRating !== null ? (
        <div className="thank-you">
          <img src={ThankYou} alt="Thank you" />
          <span className="rating-result">
            {" "}
            you select {selectedRating} out of 5{""}
          </span>
          <h2>Thank you! </h2>
          <p>
            Thank you ! We appreciate you taking the time to give a rating. If
            you ever need more support, don’t hesitate to get in touch with us
          </p>
        </div>
      ) : (
        <form onSubmit={submitForm} className="rating-container">
          <div className="App">
            <div className="start">
              <img className="star" src={Star} alt="Star" />
            </div>
            <h1> How did we do? </h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated! to help us improve our offering!
            </p>
            <div className="rating-number">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  className="rating-btn"
                  type="button"
                  onClick={() => handleSelectedRating(rating)}
                >
                  {rating}
                </button>
              ))}
            </div>
            <button className="btn">Submit</button>
          </div>
        </form>
      )}
    </>
  );
};

export default App;
