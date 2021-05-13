import Technologies from '../../components/technologies/Technologies.component';

import { Route } from 'react-router-dom';
import Technology from '../../components/technology/Technology.component';
import { TechnologiesPageContainer } from './TechnologiesPage.styles';

const TechnologiesPage = () => {
  console.log('render TechnologiesPage')
  return (
    <div>
      <Route exact path={`/technologies`} component={Technologies} />
      <Route path={`/technologies/:technology`} component={Technology} />
    </div>
  );
};

export default TechnologiesPage;
