import React from 'react';
import { Link } from 'atomic-router-react';
import { createRoute } from 'atomic-router';

const route = createRoute();
const backToHomeRoute = createRoute();

const Page = () => {
  return (
    <div>
      <h1>Not found</h1>
      <Link to={backToHomeRoute}>Back to home</Link>
    </div>
  );
};

export const NotFound = {
  route,
  backToHomeRoute,
  Page,
};
