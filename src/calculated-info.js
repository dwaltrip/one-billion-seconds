import { formatTime } from './lib/format-time';

import { prettyDateDiff } from './ui/pretty-date-diff';

function dobToSecondsAlive(timeOfBirth) {
  return (
    Math.floor(Date.now() / 1000) -
    Math.floor(timeOfBirth.getTime() / 1000)
  ); 
}

const ONE_BILLION_SECONDS_IN_MILLISECONDS = Math.pow(10, 9) * 1000;

function CalculatedInfo({ timeOfBirth }) {
  const secondsAlive = dobToSecondsAlive(timeOfBirth);

  const oneBillionSecondsDate = new Date(
    timeOfBirth.getTime() + ONE_BILLION_SECONDS_IN_MILLISECONDS
  );

  if (secondsAlive > Math.pow(10, 9)) {
    return (
      <>
        <div className="calculated-info-row">
          Birthday:
          {' '}{timeOfBirth.toDateString()} at
          {' '}{formatTime(timeOfBirth)}.
        </div>

        <div className="calculated-info-row">
          Seconds alive: <b>{secondsAlive.toLocaleString()}</b>
        </div>

        <div className="calculated-info-row">
          It looks like you already had your 1 billionth second! :)
        </div>
      </>
    );
  }

  return (
    <>
      {/* <div className="calculated-info-row">
        <button id="edit-dob-btn">
          Edit date of birth
        </button>
      </div> */}

      <div className="calculated-info-row">
        Date and time of birth: 
        {' '}{timeOfBirth.toDateString()} at
        {' '}{formatTime(timeOfBirth)}.
      </div>            

      <div className="calculated-info-row">
        Seconds alive: <b>{secondsAlive.toLocaleString()}</b>
      </div>

      <div className="calculated-info-row">
        You will be one billion seconds old on
        {' '}{oneBillionSecondsDate.toDateString()} at
        {' '}{formatTime(oneBillionSecondsDate)}.
      </div>

      <div className="calculated-info-row">
        This is in {prettyDateDiff(oneBillionSecondsDate)}.
      </div>
    </>
  );
}

export { CalculatedInfo };
