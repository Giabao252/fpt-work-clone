import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    card_wrapper: {
        textAlign: "center",
        justifyContent: "center",
        width: '200px',
        height: '290px',
        backgroundColor: "rgba(255, 196, 0, 0.976)"
    },
    profile_img: {
        borderRadius: '50%',
        alignSelf: "center",
        justifySelf: "center"
    },
    name: {
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: "black",
        fontWeight: "bold",
        color: "white",
        "&:hover": {
            backgroundColor: "#1E90FF",
            color: "white"
        }
    }
}))