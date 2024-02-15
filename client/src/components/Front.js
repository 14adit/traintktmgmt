// // import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import { useNavigate } from 'react-router-dom';

// const Front = (props) =>{
//     return(
//         <div className='CreateTicket'>
//         <div className='container'>
//           <div className='row'>
//             <h1>Front page of my project</h1>
//             <Link to='/create-ticket'>Start</Link>
//             </div>
//         </div>
//       </div>
//       );
// };

// import Navbar from './navbar'

import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
function Front() {
  return(
    <div className=''>
      <Navbar />
    <div className="text-white pt-8 size-full bg-scroll bg-cover bg-" style={{backgroundImage:"url(/images/Trainplatform.jpg)"}}>
        <div className='pb-20'>
           <h1 className='text-center text-5xl font-semibold pt-5'>WELCOME TO <span className='text-orange-500 font-bold'>TicketBK</span></h1>
            <img className='object-cover float-right h-48 w-96 mr-36 rounded-lg mt-16' src="https://plus.unsplash.com/premium_photo-1679985958305-1677b87face0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYWlufGVufDB8fDB8fHww" />
           <p className='text-3xl mt-20 ml-20'>Book Tickets Here And Enjoy Your Travel 💕</p>
           <p className='text-l mt-3 ml-64 '>LET'S START TO EXPLORE  👇</p>
           <Link to="/create-ticket" class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 mt-4 ml-72 h-12 w-auto">Start</Link>
        </div>
           <div className='pt-8 pb-8'>
               <div className='container h-36 w-3/4 bg-zinc-900 rounded-full shadow-transparent flex flex-wrap border-1 border-white'>
               <span><input className='bg-white rounded-lg mt-12 ml-4 h-10 w-72 text-center text-black' type='text'placeholder='From' />
                    <input className='bg-white rounded-lg mt-10 ml-4 h-10 w-72 text-center text-black' type='text'placeholder='To' />
                    <input className='bg-white rounded-lg mt-10 ml-4 h-10 w-72 text-center text-black' type='date' />
                    <input type="submit" class="focus:outline-none text-black bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 mt-4 ml-10" value='Find'/></span>
               </div>
           </div>
           <div className='flex flex-wrap bg-stone-900 rounded-t-lg md:my-0'>
              <div className='bg-white h-60 w-60 ml-12 mt-12 hover:scale-105 duration-500 bg-center bg-cover rounded-lg' style={{backgroundImage:"url(/images/Train4.jpg)"}}>
                  
              </div>
              <div className='bg-white h-60 w-60 ml-12 mt-20 mb-12 hover:scale-105 duration-500 bg-center bg-cover rounded-lg' style={{backgroundImage:"url(/images/Train4.jpg)"}}>
                  
              </div>
              <div className='bg-white h-60 w-60 ml-12 mt-12 hover:scale-105 duration-500 bg-center bg-cover rounded-lg' style={{backgroundImage:"url(/images/Train4.jpg)"}}>
                  
              </div>
              <div className='bg-white h-60 w-60 ml-12 mt-20 hover:scale-105 duration-500 mb-12 bg-center bg-cover rounded-lg' style={{backgroundImage:"url(/images/Train4.jpg)"}}>
                  
              </div>
              <div className='bg-white h-60 w-60 ml-12 mt-12 hover:scale-105 duration-500 bg-center bg-cover rounded-lg' style={{backgroundImage:"url(/images/Train4.jpg)"}}>
                  
              </div>
           </div>
    </div>
    <Footer />
    </div>
  );
}


export default Front;


