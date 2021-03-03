import './App.css';
import './App.css';
import UserList from './components/UserList';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Profile from './components/Profile';
import { useState } from 'react';

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  console.log(listOfUSer)
  return (
    <div className="App">

      <Router>
        <Route exact path='/'><UserList setListOfUSer={setListOfUSer} listOfUSer={listOfUSer} /></Route>
        <Route path='/Profile/:id' render={(props) => <Profile listOfUSer={listOfUSer} {...props} />} />
      </Router>
    </div>
  );
}

export default App;
