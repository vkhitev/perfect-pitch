import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const Header = styled(Grid).attrs({
  container: true,
  spacing: 0,
  justify: 'space-between',
  alignItems: 'center',
})`
  padding: 20px 40px;
  background-color: #1caff6;
  color: #fff;
`;

const SkillHeader = props => (
  <Header>
    <div>
      <Typography variant="headline" color="inherit">
        {props.title}
      </Typography>
      <Typography variant="subheading" color="inherit">
        Completed:{' '}
        {props.totalCount === 0
          ? `— / —`
          : `${props.completedCount} / ${props.totalCount}`}
      </Typography>
    </div>
    {props.totalCount > 0 && (
      <Button
        variant="raised"
        color="secondary"
        onClick={props.onClickPractice}
      >
        Practice
      </Button>
    )}
  </Header>
);

SkillHeader.propTypes = {
  title: PropTypes.string.isRequired,
  completedCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onClickPractice: PropTypes.func.isRequired,
};

export default SkillHeader;
