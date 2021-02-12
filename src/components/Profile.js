import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
  
  import { Home, About, Contact } from '../pages';
  import { Nav, Footer } from '../layout';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    
    return (
      isAuthenticated && ( 
            
            <Router>
              <Nav/>
              <Switch>
                <Route path='/about'>
                  <About/>
                </Route>
                <Route path='/contact'>
                  <Contact/>
                </Route>
                <Route path='/'>
                    <Home/>
                </Route>
              </Switch>

              <img className='opacity-10 select-none max-w-sm absolute right-1/3 top-1/4' src='https://i2.wp.com/alternativehealthatlanta.com/wp-content/uploads/2019/09/Anxiety_and_Depression.png?resize=271%2C268&amp;ssl=1'></img>
              <Footer/>
            </Router>
        
      )
    )
}

export default Profile;