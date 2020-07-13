import React from 'react';
import { Grid, Typography } from '@material-ui/core'

//Componenets
import Header from '../src/components/Header'
import CSS from './app.css'

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
          <Grid item xs={12} style={headerStyle} className = "header">
            <Typography style={headerTitle} className="headerTitle">
              Anketa
            </Typography>
          </Grid>

          <Grid item style={contentStyle} xs={12}>
            
          </Grid>
      </Grid>
       
    
  );
}

export default App;
