import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Todo from "./Todo";
import 'flowbite/dist/flowbite.css';
import Form from "./Form";
import Teachers from "./Teachers";
import Product from "./Product";
import Login from "./Login";
import Teacher from "./SingleTeacher";
import Counter from './Counter';
import Component from './Nav';
import Movi from './Movi';
import FavoritePage from './Favorite';
import db from './config/Firebase';


import { UserContext } from './Cotext'; 



function App() {
  const [user, setUser] = useState({name:"salma"});

  return (
 
      <>
  
         <UserContext.Provider value={[user, setUser]}>
        <Component />
        <Routes>
          <Route path='/product' element={<Product />} />
           <Route path='/form' element={<Form />} />
           <Route path='/todo' element={<Todo />} />
          <Route path='/teacher' element={<Teacher />} />
          <Route path='/Counter' element={<Counter />} />
          <Route path='/Movi' element={<Movi />} />
          <Route path="/favorite" element={<FavoritePage />} />



          <Route path="*" element={<h1>Not found</h1>} />
        </Routes> 
        </UserContext.Provider> 
    
     


        </>

  );
}

export default App;
