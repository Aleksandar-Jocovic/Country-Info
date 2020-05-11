import React, { useEffect } from 'react'

const Country = ({ country }) => {

  const formatPopulation = () => {
    const pop = country.population.toString();

    let i = Math.floor(pop.length / 3);
    const arr = pop.split('');

    let final = []
    for (let x = 0; x < i; x++) {

      final.unshift(" " + arr.splice(-3, 3).join(''));
    }
    if (arr.length > 0) {
      final = arr.join('') + ", " + final;
    } else {
      final = final.toString()
    }
    return final;
  }

  const imgStyle = {
    width: 100,
    height: 100,
    borderRadius: "50%",
    margin: "0 auto",
    float: "right",
    marginRight: 20,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  return (
    <div className="p-3">
      <img src={country.flag} alt="" style={imgStyle} />
      <h5>Population: <span className="text-warning">{formatPopulation()}</span></h5>
      <h5>Region: <span className="text-warning">{country.region}</span></h5>
      <h5>Sub region: <span className="text-warning">{country.subregion}</span></h5>
      <h5>Lang: <span className="text-warning">{country.languages[0].name}</span></h5>
      <h5>Native Lang: <span className="text-warning">{country.languages[0].nativeName}</span></h5>
      <h5>Native name: <span className="text-warning">{country.nativeName}</span></h5>
      <br />
      <h5>Timezones: <span className="text-warning">{country.timezones.map(item => `${item}, `)}</span></h5>
      <br />
      <h5>Borders: <span className="text-warning">{(country.borders.length !== 0) ? country.borders.map(item => `${item}, `) : "None"}</span></h5>


    </div>
  )
}

export default Country
