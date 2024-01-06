import { useState } from "react";
import {
  Grid,
  Typography,
  CssBaseline,
  Paper,
  Button,
  TextField,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import {
  ExperienceForm,
  ProjectsForm,
  AchievementsForm,
  SkillsForm,
} from "./InputFields";
import { ResumeDisplay } from "../export";
import { exportToPDF } from "../../utils/PDFUtils";

const theme = createTheme({
  typography: {
    fontFamily: "'Times New Roman', sans-serif",
  },
});

const ProfileEdit = () => {
  const classes = useStyles();
  const { user, userId } = useAuth();

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    profile_pic: user.profile_pic,
    profession: user?.profession || "",
    phone: user?.phone || "",
    residency: user?.residency || "",
    school: user?.school || "",
    degree: user?.degree || "",
    gpa: user?.gpa || "",
    graduation_date: user?.graduation_date || "",
    relevant_coursework: user?.relevant_coursework || "",
    experiences: {
      job_title: user?.experiences?.job_title || [],
      employer: user?.experiences?.employer || [""],
      start_date: user?.experiences?.start_date || [],
      end_date: user?.experiences?.end_date || [],
      description: user?.experiences?.description || [""],
    },
    projects: {
      title: user?.projects?.title || [""],
      link: user?.projects?.link || [],
      description: user?.projects?.description || [""],
    },
    achievements: {
      title: user?.achievements?.title || [],
      description: user?.achievements?.description || [""],
    },
    skills: {
      title: user?.skills?.title || [],
      skills: user?.skills?.skills || [],
    }
  });

  //setting the counter states to the number of values existing in that section's storage unit
  const [experienceFormCount, setExperienceFormCount] = useState(
    Object.keys(formData.experiences.job_title).length >= 1
      ? Object.keys(formData.experiences.job_title).length
      : 0
  );
  const [projectsFormCount, setProjectsFormCount] = useState(
    Object.keys(formData.projects.title).length >= 1
      ? Object.keys(formData.projects.title).length
      : 0
  );
  const [achievementsFormCount, setAchievementsFormCount] = useState(
    Object.keys(formData.achievements.title).length >= 1
      ? Object.keys(formData.achievements.title).length
      : 0
  );
  const [skillsFormCount, setSkillsFormCount] = useState(
    Object.keys(formData.skills.title).length >= 1
      ? Object.keys(formData.skills.title).length
      : 0
  );

  const handleSubmit = () => {
    localStorage.setItem(userId, JSON.stringify(formData));

    console.log("Profile data updated successfully");
    //console.log(saved_data)
  };

  const handleBasicChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNestedValues = (e, field, index) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedValue = [...prev[field][name]];

      updatedValue[index] = value;

      return {
        ...prev,
        [field]: {
          ...prev[field],
          [name]: updatedValue,
        },
      };
    });
  };

  //add form to the chosen field and initialize new array element values "" to the field properties' value array
  const addForm = (field) => {
    if (field == formData.experiences) {
      setExperienceFormCount((prevCount) => prevCount + 1);
    } else if (field == formData.projects) {
      setProjectsFormCount((prevCount) => prevCount + 1);
    } else if (field == formData.achievements) {
      setAchievementsFormCount((prevCount) => prevCount + 1);
    } else if (field == formData.skills) {
      setSkillsFormCount((prevCount) => prevCount + 1);
    }
    Object.keys(field).forEach((properties) => {
      const new_array = field[properties];
      new_array.push("");
      console.log(new_array);
    });
  };

  //deletes the all the generated field's input data
  const removeForm = (field) => {
    if (field == formData.experiences) {
      setExperienceFormCount((prevCount) => prevCount - 1);
    } else if (field == formData.projects) {
      setProjectsFormCount((prevCount) => prevCount - 1);
    } else if (field == formData.achievements) {
      setAchievementsFormCount((prevCount) => prevCount - 1);
    } else if (field == formData.skills) {
      setSkillsFormCount((prevCount) => prevCount - 1);
    }
    Object.keys(field).forEach((properties) => {
      const new_array = field[properties];
      new_array.pop();
      console.log(new_array);
    });
  };

  const handleDownloadResume = async () => {
    exportToPDF();
  };

  return (
    <Grid container className={classes.form_wrapper}>
      <CssBaseline />
      <Grid item xs={false} sm={5} md={6} className={classes.form}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" fontWeight="bold" className={classes.title}>
            {" "}
            Personal Details{" "}
          </Typography>
          <TextField
            label="name"
            name="name"
            value={formData.name}
            onChange={handleBasicChange}
            variant="filled"
            autoComplete="off"
            className={classes.text_fields}
          />
          <TextField
            label="email"
            name="email"
            value={formData.email}
            onChange={handleBasicChange}
            variant="filled"
            autoComplete="off"
            className={classes.text_fields}
          />
          <TextField
            label="profession"
            name="profession"
            value={formData.profession}
            onChange={handleBasicChange}
            variant="filled"
            autoComplete="off"
            className={classes.text_fields}
          />
          <TextField
            label="phone"
            name="phone"
            value={formData.phone}
            onChange={handleBasicChange}
            variant="filled"
            autoComplete="off"
            className={classes.text_fields}
          />
          <TextField
            label="residency"
            name="residency"
            value={formData.residency}
            onChange={handleBasicChange}
            variant="filled"
            autoComplete="off"
            className={classes.text_fields}
          />
          <Typography variant="h5" fontWeight="bold" className={classes.title}>
            {" "}
            Education{" "}
          </Typography>
          <TextField
            label="school"
            name="school"
            value={formData.school}
            onChange={handleBasicChange}
            variant="filled"
            autoComplete="off"
            className={classes.text_fields}
          />
          <TextField
            label="degree"
            name="degree"
            value={formData.degree}
            onChange={handleBasicChange}
            variant="filled"
            autoComplete="off"
            className={classes.text_fields}
          />
          <TextField
            label="GPA"
            name="gpa"
            value={formData.gpa}
            onChange={handleBasicChange}
            variant="filled"
            autoComplete="off"
            className={classes.text_fields}
          />
          <TextField
            label="graduation date"
            name="graduation_date"
            value={formData.graduation_date}
            onChange={handleBasicChange}
            variant="filled"
            autoComplete="off"
            className={classes.text_fields}
          />
          <TextField
            label="relevant coursework"
            name="relevant_coursework"
            value={formData.relevant_coursework}
            onChange={handleBasicChange}
            variant="filled"
            autoComplete="off"
            className={classes.fullwidth_fields}
          />
          <Typography variant="h5" fontWeight="bold" className={classes.title}>
            {" "}
            Experience{" "}
          </Typography>

          {[...Array(experienceFormCount)].map((_, index) => (
            <div key={index}>
              <ExperienceForm
                index={index}
                value={formData.experiences}
                onChange={(e) => handleNestedValues(e, "experiences", index)}
                className={classes.text_fields}
              />
              <Button
                className={classes.btn}
                size="small"
                onClick={() => removeForm(formData.experiences)}
              >
                {" "}
                -{" "}
              </Button>
            </div>
          ))}
          <Button
            className={classes.btn}
            size="small"
            onClick={() => addForm(formData.experiences)}
          >
            {" "}
            +{" "}
          </Button>

          <Typography variant="h5" fontWeight="bold" className={classes.title}>
            {" "}
            Projects{" "}
          </Typography>
          {[...Array(projectsFormCount)].map((_, index) => (
            <div key={index}>
              <ProjectsForm
                index={index}
                value={formData.projects}
                onChange={(e) => handleNestedValues(e, "projects", index)}
                className={classes.text_fields}
              />
              <Button
                className={classes.btn}
                size="small"
                onClick={() => removeForm(formData.projects)}
              >
                {" "}
                -{" "}
              </Button>
            </div>
          ))}
          <Button
            className={classes.btn}
            size="small"
            onClick={() => addForm(formData.projects)}
          >
            {" "}
            +{" "}
          </Button>

          <Typography variant="h5" fontWeight="bold" className={classes.title}>
            {" "}
            Achievements{" "}
          </Typography>
          {[...Array(achievementsFormCount)].map((_, index) => (
            <div key={index}>
              <AchievementsForm
                index={index}
                value={formData.achievements}
                onChange={(e) => handleNestedValues(e, "achievements", index)}
                className={classes.text_fields}
              />
              <Button
                className={classes.btn}
                size="small"
                onClick={() => removeForm(formData.achievements)}
              >
                {" "}
                -{" "}
              </Button>
            </div>
          ))}
          <Button
            className={classes.btn}
            size="small"
            onClick={() => addForm(formData.achievements)}
          >
            {" "}
            +{" "}
          </Button>

          <Typography variant="h5" fontWeight="bold" className={classes.title}>
            {" "}
            Skills{" "}
          </Typography>
          {[...Array(skillsFormCount)].map((_, index) => (
            <div key={index}>
              <SkillsForm
                index={index}
                value={formData.skills}
                onChange={(e) => handleNestedValues(e, "skills", index)}
                className={classes.text_fields}
              />
              <Button
                className={classes.btn}
                size="small"
                onClick={() => removeForm(formData.skills)}
              >
                {" "}
                -{" "}
              </Button>
            </div>
          ))}
          <Button
            className={classes.btn}
            size="small"
            onClick={() => addForm(formData.skills)}
          >
            {" "}
            +{" "}
          </Button>
          <br />
          <Button className={classes.submit} size="large" type="submit">
            {" "}
            Save Profile Details{" "}
          </Button>
        </form>
      </Grid>
      <Grid
        item
        xs={12}
        sm={7}
        md={6}
        component={Paper}
        elevation={6}
        square
        className={classes.pdf_paper}
      >
        <ThemeProvider theme={theme}>
          <div
            id="resume"
            style={{
              backgroundColor: "white",
              maxHeight: "110vh",
              margin: "24px",
              marginTop: "24px",
              marginBottom: "20px",
              borderRadius: "6px",
            }}
          >
            <ResumeDisplay user={formData} />
          </div>
        </ThemeProvider>
        <Button
          className={classes.resume_download_btn}
          onClick={handleDownloadResume}
        >
          Download Resume
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfileEdit;
