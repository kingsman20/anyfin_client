import gql from 'graphql-tag';
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import '../../Styles.scss';
import Card from '../Common/Card';
import Loader from 'react-spinners/ClipLoader';

const GET_COUNTRY = gql`
  query GetGountryQuery($code: String!) {
    countries(code: $code) {
      name
      population
      flag
      alpha2Code
    }
  }
`;

const CountrySelector = () => {
  const [options, setOptions] = useState([]);
  const [code, setCode] = useState('');
  const [countries, setCountries] = useState([]);
  const [codeList, setCodeList] = useState([]);

  useEffect(() => {
    setOptions(countryList().getData());
  }, []);

  const [getCountry, { loading, data }] = useLazyQuery(GET_COUNTRY, {
    variables: { code: code.value },
    onCompleted: () => {
      setCountries((countries) => [...countries, data.countries]);
      setCodeList((oldArray) => [...oldArray, code]);
    },
  });

  const handleSubmit = async () => {
    getCountry();
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
              value={code}
              onChange={(code) => setCode(code)}
              className='select-dropdown'
            />
            <button onClick={handleSubmit}>Add to List</button>
          </div>
          <div>&nbsp;</div>
          <div className='section-row'>
            <h2>Enter Amount in SEK</h2>
            <input type='number' id='amount' name='amount' />
            <button onClick={() => {}}>Convert</button>
          </div>
          <div>
            {loading ? (
              <Loader />
            ) : countries ? (
              countries.map((country) => {
                return (
                  <Card
                    flag={country[0].flag}
                    name={country[0].name}
                    population={country[0].population}
                    key={country[0].flag}
                  />
                );
              })
            ) : (
              <Card />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountrySelector;
