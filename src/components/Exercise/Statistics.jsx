import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
} from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import Wrapper from './Wrapper';

const Statistics = ({unit, summary, statistics, finish}) => (
  <Wrapper component={Paper} container>
    <Grid container direction="column" justify="space-between">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{unit}</TableCell>
            <TableCell numeric>Times Heard</TableCell>
            <TableCell numeric>Times Correct</TableCell>
            <TableCell numeric>Accuracy</TableCell>
            <TableCell>Most Confused With</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.text}</TableCell>
              <TableCell numeric>{row.timesHeard || ''}</TableCell>
              <TableCell numeric>
                {row.timesHeard > 0 ? row.timesCorrect : ''}
              </TableCell>
              <TableCell numeric>
                {row.accuracy != null
                  ? `${(row.accuracy * 100).toFixed()}%`
                  : ''}
              </TableCell>
              <TableCell>{row.mostConfused || ''}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell numeric>{summary.heard}</TableCell>
            <TableCell numeric>{summary.correct}</TableCell>
            <TableCell numeric>{(summary.accuracy * 100).toFixed()}%</TableCell>
            <TableCell />
          </TableRow>
        </TableFooter>
      </Table>
      <Grid item container justify="flex-end">
        <Button color="primary" onClick={finish}>
          Finish
        </Button>
      </Grid>
    </Grid>
  </Wrapper>
);

Statistics.propTypes = {
  unit: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      timesHeard: PropTypes.number,
      timesCorrect: PropTypes.number,
      accuracy: PropTypes.number,
      mostConfused: PropTypes.string,
    }),
  ).isRequired,
  summary: PropTypes.shape({
    heard: PropTypes.number.isRequired,
    correct: PropTypes.number.isRequired,
    accuracy: PropTypes.number.isRequired,
  }).isRequired,
  finish: PropTypes.func.isRequired,
};

export default Statistics;
