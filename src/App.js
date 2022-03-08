import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import './App.css';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const App = () => {


  const [startDate, setStartDate] = useState(new Date());
  const [todaystartDate, setTodayStartDate] = useState(new Date());
  const [age, setAge] = useState(0);
  console.log(todaystartDate.toLocaleString('en-US'));
  console.log(startDate.toLocaleString('en-US'));
  function calAge() {
    setAge(Math.abs(todaystartDate - startDate));
  }
  return (
    <div>
      <div class="jumbotron">
        <h1 class="display-4">Age Calculater</h1>
        <div class=" d-flex p-2 bd-highlight">
          <p class="lead ">
            <div class="mr-2">
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
              />
            </div>
          </p>
          <p>format : MM/DD/YYYY</p>
        </div>

        <hr class="my-4" />

        <button
          type="button"
          class="btn btn-danger"
          className="btn"
          onClick={() => {
            calAge();
          }}
        >
          Calculate Age
        </button>
        <div class="d-flex p-2 bd-highlight">
          <h6 class='mr-2'>your Age is:</h6>
          {Math.trunc(age / (1000 * 3600 * 24 * 365))}
        </div>
      </div>
    </div>
  );
};
export default App;
