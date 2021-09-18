// DO NOT DELETE
import * as React from 'react'
import { DogImage } from './DogImage'

export function Description(props){
    const url = props.url
    const handleClick = props.handleClick
    return(
      <div className="main">
        <p className="leftMenu">犬の画像を表示するサイトです</p>
        <div className="rightMenu">
          <DogImage url = {url} />
          <button className="btn" onClick={handleClick}>更新</button>
        </div>
      </div>
    )
  }
  