import PropTypes from "prop-types";

export default function ProjectList({ projects }) {
  return (
    <div className="images">
      {projects.map((project, index) => (
        <img key={index} src={project.img} alt={project.category} />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};