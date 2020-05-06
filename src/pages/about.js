import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default () => (
  <Layout>
    <HeaderWrapper>
      <h1>About</h1>
    </HeaderWrapper>
    <p>
      This is an about page!
    </p>
  </Layout>
);
