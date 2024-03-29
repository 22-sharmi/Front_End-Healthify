import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Active from './Active';
import Lang from './Lang';
import Name from './Name';
import Health from './Health'; 
import SignIn from './SignIn';
import SignUp from './SignUp';
import Where from './where';
import What1 from './What1';
import Welcome from './Welcome';
import AgeHeightWeight from './AgeHeightWeight';
import Gender from './Gender';
import Active1 from './Active1';
import './Style.css'; // Import CSS file for loader styles

export default function App() {
  const [loading, setLoading] = useState(false);

  const toggleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  return (
    <div>
      {loading && (
        <div className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
            <div className="terminal-title">Loading...</div>
          </div>
          <div className="text">Loading...</div>
        </div>
      )}
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path="/what" element={<What1 />} />
          <Route path="/where" element={<Where />} />
          <Route path="/name" element={<Name />} />
          <Route path="/lang" element={<Lang />} />
          <Route path="/gen" element={<Gender />} />
          <Route path="/age" element={<AgeHeightWeight toggleLoading={toggleLoading} />} />
          <Route path="/active" element={<Active1 toggleLoading={toggleLoading} />} />
          <Route path="/next" element={<Health/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
