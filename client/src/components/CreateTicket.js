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
        navigate("/all-tickets")
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
        console.log('The error is -> ')
        console.log(err)
      });
  }

  return (
    <div className="CreateTicket bg-[url('/src/parabolic-rectangle.svg')]">
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

            <form class="max-w-sm mx-auto" noValidate onSubmit={onSubmit}>
              <div className='mb-3'>
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Train Name:</label>
                <input
                  type='text'
                  placeholder='Name of the Train'
                  name='train_name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={ticket.train_name}
                  onChange={onChange}
                />
              </div>
              <div className='mb-3'>
              <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Train Number:</label>
                <input
                  type='number'
                  placeholder='Train Number'
                  name='train_number'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={ticket.train_number}
                  onChange={onChange}
                />
              </div>
              <div className='mb-3'>
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Passenger Name:</label>
                <input
                  type='text'
                  placeholder='Passenger Name'
                  name='passenger_name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={ticket.passenger_name}
                  onChange={onChange}
                />
              </div>
              <div className='mb-3'>
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter The Gender:</label>
                <input
                  type='text'
                  placeholder='Gender'
                  name='gender'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={ticket.gender}
                  onChange={onChange}
                />
              </div>
              <div className='mb-3'>
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter The Starting Point:</label>
                <input
                  type='text'
                  placeholder='Starting Point'
                  name='start'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={ticket.start}
                  onChange={onChange}
                />
              </div>
              <div className='mb-3'>
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Train Ending Point:</label>
                <input
                  type='text'
                  placeholder='Ending Point'
                  name='end'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={ticket.end}
                  onChange={onChange}
                />
              </div>
              <div className='mb-3'>
              <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Ticket Price:</label>
                <input
                  type='number'
                  placeholder='Price'
                  name='price'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={ticket.price}
                  onChange={onChange}
                />
              </div>
              <div className='mb-3'>
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Booking Date:</label>
                <input
                  type='date'
                  placeholder='Date of booking'
                  name='date'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={ticket.date}
                  onChange={onChange}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <center>
              <input
                type='submit'
                className='focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 mt-2 h-12 w-auto'
              />
              </center>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default CreateTicket;


