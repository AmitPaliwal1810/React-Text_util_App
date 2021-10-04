import React, { useState } from 'react';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm';
// react router.
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(){
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark-Mode has been enable" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light-Mode has been enable" , "primary");
    }
  }

  const [alert, setalert] = useState(null);
  const showAlert = (message , type) =>{
    setalert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  
  return(
    <>
      <Router>
        <Navbar title={"textUtils"} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-4">
          <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
              </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;

/* video 12 code with harry

yet we have created dark mode feature and but this is working only for some part 
but right now we are going to make eanable the whole part of the app  therefore we make most of element of state in app.js 
for dark mode we use state variable and pass into navbar

*/