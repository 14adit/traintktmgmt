import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
// import axios from 'axios';

// import { useNavigate } from 'react-router-dom';


const CreateTicket = (props) =>{


  // const onSubmit = (e) => {

  //   // Prevents the page from refreshing
  //   e.preventDefault();

  //   //  API calls with the help of axios
  //   axios.post('/api/tickets', ticket)
  //   .then((res) => {
  //     setTicket({
  //       train_name: "",
  //       train_number: "",
  //       Passenger_name: "",
  //       gender: "",
  //       start: "",
  //       end: "",
  //       price: "",
  //       date: ""
  //     })
  //   })
  // }
    return(
        <div className='CreateTicket'>
          <Navbar />
          <div className='container'>
            <div className='row'>
             <div className='col-md-8 m-auto'>
              <br />
                <Link to='/all-tickets' className='btn btn-outline-warning float-left'>
                  Show Ticket List
                </Link>
             </div>
             <div className='col-md-8 m-auto'>
               <h1 className='display-4 text-center'>Add Ticket</h1>
               <p className='lead text-center'>Create new Ticket</p>

            {/* <form noValidate onSubmit={onSubmit}>
                 <div className='form-group'>
                   <input 
                     type='text'
                     placeholder='Name of the Train'
                     className='form-control'
                     value={ticket.train_name}
                    // onChange={onChange}
                   />
                 </div>
                 <div className='form-group'>
                  <input 
                    type='number'
                    placeholder='Train Number'
                    className='form-control'
                    value={ticket.train_number}
                  />
                 </div>
               </form> */}
             </div>
              </div>
          </div>
          <Footer />
        </div>
      );
};


export default CreateTicket;


