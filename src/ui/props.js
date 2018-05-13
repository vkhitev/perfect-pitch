import {css} from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  return {
    ...accumulator,
    [label]: (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `,
  };
}, {});

const spacer = 1;
const spacers = {
  1: `${spacer * 0.25}rem`,
  2: `${spacer * 0.5}rem`,
  3: `${spacer * 1}rem`,
  4: `${spacer * 1.5}rem`,
  5: `${spacer * 3}rem`,
  auto: 'auto',
};

export const marginProps = props => css`
  ${props.mt && `margin-top: ${spacers[props.mt]}`};
  ${props.mb && `margin-bottom: ${spacers[props.mb]}`};
  ${props.ml && `margin-left: ${spacers[props.ml]}`};
  ${props.mr && `margin-right: ${spacers[props.mr]}`};
  ${props.mx &&
    `
    margin-left: ${spacers[props.mx]};
    margin-right: ${spacers[props.mx]};
  `};
  ${props.my &&
    `
    margin-top: ${spacers[props.my]};
    margin-bottom: ${spacers[props.my]};
  `};
  ${props.m && `margin: ${spacers[props.m]}`};
`;

export const paddingProps = props => css`
  ${props.pt && `padding-top: ${spacers[props.pt]}`};
  ${props.pb && `padding-bottom: ${spacers[props.pb]}`};
  ${props.pl && `padding-left: ${spacers[props.pl]}`};
  ${props.pr && `padding-right: ${spacers[props.pr]}`};
  ${props.px &&
    `
    padding-left: ${spacers[props.px]};
    padding-right: ${spacers[props.px]};
  `};
  ${props.py &&
    `
    padding-top: ${spacers[props.py]};
    padding-bottom: ${spacers[props.py]};
  `};
  ${props.p && `padding: ${spacers[props.p]}`};
`;

export const sizeProps = props => css`
  ${props.w && `width: ${props.w}`};
  ${props.h && `height: ${props.h}`};
  ${props.minw && `min-width: ${props.minw}`};
  ${props.maxw && `max-width: ${props.maxw}`};
  ${props.minh && `min-height: ${props.minh}`};
  ${props.maxh && `max-height: ${props.maxh}`};
`;

const borderColor = '#D4D4D4';

export const borderProps = props => css`
  ${props.border && `border: 1px solid ${borderColor}`};
  ${props.borderTop && `border-top: 1px solid ${borderColor}`};
  ${props.borderBottom && `border-bottom: 1px solid ${borderColor}`};
  ${props.borderLeft && `border-left: 1px solid ${borderColor}`};
  ${props.borderRight && `border-right: 1px solid ${borderColor}`};
`;
