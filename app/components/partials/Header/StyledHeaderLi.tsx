'use client';
import styled from 'styled-components';

const StyledHeaderLi = styled.li<{ selected?: boolean }>`
  list-style: none;
  white-space: nowrap;
  font-family: var(--font-share_tech_mono);
  font-size: 14px !important;
  a {
    color: ${({ selected = false }) => selected && 'var(--color-button-hover)'};
    font-weight: ${({ selected }) => selected && '700 !important'};
  }
  a:hover {
    color: var(--link-hover);
    cursor: pointer;
  }
`;

StyledHeaderLi.defaultProps = {
  selected: false,
};

export default StyledHeaderLi;
