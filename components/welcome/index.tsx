import React, { FC } from 'react';
import Link from 'next/link';

const Container: FC = () => (
  <div className='welcome-container'>
    <h1>Welcome</h1>
    <ul>
      <li>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href='/new-project'>
          <a>New Project</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Container;
