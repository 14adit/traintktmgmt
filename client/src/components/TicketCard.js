import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const TicketCard = (props) => {
  const ticket = props.ticket


  return (
    <div className='card-container'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXfRNxpviykeBzRl6g43ZjsS9XTNpXFsLpQ&usqp=CAU'
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