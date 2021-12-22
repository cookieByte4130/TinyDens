import React from "react"

export type Props = {
  project: any;
}

export const Project = ({project}: Props) => {

  return (
    <div className='project-container'>
      <h3 className='project-name'>{project.name}</h3>
      <img src={project.img_url} alt={project.name} />
      <p>Hours</p>
      <p>Materials</p>
      <div>edit</div>
    </div>
  )
};