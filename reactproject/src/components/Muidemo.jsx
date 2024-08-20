import React from "react";
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
function muidemo(){
    return(
        <div>
            <Button variant="contained" color="secondary" size="large">Contained</Button><br/>
            <Button variant="outlined" color="inherit" size="medium">Outlined</Button><br/>
            <Button variant="text" color='success' size='small'>TEXT</Button><br/>
            <Button variant="contained" color="error" onClick={()=>{alert("Hello ")}}>Press Me</Button><br/><br/>

            <Button variant="outlined" color="error" endIcon={<DeleteIcon/>}>Delete</Button>
            <Button variant="contained" color="primary" startIcon={<SendIcon/>}>Send</Button>
        </div>
    )
}
export default muidemo;