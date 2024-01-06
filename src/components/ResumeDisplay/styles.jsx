import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    name: {
        fontWeight: "bold"
    },
    role: {
        fontWeight: "bold",
        fontSize: '82%'
    },
    body: {
        fontSize: '82%'
    },
    section_title: {
        fontSize: '86%'
    },
    field_title: {
        fontSize: "82%", 
        fontWeight: "bold"
    },
    job_title: {
        fontSize: "82%", 
        fontStyle: "italic"
    }
}))