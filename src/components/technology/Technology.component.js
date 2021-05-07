import React, { useEffect, useState } from 'react';

import {
  TechnologyCard,
  TechnologyShow,
  TechnologyInfo,
  GradientActive,
  GradientPrev,
  TechnologyName,
  TechnologyLogo,
  TechnologyDescription,
  TechnologyTypes,
} from './Technology.styles';

const Technology = ({
  match: {
    params: { technology },
  },
}) => {
  const config = {
    js: [
      {
        name: 'React',
        color: '#1289a5',
        info: 'A JavaScript library for building user interfaces',
        fullName: 'ReactJS',
        publishDate: 'May 29, 2013',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
      },
      {
        name: 'Angular',
        color: 'linear-gradient(90deg, #dd0031 0%, #cc3838 50%)',
        info: "The modern web developer's platform",
        fullName: 'AngularJS',
        publishDate: 'Sep 14,  2016',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      },
      {
        name: 'Vue',
        color: '#81ac79',
        info: 'The Progressive JavaScript Framework',
        fullName: 'Vue.js',
        publishDate: 'February 2014',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
      },
    ],
    css: [
      {
        name: 'Less',
        color: '#61dafb',
        info: 'A JavaScript library for building user interfaces',
        fullName: 'ReactJS',
        publishDate: 'May 29, 2013',
      },
      {
        name: 'Sass',
        color: 'linear-gradient(90deg, #dd0031 0%, #cc3838 50%)',
        info: "The modern web developer's platform",
        fullName: 'AngularJS',
        publishDate: 'Sep 14,  2016',
      },
      {
        name: 'PostCSS',
        color: '#42b983',
        info: 'The Progressive JavaScript Framework',
        fullName: 'Vue.js',
        publishDate: 'February 2014',
      },
    ],
    html: [
      {
        name: 'Pug',
        color: '#61dafb',
        info: 'A JavaScript library for building user interfaces',
        fullName: 'ReactJS',
        publishDate: 'May 29, 2013',
      },
      {
        name: 'HandleBars',
        color: 'linear-gradient(90deg, #dd0031 0%, #cc3838 50%)',
        info: "The modern web developer's platform",
        fullName: 'AngularJS',
        publishDate: 'Sep 14,  2016',
      },
      {
        name: 'Smarty',
        color: '#42b983',
        info: 'The Progressive JavaScript Framework',
        fullName: 'Vue.js',
        publishDate: 'February 2014',
      },
    ],
    db: [
      {
        name: 'Postgres',
        color: '#61dafb',
        info: 'A JavaScript library for building user interfaces',
        fullName: 'ReactJS',
        publishDate: 'May 29, 2013',
      },
      {
        name: 'MySQL',
        color: 'linear-gradient(90deg, #dd0031 0%, #cc3838 50%)',
        info: "The modern web developer's platform",
        fullName: 'AngularJS',
        publishDate: 'Sep 14,  2016',
      },
      {
        name: 'MongoDB',
        color: '#42b983',
        info: 'The Progressive JavaScript Framework',
        fullName: 'Vue.js',
        publishDate: 'February 2014',
      },
    ],
    vsc: [
      {
        name: 'Git',
        color: '#61dafb',
        info: 'A JavaScript library for building user interfaces',
        fullName: 'ReactJS',
        publishDate: 'May 29, 2013',
      },
      {
        name: 'Mercury',
        color: 'linear-gradient(90deg, #dd0031 0%, #cc3838 50%)',
        info: "The modern web developer's platform",
        fullName: 'AngularJS',
        publishDate: 'Sep 14,  2016',
      },
      {
        name: 'SubVersion',
        color: '#42b983',
        info: 'The Progressive JavaScript Framework',
        fullName: 'Vue.js',
        publishDate: 'February 2014',
      },
    ],
  };

  const technologyArray = config[technology];

  const [configState, setConfigState] = useState({
    ...technologyArray[0],
    prevColor: technologyArray[0].color,
    toggle: false,
  });

  const setAll = (index) => {
    setConfigState({
      name: technologyArray[index].name,
      color: technologyArray[index].color,
      info: technologyArray[index].info,
      fullName: technologyArray[index].fullName,
      publishDate: technologyArray[index].publishDate,
      logo: technologyArray[index].logo,
      prevColor: configState.color,
      toggle: !configState.toggle,
    });
  };

  return (
    <div>
      <TechnologyCard>
        <TechnologyShow>
          <h1>{configState.name}</h1>
          <GradientPrev bgColor={configState.prevColor}></GradientPrev>
          <GradientActive bgColor={configState.color} toggle={configState.toggle}></GradientActive>

          <TechnologyLogo src={configState.logo}></TechnologyLogo>
        </TechnologyShow>
        <TechnologyInfo>
          <TechnologyName>
            <h1>{configState.name}</h1>
            <h3>{configState.publishDate}</h3>
          </TechnologyName>
          <TechnologyDescription>
            <h3 className='title'>{configState.fullName}</h3>
            <p className='text'>{configState.info}</p>
          </TechnologyDescription>
          <TechnologyTypes>
            <h3>Frameworks</h3>

            <div className='types'>
              {technologyArray &&
                technologyArray.map((tech, index) => {
                  return (
                    <span
                      className='type'
                      style={{ background: tech.color }}
                      key={tech.name}
                      onClick={() => {
                        setAll(index);
                      }}>
                      {tech.name}
                    </span>
                  );
                })}
            </div>
          </TechnologyTypes>
        </TechnologyInfo>
      </TechnologyCard>
    </div>
  );
};

export default Technology;
