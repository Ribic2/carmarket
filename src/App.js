import React from 'react';
import { Grid, Typography } from '@material-ui/core'

//Componenets
import CSS from './app.css'
import Question from './components/Question.js'

function App() {
  const headerStyle = {
    backgroundColor: "#4F8A8B",
    height: "115px",
  }

  const headerTitle = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "50px",
    lineHeight: "75px",
    textAlign: "center",
    color: "#F4F6FF",
    position: "relative",
    top: "11px",
  }

  const contentStyle = {
    backgroundColor: "#F4F6FF",
    height: "85vh",
    marginTop: "10px"
  }
  return (
      <Grid container spacing={2}>
          {/* Header holder */}
          <Grid item xs={12} style={headerStyle} className = "header">
            <Typography style={headerTitle} className="headerTitle">
              Anketa
            </Typography>
          </Grid>
          
          {/* Question holder */}
          <Grid item style={contentStyle} xs={12}>
            <Question></Question>
          </Grid>
      </Grid>
       
    
  );
}

export default App;
