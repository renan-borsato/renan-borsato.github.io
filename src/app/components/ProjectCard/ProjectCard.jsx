import "./ProjectCard.css";
import PropTypes from "prop-types";
import Image from "next/image";

const ProjectCard = ({ logo, name, content, link }) => {
  return (
    <div data-testid="projectCard" className="project-card">
      <div>
        <Image
          data-testid="projectCardLogo"
          src={logo}
          alt={`${name} Logo`}
          width={64}
          height={64}
          className="project-card-logo"
        />
        <h2 data-testid="projectCardName">{name}</h2>
      </div>
      <div>
        <p data-testid="projectCardContent">{content}</p>
        <a
          data-testid="projectCardLink"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/link.svg" alt="" width={16} height={16} /> View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: "#",
};

export default ProjectCard;
