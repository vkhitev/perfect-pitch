import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {GridListTile} from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const Card = styled.div`
  padding: 33px 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 15px;
  position: relative;
  text-align: center;
`;

const CompletedBadge = styled.span`
  position: absolute;
  right: 20px;
  top: -8.5px;
  background-position: -860px -124px;
  height: 36px;
  width: 36px;
  background-image: url(//d35aaqx5ub95lt.cloudfront.net/images/icon-sprite5.svg);
  vertical-align: middle;
  display: inline-block;
`;

const Title = styled(Typography).attrs({
  variant: 'subheading',
  align: 'center',
})`
  margin-bottom: 10px;
`;

const Description = styled(Typography).attrs({
  variant: 'body1',
})`
  color: #999;
  margin-bottom: 18px;
`;

function getSkillStatus(props) {
  if (props.completed) {
    return 'redo';
  }
  if (props.locked) {
    return 'locked';
  }
  return 'start';
}

const SkillCard = props => (
  <GridListTile>
    <Card>
      {props.completed && <CompletedBadge />}
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Button
        variant="raised"
        color="primary"
        disabled={props.locked}
        component={Link}
        to={props.link}
      >
        {getSkillStatus(props)}
      </Button>
    </Card>
  </GridListTile>
);

SkillCard.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  locked: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};

export default SkillCard;
