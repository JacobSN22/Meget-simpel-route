import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { News } from '../pages/news';
import { Products } from '../pages/products/Products';
import { Categorie } from '../pages/products/categorie';
import { Details } from '../pages/products/details';
import { Login } from '../pages/login';
import { Home } from '../pages/home';

export const Router = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/products' element={<Products />}>
            <Route path=':categorie' element={<Categorie />}>
                <Route path=':id' element={<Details />}/>
            </Route>
        </Route>
        <Route path='/login' element={<Login />}/>
        
      </Routes>
  )
}
