// DO NOT DELETE
import * as React from 'react'
import { useState,useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export function DogListContainer(props){
    const[breeds,setBreeds] = useState([])
    const[selectedBreed,setSelectedBreed] = useState('')
    const[selectedUrls,setSelectedUrls] = useState([])

    const handleChange = (event) => {
      setSelectedBreed(event.target.value)
    }
    
    const showBreeds = () => {
      const dogShowUrl = 'https://dog.ceo/api/breed/' + selectedBreed + '/images/random/12'
      fetch(dogShowUrl)
        .then(res => res.json())
        .then(
          (result) => {
          const showBreedsResult = result.message
          setSelectedUrls(showBreedsResult);
          },
        )
        .catch(
          (error) => {
          }
        )
    }
  

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/list/all')
          .then(res=>res.json())
          .then(
            (result) => {
                const breedsResult = result.message
                setBreeds(breedsResult)
            }
          )
          .catch(
            (err)=>{
            }
          )
    },[])

    return(
      <>
        <BreedsSelect breeds={breeds} handleChange={handleChange} 
         selectedBreed={selectedBreed} showBreeds={showBreeds}
         selectedUrls={selectedUrls}/>
      </>
    )
}
