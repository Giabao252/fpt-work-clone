import { useLocation } from "react-router-dom";
import { ResumeDisplay } from "../export";
import { useStyles } from "./styles";
import { exportToPDF } from "../../utils/PDFUtils";
import { Button, createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
    typography: {
      fontFamily: "'Times New Roman', sans-serif",
    },
  });

const ResumePage = () => {
    const classes = useStyles();
    const location = useLocation();
    const { user } = location.state;

    const handleExport = () => {
        exportToPDF();
    }

    return (
        <div className={classes.resume_wrapper}>
            <ThemeProvider theme={theme}>
                <div id="resume" className={classes.resume_paper}>
                    <ResumeDisplay user={user} />
                </div>
            </ThemeProvider>
            <Button size="large" className={classes.btn} onClick={handleExport}>View Resume</Button>
        </div>
    );
};

export default ResumePage;
