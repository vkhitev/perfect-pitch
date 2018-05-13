import styled, {css} from 'styled-components';

const SkillRow = styled.div`
  text-align: center;
  margin-bottom: 40px;
  position: relative;

  ${props =>
    props.locked &&
    css`
      &::after {
        content: url(https://upload.wikimedia.org/wikipedia/commons/8/8c/Lock_font_awesome.svg);
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        filter: opacity(50%);
      }
    `};
`;

export default SkillRow;
