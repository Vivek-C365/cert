import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function Account_setting() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>FULL NAME</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            NameWe’re big on real names around here on CertScope, so people know
            who’s who. As per our policy name can not be changed. To know more
            visit our help and support centre.
          </Typography>
          <TextField id="filled-basic" label="Name" variant="filled" />
        </AccordionDetails>
      </Accordion>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>PROFILE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Your profile information.
          </Typography>
          <TextField id="filled-basic" label="Bio*" variant="outlined" />
          <TextField id="filled-basic" label="Phone" variant="outlined" />
          <TextField id="filled-basic" label="Website" variant="outlined" />
          <TextField id="filled-basic" label="Linkedin" variant="outlined" />
          <TextField id="filled-basic" label="Twitter" variant="outlined" />
          <TextField id="filled-basic" label="Instagram" variant="outlined" />
          <TextField id="filled-basic" label="YouTube" variant="outlined" />
          <TextField id="filled-basic" label="Facebook" variant="outlined" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>ACCOUNT SETTINGS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A valid email address. All emails from the system will be sent to this address. The email address is not made public and will only be used if you wish to receive a new password or wish to receive certain news or notifications by email.
          </Typography>
          <TextField id="filled-basic" type='email' label="Email" variant="outlined" />
          <TextField id="filled-basic" type='password' label="New Password" variant="outlined" />
          <TextField id="filled-basic" type='password' label="Confirm Password" variant="outlined" />
        </AccordionDetails>
      </Accordion>
      <Button variant="contained">Save Changes</Button>
    </div>
  )
}

export default Account_setting