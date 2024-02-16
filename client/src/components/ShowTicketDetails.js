import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';

function ShowTicketDetails(props) {
  const [ticket, setTicket] = useState({});
  // const [showToast, setShowToast] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/tickets/${id}`)
      .then((res) => {
        setTicket(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowTicketDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`/api/tickets/${id}`)
      .then((res) => {

        // Show the success alert
        toast.success('Ticket deleted!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
          // setShowToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        }, 5000); // Adjust the timeout as needed
      })
      .catch((err) => {
        console.log('Error in CreateTicket!');
        console.log('The error is -> ')
        console.log(err)
        // Show the success alert
        toast.error('Error while deleting the ticket, please try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      });
  };

  return (
    <div className='ShowTicketDetails'>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h1 className='display-4 text-center'>Ticket's Record</h1>
            <p className='lead text-center'>View Tickets's Info</p>
            <hr /> <br />

            <div className='row justify-content-center'>
              <div className='col-md-12'>
                <table className='table table-striped table-bordered table-dark'>
                  <tbody>
                    <tr>
                      <th scope='row'>Train Name</th>
                      <td>{ticket.train_name}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Train Number</th>
                      <td>{ticket.train_number}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Passenger Name</th>
                      <td>{ticket.passenger_name}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Gender</th>
                      <td>{ticket.gender}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Starting Point</th>
                      <td>{ticket.start}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Ending Point</th>
                      <td>{ticket.end}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Price</th>
                      <td>{ticket.price}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Date</th>
                      <td>{ticket.date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='row justify-content-around mt-3'>
              <div className='col-md-4'>
                <button
                  type='button'
                  className='btn btn-outline-danger btn-lg btn-block'
                  onClick={() => {
                    onDeleteClick(ticket._id);
                  }}
                >
                  Delete Ticket
                </button>
              </div>
              <div className='col-md-4'>
                <Link
                  to={`/edit-ticket/${ticket._id}`}
                  className='btn btn-outline-info btn-lg btn-block'
                >
                  Edit Ticket
                </Link>
              </div>
              <div className='col-md-4'>
                <Link to='/all-tickets' className='btn btn-outline-warning btn-lg btn-block'>
                  Show Ticket List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShowTicketDetails;


