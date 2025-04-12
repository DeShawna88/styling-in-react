// src/App.jsx

import './App.css';
// Later on, we'll import button components here

import Button1 from './components/example-1-normal-css/Button';
import Button2 from './components/example-2-inline-css/Button';
import Button3 from './components/example-3-styled-components/Button';
import Button4 from './components/example-4-css-modules/Button'

const App = () => {
  return (
    <div className="App">
      {
        // Add all example components:
        <>
          // Add all example components:
          <Button1 buttonText="Example 1" />
          <Button2 />
          <Button3 />
          <Button4 />
          </>
        //...
      }
    </div>
  );
};

export default App;
