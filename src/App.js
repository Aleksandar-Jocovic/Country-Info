import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import Countries from './components/Countries'

const App = () => {

  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (query.length > 2) {
      getCountry()
    }
  }, [query])

  const getCountry = async () => {
    await fetch(`https://restcountries.eu/rest/v2/name/${query}`)
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
      .catch(err => console.log("Error", err))
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 m-auto">
          <Header />
          <form onSubmit={getSearch} className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country Name..."
              onChange={handleChange}
            />
            <button type="submit" className="btn bg-primary mt-2">Search</button>
          </form>

          {(countries === '' || countries.status) ? null
            : countries.map(item => <Countries key={item.capital} country={item} />)}
          {countries.status ? "Not found" : null}

        </div>
      </div>
    </div>
  )
}

export default App