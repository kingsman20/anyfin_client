import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import '../../Styles.scss';
import Card from '../Card/Card';

const CountrySelector = () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(false);

  useEffect(() => {
    setOptions(countryList().getData());
  }, []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <div>
      <section className='wrapper'>
        <div className='content content-two'>
          <header>
            <h1>SEK Exchange Rates Converter</h1>
            <div>
              <h2>Select Country</h2>
            </div>
          </header>
          <div className='section-row'>
            <Select
              options={options}
              value={value}
              onChange={changeHandler}
              className='select-dropdown'
            />
            <button onClick={handleSubmit}>Add to List</button>
          </div>
          <div>&nbsp;</div>
          <div className='section-row'>
            <h2>Enter Amount in SEK</h2>
            <input type='number' id='amount' name='amount' />
            <button onClick={handleSubmit}>Convert</button>
          </div>
          <div>
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CountrySelector;

