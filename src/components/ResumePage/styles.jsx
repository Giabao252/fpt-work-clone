import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    resume_wrapper: {
        backgroundColor: "black",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh"
    },
    resume_paper: {
        backgroundColor: "white",
        maxHeight: "100vh",
        borderRadius: "6px",
        width: '600px',
    },
    btn: {
        marginLeft: '4%',
        fontWeight: "bold",
        fontSize: "14px",
        backgroundColor: "rgba(255, 196, 0, 0.976)",
        "&:hover": {
            backgroundColor: "white",
        },
    }
}));
