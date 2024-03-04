import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TicketCard from './TicketCard';
import Navbar from './Navbar';
import Footer from './Footer';

function ShowTicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/tickets`)
      .then((res) => {
        setTickets(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowTicketList ->');
        console.log(err)
      });
  }, []);

  const TicketList =
    tickets.length === 0
      ? 'there is no ticket record!'
      : tickets.map((ticket, k) => <TicketCard ticket={ticket} key={k} />);

  return (
    <div className='ShowTicketList'>
      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Tickets List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-ticket'
              className='btn btn-outline-warning float-right'
            >
              + Add New Ticket
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{TicketList}</div>
      </div>

      <Footer />
    </div>
  );
}

export default ShowTicketList;