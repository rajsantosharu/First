import React from 'react'
import './Errorshow.css'
import { Card, Dialog } from "@material-ui/core"
const Errorshow = ({err, setError}) => {
    const handleClose = () => {
        setError(false);
       
      }
  return (
    <Dialog open={err}
    onClose={handleClose}>
    <Card className='card'>
      
      <h1>Please fill the valid credentials</h1>
    </Card>
  </Dialog>
  )
}

export default Errorshow
