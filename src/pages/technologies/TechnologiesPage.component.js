import React from 'react';
import Technologies from '../../components/technologies/Technologies.component';

import { Route } from 'react-router-dom';
import Technology from '../../components/technology/Technology.component';

const TechnologiesPage = (props) => {
  const match = props;
  return (
    <div>
      <Route
          exact
          path={`/technologies`}
          component={Technologies}
        />
        <Route
          path={`/technologies/:technology`}
          component={Technology}
        />
    </div>
  );
}

export default TechnologiesPage;
