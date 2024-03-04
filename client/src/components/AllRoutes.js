import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AllRoutes = () =>(
    <div className='AllRoutes'>
        <Navbar />
        <div className='container'>
            <h3 className='display-4'>Backend Routes</h3>
            <ul>
                <li>Create: api/tickets</li>
                <li>Read: api/tickets</li>
                <li>FindById: api/tickets/:id</li>
                <li>Update: api/tickets/:id</li>
                <li>Delete: api/tickets/:id</li>
            </ul>
        </div>
        <div className='container'>
            <h3 className='display-4'>Frontend Routes</h3>
            <ul>
                <li>Create: /create-ticket </li>
                <li>Read: /all-tickets </li>
                <li>FindById: /show-ticket/:id</li>
                <li>Update: /edit-ticket/:id</li>
            </ul>
        </div>
        <Footer />
    </div>
)

export default AllRoutes