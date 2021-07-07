import React, { useState } from 'react';

import { range } from './lib/range';
import { RadInput, RadSelect } from './ui/rad-form';

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// TODO: adjust the number of days based on the month choice
const dayValues = range(1, 31).map(num => "" + num);

const startYear = 1920;
const currYear = new Date(Date.now()).getFullYear();
const yearValues = range(startYear, currYear).map(num => "" + num).reverse();

function convertToDate({ month, day, year, time }) {
  if (!(typeof time === 'string' && time.includes(':'))) {
    // TODO: better error handling.
    console.error('time control did not do what I expect');
    return;
  }
  const [hour, minute] = time.split(":").map(x => parseInt(x));

  return new Date(year, month - 1, day, hour, minute);
}

function DobForm({ onSubmit }) {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [time, setTime] = useState('');

  const isFormComplete = month && day && year && time;

  return (
    <form id="dob-form" className="dob-form">
      <div className="form-row">
        Enter your date and time of birth:
      </div>

      <div className="form-row">
        <RadSelect value={month} onChange={setMonth} required>
          {/* Source: https://stackoverflow.com/a/29806043 */}
          {/* TODO: Fix display bug in Chrome */}
          <option disabled selected={!!month} value=""> Month</option>
          {monthNames.map((name, i) =>
            <option value={i+1} key={name}>{name}</option>
          )}
        </RadSelect>

        <RadSelect value={day} onChange={setDay} required>
          <option disabled selected={!!day} value="">Day</option>
          {dayValues.map(value =>
            <option value={value} key={value}>{value}</option>
          )}
        </RadSelect>

        <RadSelect value={year} onChange={setYear} required>
          <option disabled selected={!!year} value="">Year</option>
          {yearValues.map(value =>
            <option value={value} key={value}>{value}</option>
          )}
        </RadSelect>

        <RadInput type="time" value={time} onChange={setTime} />
      </div>

      <div className="form-row save-button">
        <button
          onClick={event => {
            event.preventDefault();
            onSubmit(convertToDate({ month, day, year, time }));
          }}
          disabled={!isFormComplete}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export { DobForm };
