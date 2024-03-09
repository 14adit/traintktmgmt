import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function UpdateTicketInfo(props) {
  const [ticket, setTicket] = useState({
    train_name: "",
    train_number: "",
    passenger_name: "",
    gender: "",
    start: "",
    end: "",
    price: "",
    date: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/tickets/${id}`)
      .then((res) => {
        setTicket({
          train_name: res.data.train_name,
          train_number: res.data.train_number,
          passenger_name: res.data.passenger_name,
          gender: res.data.gender,
          start: res.data.start,
          end: res.data.end,
          price: res.data.price,
          date: res.data.date,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateTicketInfo GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      train_name: ticket.train_name,
      train_number: ticket.train_number,
      passenger_name: ticket.passenger_name,
      gender: ticket.gender,
      start: ticket.start,
      end: ticket.end,
      price: ticket.price,
      date: ticket.date,
    };

    axios
      .put(`/api/tickets/${id}`, data)
      .then((res) => {
        navigate(`/show-ticket/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateTicketInfo PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className="UpdateTicketInfo bg-[url('/src/parabolic-rectangle.svg')]">
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
            <h1 className='display-4 text-center'>Edit Ticket</h1>
            <p className='lead text-center'>Update Ticket's Info</p>
          </div>
        </div>

        <div className=''>
          <form class="max-w-sm mx-auto" noValidate onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='train_name'>Train Name</label>
              <input
                type='text'
                placeholder='Name of the Train'
                name='train_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={ticket.train_name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='fmb-3'>
              <label htmlFor='train_number'>Train Number</label>
              <input
                type='number'
                placeholder='Train Number'
                name='train_number'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={ticket.train_number}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='mb-3'>
              <label htmlFor='passenger_name'>Passenger Name</label>
              <input
                type='text'
                placeholder='Passenger Name'
                name='passenger_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={ticket.passenger_name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='mb-3'>
              <label htmlFor='gender'>Gender</label>
              <textarea
                type='text'
                placeholder='Gender'
                name='gender'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={ticket.gender}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='mb-3'>
              <label htmlFor='start'>Starting Point</label>
              <input
                 type='text'
                 placeholder='Starting Point'
                 name='start'
                 className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                 value={ticket.start}
                 onChange={onChange}
              />
            </div>
            <br />

            <div className='mb-3'>
              <label htmlFor='end'>Ending Point</label>
              <input
               type='text'
               placeholder='Ending Point'
               name='end'
               className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
               value={ticket.end}
               onChange={onChange}
              />
            </div>
            <br />

            <div className='mb-3'>
              <label htmlFor='price'>Price</label>
              <input
               type='number'
               placeholder='Price'
               name='price'
               className='fbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
               value={ticket.price}
               onChange={onChange}
              />
            </div>
            <br />

            <div className='mb-3'>
              <label htmlFor='date'>Date</label>
              <input
               type='date'
               placeholder='Date of booking'
               name='date'
               className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
               value={ticket.date}
               onChange={onChange}
              />
            </div>
            <br />
            <center>
              <button
                type='submit'
                className='focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 mt-4 h-12 w-auto'
                >
                Update Ticket
              </button>
            </center>
            <br /> <br />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default UpdateTicketInfo;