import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
// import useLocalStorage from '../hooks/useLocalStorage';
import useStaticResources from '../hooks/useStaticResources';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default () => {
  // use this to retrieve data and rehydrate before globalState is used
  // useLocalStorage();
  useStaticResources();

  return (
    <Layout>
      <HeaderWrapper>
        <h1>Home</h1>
      </HeaderWrapper>
      <p>
        This is a homepage!
      </p>
    </Layout>
  );
};
