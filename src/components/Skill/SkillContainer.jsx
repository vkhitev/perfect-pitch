import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridList from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const Wrapper = styled.div`
  padding-top: 20px;
`;

const Container = styled(GridList).attrs({
  cols: 3,
  spacing: 0,
  cellHeight: 'auto',
})`
  padding: 20px 30px 40px 30px;
`;

const Title = styled(Typography).attrs({
  variant: 'title',
  gutterBottom: true,
})`
  color: #666;
  margin-left: 40px;
`;

const SkillContainer = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    <Container>{props.children}</Container>
    <Divider />
  </Wrapper>
);

SkillContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};

SkillContainer.defaultProps = {
  children: [],
};

export default SkillContainer;
