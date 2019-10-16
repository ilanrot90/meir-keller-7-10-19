import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsError, setLocation } from '../actions';
import { ACCUWEATHER_URL, API_KEY } from '../utils/constants';
import Autocomplete from './Autocomplete';

const Search = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');
  const [cities, setCities] = useState([]);

  const selectCity = value => {
    const { Key, LocalizedName } = value;
    dispatch(setLocation({ Key, LocalizedName }));
    setCities([]);
  };

  useEffect(() => {
    (async () => {
      if (userInput) {
        try {
          const response = await fetch(
            `${ACCUWEATHER_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${userInput}`
          );
          const data = await response.json();
          setCities(
            data.map(({ Key, LocalizedName, Country }) => {
              return {
                Key,
                LocalizedName,
                display: `${LocalizedName}, ${Country.LocalizedName}`
              };
            })
          );
        } catch (err) {
          console.error(err);
          dispatch(setIsError(true));
        }
      }
    })();
  }, [userInput, dispatch]);

  const autocompleteProps = {
    userInput,
    setUserInput,
    suggestions: cities,
    selectSuggestions: selectCity
  };
  return <Autocomplete {...autocompleteProps} />;
};

export default Search;
