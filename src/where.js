import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Where() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const errorRef = useRef(null); // Ref for error message

  // Function to handle city selection
  function selectCity(city) {
    setSelectedCity(city);
    setErrorMessage(''); // Clear any existing error message when a city is selected
  }

  // Function to handle click on 'Next' button
  function handleNextClick() {
    if (selectedCity) {
      localStorage.setItem('city', selectedCity);
      navigate('/lang');
    } else {
      setErrorMessage('Please select a city.'); // Set error message if no city is selected
      // Scroll to error message if errorRef is initialized
      if (errorRef.current) {
        errorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  return (
    <div className="text-center container">
      <div>
        <h3>Where are you from?</h3>
        <p>This will help us personalize the app for you.</p>
      </div>
      <div className="text-center">
        <form>
          <label htmlFor="cities" className="fs-5">
            Choose a city:
          </label>
          <select
            id="cities"
            name="cities"
            className="form-select mb-3"
            onChange={(e) => selectCity(e.target.value)}
          >
            <option value="" disabled defaultValue>
              Select City
            </option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="kolkata">Kolkata</option>
            <option value="chennai">Chennai</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="jaipur">Jaipur</option>
            <option value="pune">Pune</option>
            <option value="lucknow">Lucknow</option>
            <option value="kanpur">Kanpur</option>
            <option value="chandigarh">Chandigarh</option>
          </select>
        </form>
      </div>

      {errorMessage && (
            <div className="alert alert-danger" role="alert" ref={errorRef}>
              {errorMessage}
            </div>
          )}
      <br />
      <div className="d-flex justify-content-between">
        {/* Back button */}
        <a href="/what" className="btn btn-dark">
          Back
        </a>
        {/* Next button */}
        <button className="btn btn-next btn-dark" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}
