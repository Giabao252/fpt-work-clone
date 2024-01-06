import { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

// eslint-disable-next-line react/prop-types
const SearchProfiles = ({ setProfiles }) => {
    const classes = useStyles();
    const [searchInput, setSearchInput] = useState("");

    const handleInput = (e) => {
        setSearchInput(e.target.value.toLowerCase());
    }

    const getData = () => {
        return new Promise((resolve) => {
          const account_ids = [];
          for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === "id_token" || localStorage.key(i) === "access_token") {
              i++;
            } else {
              account_ids.push(localStorage.key(i));
            }
          }
          resolve(account_ids);
        });
      };

    const handleSearchInput = async () => {
        const userAccounts = await getData();

        const searchedAccounts = userAccounts.filter((item) => {
            const user = JSON.parse(localStorage.getItem(item));
    
            if (searchInput != "") {
                return (
                    user.name.toLowerCase().includes(searchInput) ||
                    user?.profession?.toLowerCase().includes(searchInput) ||
                    user?.school?.toLowerCase().includes(searchInput)
                );
            } else {
                return (
                    user
                )
            }
        });
        //console.log(searchedAccounts);
        setSearchInput("");
        setProfiles(searchedAccounts);
    }
    return (
        <div className={classes.search_wrapper}>
            <Typography variant="h5" align="center" className={classes.title}>Browse Other Profiles!</Typography>
            <TextField
            label="Search Profiles"
            onChange={handleInput}
            value={searchInput}
            variant="filled"
            autoComplete="off"
            className={classes.search_box}
            />
            <Button onClick={handleSearchInput} size="large" className={classes.submit}> Search</Button>
        </div>
    );
};

export default SearchProfiles;
