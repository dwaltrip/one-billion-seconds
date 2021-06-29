import React, { useState } from 'react';

import { RadSelect } from './ui/rad-form';

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// TODO: implement 'onSubmit'
function DobForm({ onSubmit }) {
  const [month, setMonth] = useState('');

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

        {/* TODO: implement this */}
        <RadSelect required>
          <option disabled selected value="">Day</option>
        </RadSelect>

        {/* TODO: implement this */}
        <RadSelect required>
          <option disabled selected value="">Year</option>
        </RadSelect>

        {/* TODO: implement this */}
        <input type="time" name="time-of-birth" />
      </div>

      <div className="form-row save-button">
        <button>Save</button>
      </div>
    </form>
  );
}

export { DobForm };
