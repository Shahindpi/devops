import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detials from './pages/Details';
import Homepage from './pages/Homepage';
import Login from './pages/Login';


class App extends React.Component{
    render(){
        return(
            <div className='root-page-wrapper'>
                
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/details" element={<Detials />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        );
    }
}

export default App;