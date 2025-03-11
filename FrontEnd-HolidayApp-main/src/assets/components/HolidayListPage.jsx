import axios from "axios";
import { useState, useEffect } from "react";
import "./HolidayListPage.css"; 

const HolidayListPage = ({ country, year, setHolidayDetail }) => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        console.log("Fetching holidays for:", country, year); 
        const response = await axios.get(
          `http://127.0.0.1:8000/holidays?country=${country}&year=${year}`
        );
        console.log("Fetched holidays:", response.data.holidays); 
        if (response.data.holidays && response.data.holidays.length > 0) {
          setHolidays(response.data.holidays);
        } else {
          setHolidays([]); 
        }
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };

    fetchHolidays();
  }, [country, year]);

  return (
    <div className="container">
      <h2 className="text-2xl font-semibold mb-4">
        Holidays in {country} for {year}
      </h2>
      <ul className="space-y-4">
        {holidays.length > 0 ? (
          holidays.map((holiday) => (
            <li
              key={holiday.date.iso}
              className="p-4 border border-gray-300 rounded hover:bg-gray-100"
              onClick={() => setHolidayDetail(holiday)}
            >
              <p className="font-semibold">{holiday.name}</p>
              <p>{holiday.date.iso}</p>
            </li>
          ))
        ) : (
          <p className="no-holidays">
            No holidays found for this country and year.
          </p>
        )}
      </ul>
    </div>
  );
};

export default HolidayListPage;
