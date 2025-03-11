import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out My Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='My First Ever Python Project Was To Make A Task Manager'
              label='Python'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Then Shortly After Did some Research Into Helpful Tools.  Resulting In a PyTool'
              label='Python'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Yet To Create!!!'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Yet To Create!!!'
              label='NaN'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Yet To Create!!!'
              label='NaN'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
