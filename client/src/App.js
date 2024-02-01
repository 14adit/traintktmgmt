// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateTicket from './components/CreateTicket';
import ShowTicketList from './components/ShowTicketList';
import ShowTicketDetails from './components/ShowTicketDetails';
import UpdateTicketInfo from './components/UpdateTicketInfo';

const App = () =>{
  return (
    <Router>
      <div>
        <Routes>
           <Route exact path='/' element={<ShowTicketList />} />
           <Route path='/create-ticket' element={<CreateTicket />} />
           <Route path='/edit-ticket' element={<UpdateTicketInfo />} />
           <Route path='/show-ticket/:id' element={<ShowTicketDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
