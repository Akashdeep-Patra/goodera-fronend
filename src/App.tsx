import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.scss';
import { ReactComponent as BrandIcon } from './assets/Vector.svg';
import Navbar from './components/NavBar';
import FindJobs from './pages/FindJobs';
export interface Routetype {
  name: string;
  title: string;
  logo?: React.ReactNode;
}
const ROUTES: Routetype[] = [
  {
    name: '/job-hunt',
    title: 'Job Hunt',
    logo: <BrandIcon />,
  },
  {
    name: '/find-jobs',
    title: 'Find Jobs',
  },
  {
    name: '/up-skill',
    title: 'Upskill Yourself',
  },
];
function App() {
  const [currentRote, setCurrntRoute] = useState('/find-jobs');
  const handleLinkClick = (link: string) => {
    setCurrntRoute(link);
  };
  return (
    <div className='App'>
      <Router>
        <Navbar
          handleLinkClick={handleLinkClick}
          routes={ROUTES}
          currentRoute={currentRote}
        />
        <Route path='/'>
          <Redirect to='/find-jobs'></Redirect>
        </Route>
        <Route path='/find-jobs' exact component={FindJobs} />
      </Router>
    </div>
  );
}

export default App;
