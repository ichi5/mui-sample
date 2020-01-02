import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

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
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Title />
                <Copyright />
            </Box>
        </Container>
    );
}
