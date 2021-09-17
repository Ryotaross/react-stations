// DO NOT DELETE

import * as React from 'react'
import { useState,useEffect } from 'react'
import { render } from 'react';
import './App.css'

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
      (error) => {
        console.log("aaa");
      }
    )
}

  return (
    <div>
      <header className="top">
        Dogアプリ
      </header>
      <div className="clearfix main">
        <p className="leftMenu">犬の画像を表示するサイトです</p>
        <div className="rightMenu">
          <img className="photo" src={dogUrl}></img>
          <button className="btn" onClick={handleClick}>更新</button>
        </div>
      </div>
    </div>
  );
}

