/* eslint-disable react/prop-types */
import { Typography, CardContent, Divider, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

const ResumeDisplay = ({ user }) => {
  const classes = useStyles();
  return (
    <CardContent>
      <Typography align="center" variant="h5" className={classes.name}>
        {user.name}
      </Typography>
      <Typography align="center" variant="subtitle2" className={classes.role}>
        {user.profession}
      </Typography>
      <Typography variant="subtitle1" align="center" className={classes.body}>
        {user.residency} | {user.phone} | {user.email}
      </Typography>
      <Typography
        align="left"
        variant="body1"
        className={classes.section_title}
      >
        EDUCATION
      </Typography>
      <Divider />
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography
            align="left"
            variant="body2"
            className={classes.field_title}
          >
            {user.school.toUpperCase()}
          </Typography>
        </Grid>
        <Grid>
          <Typography align="right" variant="body2" className={classes.body}>
            Graduation: {user.graduation_date}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography align="left" variant="body2" className={classes.body}>
            Degree: {user.degree}
          </Typography>
        </Grid>
        <Grid>
          <Typography align="right" variant="body2" className={classes.body}>
            GPA: {user.gpa}
          </Typography>
        </Grid>
      </Grid>
      <Typography align="left" variant="body2" className={classes.body}>
        Relevant Coursework: {user.relevant_coursework}
      </Typography>
      <br></br>

      <Typography
        align="left"
        variant="body1"
        className={classes.section_title}
      >
        EXPERIENCE
      </Typography>
      <Divider />
      {user.experiences.job_title.map((_, index) => (
        <div key={index}>
          <Typography
            align="left"
            variant="body2"
            className={classes.field_title}
          >
            {user.experiences.employer[index].toUpperCase()}
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography
                align="left"
                variant="body2"
                className={classes.job_title}
              >
                {user.experiences.job_title[index]}
              </Typography>
            </Grid>
            <Grid>
              <Typography
                align="right"
                variant="body2"
                className={classes.body}
              >
                {user.experiences.start_date[index]} -{" "}
                {user.experiences.end_date[index]}
              </Typography>
            </Grid>
          </Grid>
          {user.experiences.description[index]
            .split("\n")
            .map((_, small_index) => (
              <Typography
                key={small_index}
                align="left"
                variant="body2"
                className={classes.body}
              >
                - {user.experiences.description[index].split("\n")[small_index]}
              </Typography>
            ))}
        </div>
      ))}
      <br></br>

      {user.projects.title.length >= 1 ? (
        <div>
          <Typography
            align="left"
            variant="body1"
            className={classes.section_title}
          >
            PROJECTS
          </Typography>
          <Divider />
          {user.projects.title.map((_, index) => (
            <div key={index}>
              <Typography
                align="left"
                variant="body2"
                className={classes.field_title}
              >
                {user.projects.title[index].toUpperCase()}
              </Typography>
              <Typography align="left" variant="body2" className={classes.body}>
                {user.projects.link[index]}
              </Typography>
              {user.projects.description[index]
                .split("\n")
                .map((_, small_index) => (
                  <Typography
                    key={small_index}
                    align="left"
                    variant="body2"
                    className={classes.body}
                  >
                    -{" "}
                    {user.projects.description[index].split("\n")[small_index]}
                  </Typography>
                ))}
            </div>
          ))}
        </div>
      ) : null}

      <br></br>

      {user.achievements.title.length >= 1 ? (
        <div>
          <Typography
            align="left"
            variant="body1"
            className={classes.section_title}
          >
            ACHIEVEMENTS
          </Typography>
          <Divider />
          {user.achievements.title.map((_, index) => (
            <div key={index}>
              <Typography
                align="left"
                variant="body2"
                className={classes.field_title}
              >
                {user.achievements.title[index]}
              </Typography>
              {user.achievements.description[index]
                .split("\n")
                .map((_, small_index) => (
                  <Typography
                    key={small_index}
                    align="left"
                    variant="body2"
                    className={classes.body}
                  >
                    -{" "}
                    {
                      user.achievements.description[index].split("\n")[
                        small_index
                      ]
                    }
                  </Typography>
                ))}
            </div>
          ))}
        </div>
      ) : null}
      <br></br>

      <Typography
        align="left"
        variant="body1"
        className={classes.section_title}
      >
        SKILLS
      </Typography>
      <Divider />
      {user.skills.title.map((_, index) => (
        <div key={index}>
          <Typography align="left" variant="body2" className={classes.body}>
            {user.skills.title[index]}: {user.skills.skills[index]}
          </Typography>
        </div>
      ))}
    </CardContent>
  );
};

export default ResumeDisplay;
