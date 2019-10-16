import React from 'react';
import styled from 'styled-components';
import breaks from '../styles/breaks';
import { appBluePrimary, white } from '../styles/colors';
import { dayNumberToString } from '../utils/functions';
import WeatherIcon from './WeatherIcon';

const Box = styled.div`
  color: ${white};
  background-color: ${appBluePrimary};
  border-radius: 12px;
  text-align: center;

  @media ${breaks.break1} {
    margin: 5px 5px 5px 0;
    :first-child {
      margin: 5px;
    }
    height: 120px;
    width: 23%;
    padding-top: 10px;
  }

  @media ${breaks.break2} {
    margin: 10px 10px 10px 0;
    font-size: 1.4rem;
    :first-child {
      margin: 10px;
    }
    height: 180px;
    width: 20%;
    padding-top: 20px;
  }

  @media ${breaks.break3} {
    margin: 15px 15px 15px 0;
    font-size: 1.8rem;
    :first-child {
      margin: 15px;
    }
    height: 250px;
    width: 20%;
    padding-top: 35px;
  }
`;

const DayBox = ({ data }) => {
  return (
    <Box>
      <div>{dayNumberToString(new Date(data.Date).getDay())}</div>
      <WeatherIcon iconNumber={data.Day.Icon} />
      <div>{Math.floor(data.Temperature.Maximum.Value)}&deg;</div>
    </Box>
  );
};

export default DayBox;
