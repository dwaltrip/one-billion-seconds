import './App.css';

import { DobForm } from './dob-form';

function App() {
  return (
    <div className="app">
      <h1 className="page-header">One Billion Seconds of Life</h1>

      <DobForm onSubmit={dob => console.log('on submit --', dob)}/>
    </div>
  );
}

export default App;
