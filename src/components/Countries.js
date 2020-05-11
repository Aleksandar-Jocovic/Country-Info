import React, { useState } from 'react'
import Country from './Country'

const Countries = ({ country: { name, capital, alpha2Code, }, country }) => {

  const [display, setDisplay] = useState(false)
  const [btnText, setBtnText] = useState("See More")

  const toggle = () => {
    setDisplay(!display)
    !display ? setBtnText("Close") : setBtnText("See More")
    console.log(country)

  }

  return (
    <div className="card text-white bg-primary mb-2 pb-2">
      <div className="card-header">Country</div>
      <div className="card card-body bg-primary mb-2">
        <div className="d-flex">
          <h5>{name} <span className="text-warning">&nbsp;{alpha2Code}</span></h5>
        </div>
        <h5>Capital: <span className="text-warning">{capital}</span></h5>
      </div>
      {display ? <Country country={country} /> : null}
      <button style={{ width: "50%" }} className="btn bg-warning m-auto" onClick={toggle}>{btnText}</button>
    </div>

  )
}


export default Countries