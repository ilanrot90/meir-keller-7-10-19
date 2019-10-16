import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { setIsError, setLocation } from './actions';
import ErrorModal from './components/ErrorModal';
import Routes from './routes';
import { appBlueLight, appBluePrimary } from './styles/colors';
import { ACCUWEATHER_URL, API_KEY } from './utils/constants';

const GlobalStyle = createGlobalStyle`
body {
  min-height:100vh;
  background-attachment: scroll;
  background: ${appBluePrimary};
  background: linear-gradient(180deg, ${appBluePrimary} 0%, ${appBlueLight} 100%);
}
`;

const App = () => {
  const dispatch = useDispatch();

  const success = useCallback(
    async ({ coords }) => {
      try {
        const { latitude, longitude } = coords;
        const response = await fetch(
          `${ACCUWEATHER_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%2C%20${longitude}`
        );
        const { Key, LocalizedName } = await response.json();
        dispatch(setLocation({ Key, LocalizedName }));
      } catch (err) {
        dispatch(setIsError(true));
        console.error(err);
      }
    },
    [dispatch]
  );

  const error = useCallback(err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [success, error]);

  return (
    <>
      <GlobalStyle />
      <Routes />
      <ErrorModal />
    </>
  );
};

export default App;
