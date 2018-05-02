import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sprite from 'assets/sprite.svg';

const ProgressContainer = styled.div`
  text-align: center;
`;

const ProgressContent = styled.span`
  background-image: url(${sprite});
  vertical-align: middle;
  background-position: -1067px -269px;
  height: 126px;
  width: 160px;
  background-size: 1870px;
  display: inline-block;
  padding-top: 26px;
  color: #999;
  font-size: 41px;
  text-align: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

  & > span {
    font-size: 0.6em;
    font-weight: 700;
    position: relative;
    top: -0.4em;
  }
`;

const Progress = ({value}) => (
  <ProgressContainer>
    <ProgressContent>
      {value}
      <span>%</span>
    </ProgressContent>
  </ProgressContainer>
);

Progress.propTypes = {
  value: PropTypes.number,
};

Progress.defaultProps = {
  value: 0,
};

export default Progress;
