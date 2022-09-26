import React, { useState } from 'react'
import './Form.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublicIcon from '@mui/icons-material/Public';
import Details from './Details';
import Error from './Error';

const Form = () => {

    const initialState={
        details:{
            name:"",email:"",
        }
    }

    const [details, setDetails] = useState(initialState.details)
    const [detailsModel,setDetailsModel]=useState(false)
    const [errorModel,setErrorModel]=useState(false)
   

    const show = (e) => {
        e.preventDefault();
        const { name, email } = details;
        if (name == "" || email == "") {
            return setErrorModel(true)
           // console.log("error");
           
        }
        else {
            console.log(details);
            return setDetailsModel(true)
        }
    }


    const handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setDetails({ ...details, [name]: value });
    };


    return (
        <>
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

                <h3 className='mar-all'>Enter Details</h3>
                <div className="mb-3">
                    <label htmlFor="name_id" className="form-label">Name *</label>
                    <input type="text" className="form-control " style={{ width: "75%" }}
                        onChange={handleChange} name="name" />

                </div>
                <div className="mb-3">
                    <label htmlFor="email_id" className="form-label ">Email *</label>
                    <input type="email" className="form-control" style={{ width: "75%" }}
                        onChange={handleChange} name="email" />
                </div>

                <button type="submit" className="btn btn-outline-primary"
                    style={{ borderRadius: "50px", margin: "20px 0px" }}>Add Guests</button>

                <div className="mb-3">
                    <label htmlFor="extra_details" className="form-label">

                        <strong> Please share anything that will help prepare for the meeting</strong>

                    </label>
                    <textarea onChange={handleChange} className="form-control" name="extra"
                        style={{ width: "75%" }} rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-primary" onClick={show}
                    style={{ borderRadius: "50px" }}>Schedule Event</button>
                
            </div>
        </div>
        {detailsModel?<Details name={details.name} email={details.email} extra={details.extra} hide={()=>setDetailsModel(false)}/>:null}
        {errorModel?<Error name={details.name} email={details.email} extra={details.extra} hide={()=>setErrorModel(false)}/>:null}
        </>
    )
}

export default Form;