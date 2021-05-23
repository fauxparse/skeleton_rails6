// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { gql, useQuery } from '@apollo/client';
import GraphQLProvider from '../graphql/Provider';

const QUERY = gql`
  {
    testField
  }
`;

const Hello: React.FC = () => {
  const { loading, data } = useQuery(QUERY);

  if (loading) {
    return <div>Loading…</div>;
  }
  return <div>{data.testField}</div>;
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GraphQLProvider>
      <Hello />
    </GraphQLProvider>,
    document.body.appendChild(document.createElement('div'))
  );
});
