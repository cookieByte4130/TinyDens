import React, { FC } from 'react';
import { Project } from './project';
import { projects } from '../../pages/api/projects';

const Container: FC = () => (
  <div className='projects-container'>
    <h1>Projects</h1>
    {
      projects.map(p => (
        <Project key={p.name} project={p} />
      ))
    }
  </div>
);

export default Container;
