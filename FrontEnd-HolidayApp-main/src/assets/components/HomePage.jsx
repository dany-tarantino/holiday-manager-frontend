import { useState } from "react";
import "../components/HomePage.css";

const HomePage = ({ setCountry, setYear, setShowHolidays }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedCountry && selectedYear) {
      setCountry(selectedCountry);
      setYear(selectedYear);
      setShowHolidays(true);
    }
  };

  return (
    <div className="home-page-container">
      <div className="home-page-card">
        <h2 className="home-page-title">Holidays!!!</h2>
        <form onSubmit={handleSearch} className="home-page-form">
          <div className="mb-4">
            <label className="home-page-label">Country</label>
            <input
              type="text"
              className="home-page-input"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              placeholder="Enter country"
              required
            />
          </div>
          <div className="mb-4">
            <label className="home-page-label">Year</label>
            <input
              type="number"
              className="home-page-input"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              placeholder="Enter year"
              required
            />
          </div>
          <button type="submit" className="home-page-button">
            Search 
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
