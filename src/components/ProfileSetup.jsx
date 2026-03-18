import React from 'react';

const ProfileSetup = () => {
  const handleInputChange = (event) => {
    console.log('User entered:', event.target.value);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    alert('Formula triggered! Your daily goals are calculated (test mode).');
  };

  return (
    <div className="card profile-setup">
      <h3>Body Parameters</h3>
      <form onSubmit={handleCalculate}>
        <input type="number" placeholder="Age" onChange={handleInputChange} required />
        <input type="number" placeholder="Height (cm)" onChange={handleInputChange} required />
        <input type="number" placeholder="Weight (kg)" onChange={handleInputChange} required />
        <button type="submit" className="my-btn">Calculate Macros</button>
      </form>
    </div>
  );
};

export default ProfileSetup;