import React, { FC } from 'react';

const Container: FC = () => (
  <div>
    <h1>New Project</h1>
    <form className='new-project-container'>
      <div>
        <label>Project Name: </label>
        <input type='text'></input>
      </div>
      <button>Create Project</button>
    </form>
  </div>
);

export default Container;
