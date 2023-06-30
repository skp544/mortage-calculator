import { AppBar, Toolbar, Typography, Container } from "@mui/material";
const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">Bank of SKP</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
