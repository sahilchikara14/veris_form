import React from 'react'
import './Form.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublicIcon from '@mui/icons-material/Public';


const Form = () => {
    return (
        <div className='grid-container'>
            <div className='grid-col-left' >
                <h2 className='mar-all'>Gaurav Garg</h2>
                <h1 className='mar-all'>15 Minute Meeting</h1>
                <div className='mar-all'>
                    <AccessTimeFilledIcon /> <span>15 min</span>
                </div>
                <div className='mar-all'>
                    <CalendarTodayIcon /> <span>9:30 AM-9:45 AM, Friday, September 16, 2022</span>
                </div>
                <div className='mar-all'>
                    <PublicIcon /> <span>Indian Standard Time</span>
                </div>



            </div>


            <div className='grid-col-right' >

                <form>

                    <h3 className='mar-all'>Enter Details</h3>
                    <div className="mb-3">
                        <label htmlFor="name_id" className="form-label">Name *</label>
                        <input type="text" className="form-control " style={{ width: "75%" }}
                            id="name_id " />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email_id" className="form-label ">Email *</label>
                        <input type="email" className="form-control" style={{ width: "75%" }}
                            id="email_id" />
                    </div>

                    <button type="submit" className="btn btn-outline-primary"
                        style={{ borderRadius: "50px", margin: "20px 0px" }}>Add Guests</button>

                    <div className="mb-3">
                        <label htmlFor="extra_details" className="form-label">

                            <strong> Please share anything that will help prepare for the meeting</strong>

                        </label>
                        <textarea className="form-control" id="extra_details"
                            style={{ width: "75%" }} rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ borderRadius: "50px" }}>Schedule Event</button>
                </form>

            </div>
        </div>
    )
}

export default Form