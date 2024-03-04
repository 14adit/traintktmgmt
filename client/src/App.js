// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateTicket from './components/CreateTicket';
import ShowTicketList from './components/ShowTicketList';
import ShowTicketDetails from './components/ShowTicketDetails';
import UpdateTicketInfo from './components/UpdateTicketInfo';
import Front from './components/Front';
import AllRoutes from './components/AllRoutes';

const App = () =>{
  return (
    <Router>
      <div>
        <Routes>
        <Route path='/' exact element={<Front />} />
           <Route path='/all-tickets' exact element={<ShowTicketList />} />
           <Route path='/create-ticket' element={<CreateTicket />} />
           <Route path='/edit-ticket/:id' element={<UpdateTicketInfo />} />
           <Route path='/show-ticket/:id' element={<ShowTicketDetails />} />
           <Route path='/all-routes' element={<AllRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
