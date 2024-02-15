import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const TicketCard = (props) => {
  const ticket = props.ticket


  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Tickets'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-ticket/${ticket._id}` }>
            {ticket.train_name}  
          </Link> 
        </h2>
        <h3>{ticket.train_name}</h3>
        <p>{ticket.train_number}</p>
        <p>{ticket.passenger_name}</p>
      </div>
    </div>  
  )
}

export default TicketCard