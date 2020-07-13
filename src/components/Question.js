import React from 'react';
import "./Question.css"
import { Card, CardContent, Typography} from '@material-ui/core'

function Question() {
  const questionHeader = {
    background: "rgb(79, 138, 139, 0.3)",
    width: "80vw",
    margin: "0 auto",
    borderRadius: "0px",
    boxShadow: "none",
    fontFamily: "Poppins",
    position: "relative",
    fontSize: "30px",
    top: "50px"
  }
  return (  
    <div>
        {/*Question*/}
        <Card style={questionHeader} className="questionText">
            <CardContent>
                <Typography variant="h5" component="h2">
                Ali ste zadovoljni s spletno platformo,
                ki jo uporabljate?
                </Typography>
            </CardContent>
        </Card>
    </div> 
  );
}

export default Question;
