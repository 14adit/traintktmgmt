import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import {Slide,ToastContainer,toast} from 'react-toastify'
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';


const CreateTicket = (props) => {

  const navigate = useNavigate();
  const [ticket, setTicket] = useState({
    train_name: '',
    train_number: '',
    passenger_name: '',
    gender: '',
    start: '',
    end: '',
    price: '',
    date: '',
  })

  const onChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {

    // Prevents the page from refreshing
    e.preventDefault();

    //  API calls with the help of axios
    axios
      .post('/api/tickets', ticket)
      .then((res) => {
        setTicket({
          train_name: "",
          train_number: "",
          passenger_name: "",
          gender: "",
          start: "",
          end: "",
          price: "",
          date: ""
        })
        navigate("/")
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
        console.log('The error is -> ')
        console.log(err)
      });
  }

  return (
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

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the Train'
                  name='train_name'
                  className='form-control'
                  value={ticket.train_name}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Train Number'
                  name='train_number'
                  className='form-control'
                  value={ticket.train_number}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Passenger Name'
                  name='passenger_name'
                  className='form-control'
                  value={ticket.passenger_name}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Gender'
                  name='gender'
                  className='form-control'
                  value={ticket.gender}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Starting Point'
                  name='start'
                  className='form-control'
                  value={ticket.start}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Ending Point'
                  name='end'
                  className='form-control'
                  value={ticket.end}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Price'
                  name='price'
                  className='form-control'
                  value={ticket.price}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Date of booking'
                  name='date'
                  className='form-control'
                  value={ticket.date}
                  onChange={onChange}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default CreateTicket;


