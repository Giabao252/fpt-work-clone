/* eslint-disable react/prop-types */
import { TextField } from "@material-ui/core";

export const ExperienceForm = ({
  index,
  value,
  onChange,
  className,
}) => {
  return (
    <div>
      <TextField
        label="job title"
        name="job_title"
        value={value.job_title[index]}
        onChange={onChange}
        variant="filled"
        autoComplete="off"
        className={className}
      />
      <TextField
        label="employer"
        name="employer"
        value={value.employer[index]}
        onChange={onChange}
        variant="filled"
        autoComplete="off"
        className={className}
      />
      <TextField
        label="start date"
        name="start_date"
        value={value.start_date[index]}
        onChange={onChange}
        variant="filled"
        autoComplete="off"
        className={className} 
      />
      <TextField
        label="end date"
        name="end_date"
        value={value.end_date[index]}
        onChange={onChange}
        variant="filled"
        autoComplete="off"
        className={className}
      />

      <textarea
        name="description"
        value={value.description[index]}
        rows={17}
        cols={67}
        onChange={onChange}
        style={{
          margin: "20px", 
          backgroundColor: "white",
          borderRadius: "10px",
          color: "black",
          fontSize:"16px",
          lineHeight: "30px"
        }}
      />
    </div>
  );
};

export const ProjectsForm = ({ index, value, onChange, className }) => {
  return (
    <div>
      <TextField
        label="project title"
        name="title"
        value={value.title[index]}
        onChange={onChange}
        variant="filled"
        autoComplete="off"
        className={className}
      />
      <TextField
        label="project link"
        name="link"
        value={value.link[index]}
        onChange={onChange}
        variant="filled"
        autoComplete="off"
        className={className}
      />
      <textarea
        name="description"
        value={value.description[index]}
        rows={8}
        cols={67}
        onChange={onChange}
        style={{
          margin: "20px", 
          backgroundColor: "white",
          borderRadius: "10px",
          color: "black",
          fontSize:"16px",
          lineHeight: "30px"
        }}
      />
    </div>
  );
};

export const AchievementsForm = ({ index, value, onChange, className }) => {
  return (
    <div>
      <TextField
        label="award title"
        name="title"
        value={value.title[index]}
        onChange={onChange}
        variant="filled"
        autoComplete="off"
        className={className}
      />
      <textarea
        name="description"
        value={value.description[index]}
        rows={6}
        cols={67}
        onChange={onChange}
        style={{
          margin: "20px", 
          backgroundColor: "white",
          borderRadius: "10px",
          color: "black",
          fontSize:"16px",
          lineHeight: "30px"
        }}
      />
    </div>
  );
};

export const SkillsForm = ({ index, value, onChange, className }) => {
  return (
    <div>
      <TextField
        label="skill title"
        name="title"
        value={value.title[index]}
        onChange={onChange}
        variant="filled"
        autoComplete="off"
        className={className}
      />
      <TextField
        label="skills"
        name="skills"
        value={value.skills[index]}
        onChange={onChange}
        variant="filled"
        autoComplete="off"
        className={className}
      />
    </div>
  );
};
