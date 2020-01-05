import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ComboBox from "./ComboBox";

const useStyles = makeStyles({
    combobox: {
        width: '300px',
        margin: '10px auto',
    },
});

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/ichi5/mui-sample">
                GitHub ichi5 page
            </Link>
            {" "}{new Date().getFullYear()}{"."}
        </Typography>
    );
};

const Title = () => {
    return (
        <Typography variant="h4" component="h2" gutterBottom align="center">
            Material UI for Examples.
        </Typography>
    );
};

export default function App() {
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Title />
                <div className={classes.combobox}>
                    <ComboBox />
                </div>
                <Copyright />
            </Box>
        </Container>
    );
}
