import React from 'react'
import './Sendmail.css';
import { Card, Dialog } from "@material-ui/core"

const Sendmail = ({ done, setDone }) => {
  const handleClose = () => {
    setDone(false);
   
  }
  return (
    <>
      <Dialog className='card' open={done}
        onClose={handleClose}>
        <Card className='card'>
          <h1>Thank you so much for contacting me</h1>
        </Card>
      </Dialog>

    
    </>
  )
}

export default Sendmail
