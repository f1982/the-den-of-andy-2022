const Project = ({slug, title, description}) => {
  return (
    <div>
      <h3>title{title}</h3>
      <p>{slug}</p>
      <p>details{description}</p>
    </div>
  )
}

export default Project;