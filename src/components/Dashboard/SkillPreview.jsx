import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {compose, setPropTypes, defaultProps} from 'recompose';
import styled, {css} from 'styled-components';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';

const progressPoly = {
  none: '',
  low: '30,25 30,15 5,25',
  medium: '40,25 40,10 5,25',
  high: '50,25 50,10 5,25',
  full: '65,25 65,5 5,25',
};

function getProgressPoly(progress) {
  if (progress === 0) {
    return progressPoly.none;
  }
  if (progress < 0.34) {
    return progressPoly.low;
  }
  if (progress < 0.67) {
    return progressPoly.medium;
  }
  if (progress < 1) {
    return progressPoly.high;
  }
  if (progress === 1) {
    return progressPoly.full;
  }
  return progressPoly.none;
}

export const colors = {
  blue: '#1caff6',
  red: '#dd381d',
  green: '#7eb530',
  gold: '#fbb430',
};

const Progress = styled.div`
  position: relative;
  right: -10px;
  display: block;
  margin-top: -13px;
  width: 65px;
`;

const Poly1 = styled.polygon.attrs({
  points: '65,25 65,5 5,25',
  strokeWidth: '0',
})`
  fill: #cfcfcf;
`;

const Poly2 = styled.polygon.attrs({
  points: props => getProgressPoly(props.progress),
  strokeWidth: '0',
})`
  fill: #ffb020;
`;

const Separator = styled.path.attrs({
  d: 'M -5, 25 L 65, 5',
  strokeLinecap: 'round',
  strokeWidth: '5',
})`
  stroke: #fff;
`;

const Image = styled.span`
  margin-top: 12px;
  display: inline-block;
  background-size: 550px;
  height: 55px;
  width: 55px;
  background-image: url(//d35aaqx5ub95lt.cloudfront.net/images/skill-icons-unlocked2.svg);
  background-position: -110px 0;
`;

const Label = styled(Typography).attrs({
  variant: 'subheading',
})`
  left: auto;
  right: auto;
  top: auto;
  margin-left: 0;
  margin-right: 0;
  padding-top: 0;
  position: relative;
  color: #777;
  display: block;
  font-size: 17px;
  line-height: 1.25em;
`;

const goldGradient =
  'linear-gradient(135deg,#fbb430,#fbb430 26%,#faa919 0,#faa919 39%,#fbb430 0,#fbb430 52%,#faa919 0,#faa919 57%,#fbb430 0,#fbb430 78%,#faa919 0,#faa919 90%,#fbb430 0,#fbb430)';

const Badge = styled.span`
  height: 80px;
  width: 80px;
  display: inline-block;
  border-radius: 98px;
  margin: 0 0 13px;

  &:hover: {
    opacity: 0.85;
  }

  ${props => props.progress === 1 && `background: ${goldGradient}`};

  background-color: ${props =>
    props.progress === 1 ? colors.gold : props.color};
`;

const Wrapper = styled.div`
  width: 144px;
  display: inline-block;
  min-width: 85px;
  position: relative;
  text-align: center;
  vertical-align: top;
  text-decoration: none;

  ${props =>
    props.locked &&
    css`
      filter: opacity(50%);
    `};
`;

const SkillPreview = ({color, label, progress, locked}) => (
  <Wrapper locked={locked}>
    <Badge color={color} progress={progress}>
      <Image />
      <Progress>
        <svg height="25" viewBox="0 0 65 25">
          <Poly1 />
          <Poly2 progress={progress} />
          <Separator />
        </svg>
      </Progress>
    </Badge>
    <Label>{label}</Label>
  </Wrapper>
);

SkillPreview.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  locked: PropTypes.bool,
  progress: PropTypes.number,
};

SkillPreview.defaultProps = {
  progress: 0,
  color: colors.blue,
  locked: false,
};

const WrappedSkillPreview = props => {
  if (props.locked) {
    return (
      <Tooltip
        id={props.to}
        title="Complete all skills above to unlock this"
        placement="bottom"
      >
        <SkillPreview {...props} />
      </Tooltip>
    );
  }

  return (
    <Link to={props.to} disabled={props.locked}>
      <SkillPreview {...props} />
    </Link>
  );
};

export default WrappedSkillPreview;
