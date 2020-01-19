import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 420px) {
    flex-flow: column;
  }
`;

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
      }

      html {
        background: #e5e9f0;
      }

      * {
        font-size: 18px;
        box-sizing: border-box;
      }
    `}
  />
);

export { Flex, GlobalStyles };
