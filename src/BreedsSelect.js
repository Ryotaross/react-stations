// DO NOT DELETE
import * as React from 'react'

export function BreedsSelect(props){
    const breeds = props.breeds
    const handleChange = props.handleChange
    const selectedBreed = props.selectedBreed
    const breedsItems = Object.keys(breeds).map((breeds,index) =>
      <option key={index} value={breeds}>
        {breeds}
      </option>
    )
  return(
    <>
      <form className="dogForm">
        <div className="cp_ipselect cp_sl01">
          <select onChange={handleChange} value={selectedBreed}>
            <option hidden>Breeds List</option>
            {breedsItems}
          </select>
        </div>
      </form>
    </>
  )
}