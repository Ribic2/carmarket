import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Grid, Typography } from '@material-ui/core'
import Questions from './media/JSON/questions.json';


//Componenets
import Question from './components/Question/Question.js'

function App() {

  return (
    <div>
      <Navbar />
      <Question {...Questions[1]} />
    </div>
       
    
  );
}

export default App;
