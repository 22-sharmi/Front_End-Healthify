import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Active from './Active';
import Age from './Age';
import Gen from './Gen';
import Lang from './Lang';
import Login from './Login';
import Health from './Health';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Where from './where';
import WeightCorrectionPage from './WeightCorrectionPage';
import What from './What';
import What1 from './What1';
import Welcome from './Welcome';
import AgeHeightWeight from './AgeHeightWeight';
import Gender from './Gender';
import MultiStepForm from './MultiStepForm';
import Name from './Name';
import './Style.css'; // Import CSS file for loader styles

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = React.useState(false);

  const toggleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  return (
    <>
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
      {children({ toggleLoading })}
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingWrapper><Welcome /></LoadingWrapper>} />
        <Route path='/signup' element={<LoadingWrapper><SignUp /></LoadingWrapper>} />
        <Route path='/signin' element={<LoadingWrapper><SignIn /></LoadingWrapper>} />
        <Route path="/what" element={<LoadingWrapper><What1 /></LoadingWrapper>} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/where" element={<LoadingWrapper><Where /></LoadingWrapper>} />
        <Route path="/name" element={<LoadingWrapper><Name /></LoadingWrapper>} />
        <Route path="/lang" element={<LoadingWrapper><Lang /></LoadingWrapper>} />
        <Route path="/gen" element={<LoadingWrapper><Gender /></LoadingWrapper>} />
        {/* <Route path="/age" element={<Age />} /> */}
        <Route path="/age" element={<LoadingWrapper><AgeHeightWeight /></LoadingWrapper>} />
        <Route path="/active" element={<LoadingWrapper><Active /></LoadingWrapper>} />
        {/* <Route path="/weight-correction" element={<WeightCorrectionPage />} /> */}
        <Route path="/next" element={<LoadingWrapper><Health /></LoadingWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}