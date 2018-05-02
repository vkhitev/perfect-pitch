import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {compose, setPropTypes, defaultProps} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

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

const completedBackground =
  'linear-gradient(135deg,#fbb430,#fbb430 26%,#faa919 0,#faa919 39%,#fbb430 0,#fbb430 52%,#faa919 0,#faa919 57%,#fbb430 0,#fbb430 78%,#faa919 0,#faa919 90%,#fbb430 0,#fbb430)';

const SkillPreview = compose(
  setPropTypes({
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    progress: PropTypes.number,
  }),
  defaultProps({
    progress: 0,
    color: colors.blue,
  }),
  withStyles({
    wrapper: {
      width: 144,
      display: 'inline-block',
      minWidth: 85,
      position: 'relative',
      textAlign: 'center',
      verticalAlign: 'top',
      textDecoration: 'none',
    },
    badge: {
      height: 80,
      width: 80,
      display: 'inline-block',
      borderRadius: 98,
      margin: '0 0 13px',
      '&:hover': {
        opacity: 0.85,
      },
    },
    label: {
      left: 'auto',
      right: 'auto',
      top: 'auto',
      marginLeft: 0,
      marginRight: 0,
      paddingTop: 0,
      position: 'relative',
      color: '#777',
      display: 'block',
      fontSize: 17,
      lineHeight: '1.25em',
    },
    img: {
      marginTop: 12,
      display: 'inline-block',
      backgroundSize: 550,
      height: 55,
      width: 55,
      backgroundImage: `url(//d35aaqx5ub95lt.cloudfront.net/images/skill-icons-unlocked2.svg)`,
      backgroundPosition: '-110px 0',
    },
    progress: {
      position: 'relative',
      right: -10,
      display: 'block',
      marginTop: -13,
      width: 65,
    },
    poly1: {
      fill: '#cfcfcf',
    },
    poly2: {
      fill: '#ffb020',
    },
    path: {
      stroke: '#fff',
    },
  }),
)(({color, label, to, progress, classes}) => (
  <Link to={to} className={classes.wrapper}>
    <span
      className={classes.badge}
      style={{
        background: progress === 1 ? completedBackground : null,
        backgroundColor: progress === 1 ? colors.gold : color,
      }}
    >
      <span className={classes.img} />
      <div className={classes.progress}>
        <svg height="25" viewBox="0 0 65 25">
          <polygon
            className={classes.poly1}
            points="65,25 65,5 5,25 "
            strokeWidth="0"
          />
          <polygon
            className={classes.poly2}
            points={getProgressPoly(progress)}
            strokeWidth="0"
          />
          <path
            className={classes.path}
            d="M -5, 25 L 65, 5 "
            strokeLinecap="round"
            strokeWidth="5"
          />
        </svg>
      </div>
    </span>
    <Typography variant="subheading" className={classes.label}>
      {label}
    </Typography>
  </Link>
));

export default SkillPreview;
