// DO NOT DELETE

import * as React from 'react'
import { useState,useEffect } from 'react'
import { render } from 'react';
import './App.css'
import { Header } from './Header.js'
import { Description } from './Description';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/terrier-scottish/n02097298_91.jpg");

const handleClick = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(
      (result) => {
        const dog = result.message
        setDogUrl(dog);
      },
    ).catch(
      (error) => {
      }
    )
}

  return (
    <div>
      <Header title="Dogアプリ" />
      <Description url={dogUrl} handleClick={handleClick}/>
    </div>
  );
}

