import { FC, HTMLProps, forwardRef } from 'react';
import { LinkProps, RouteComponentProps } from 'react-router-dom';

import { TechnologiesContainer, TechnologiesList, Technology } from './Technologies.styles';

const Technologies: FC<RouteComponentProps> = ({ match: { path } }) => {
  return (
    <TechnologiesContainer>
      <TechnologiesList>
        <Technology
          {...{
            to: `${path}/js/`,
            bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
          }}
        />
        <Technology
          {...{
            to: `${path}/css/`,
            bg: 'https://itproger.com/img/courses/1476977488.jpg',
          }}
        />
        <Technology
          {...{
            to: `${path}/html/`,
            bg: 'https://itproger.com/img/courses/1476977240.jpg',
          }}
        />
        <Technology
          {...{
            to: `${path}/db/`,
            bg: 'https://e7.pngegg.com/pngimages/303/303/png-clipart-remote-backup-service-computer-servers-technical-support-web-hosting-service-database-miscellaneous-service.png',
          }}
        />
        <Technology
          {...{
            to: `${path}/vsc/`,
            bg: 'https://miro.medium.com/max/1160/1*8wUtrLQqzxfqkVI9RReqnw.png',
          }}
        />
      </TechnologiesList>
    </TechnologiesContainer>
  );
};

export default Technologies;
