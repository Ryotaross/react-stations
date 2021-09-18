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
    ).catch(
      (error) => {
      }
    )
}

function Header(props){
  return(
    <header className="top">
      {props.title}
    </header>
  )
}

function Description(props){
  return(
    <div className="main">
      <p className="leftMenu">犬の画像を表示するサイトです</p>
      <div className="rightMenu">
        <DogImage dogUrl = {dogUrl} />
        <button className="btn" onClick={handleClick}>更新</button>
      </div>
    </div>
  )
}

function DogImage(props){
  return(
    <img className="photo" src={props.dogUrl}></img>
  )
}

  return (
    <div>
      <Header title="Dogアプリ" />
      <Description />
    </div>
  );
}

