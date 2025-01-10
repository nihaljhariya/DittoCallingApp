import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import Navbar2 from './Navbar2';
import { IconButton } from '@mui/material';
import { Snackbar } from '@mui/material';
export default function History() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])
 const [message, setMessage] = React.useState();
  const [open, setOpen] = React.useState(false)

    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                  <Snackbar
                
                                open={open}
                                autoHideDuration={4000}
                                message={message}
                            />
                // IMPLEMENT SNACKBAR
            }
        }

        fetchHistory();
    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }

    return (
        <div>

                {/* <div className='mb-3'><Navbar2/></div> */}
                
               
            
            {
                (meetings.length !== 0) ? meetings.map((e, i) => {
                    return (

                        <>
           <div style={{marginBottom:"5rem"}}><Navbar2/></div>
                       <div>
                            <Card style={{marginBottom:"4rem"}} key={i} variant="outlined">


                                <CardContent >
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Code: {e.meetingCode}
                                    </Typography>

                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Date: {formatDate(e.date)}
                                    </Typography>

                                </CardContent>


                            </Card>

                            </div>
                        </>
                    )
                }) : <></>

            }

        </div>
    )
}