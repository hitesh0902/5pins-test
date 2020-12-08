import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Visibility from "@material-ui/icons/Visibility";
import GoogleIcon from "./GoogleIcon";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: -85,
    paddingRight: "2%",
    paddingLeft: "2%",
  },
  paper: {
    padding: "30px 0px",
  },
  title: {
    fontWeight: 500,
    fontSize: 20,
  },

  formControl: {
    width: "100%",
  },
  label: {
    fontSize: 13,
    fontWeight: 400,
  },
  input: {
    border: "1px solid #DDD",
    borderRadius: theme.spacing(1),
    marginTop: 5,
    padding: "8px 15px",
  },
  preInputIcon: {
    color: theme.palette.secondary.main,
    borderRight: "1px solid #DDD",
    paddingRight: 10,
    marginRight: 5,
  },
  button: {
    width: "100%",
    color: "white",
  },
  help: {
    textAlign: "center",
  },
  google: {
    margin: "0 auto",
  },
}));

export default function AuthBox() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Container
          maxWidth="xs"
          style={{ paddingLeft: "2%", paddingRight: "2%" }}
        >
          <Grid container spacing={3}>
            <Grid item container justify="center">
              <Typography variant="subtitle1" className={classes.title}>
                Sign In
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <label htmlFor="email" className={classes.label}>
                    EMAIL ADDRESS
                  </label>
                  <InputBase
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={classes.input}
                    startAdornment={
                      <InputAdornment position="start">
                        <div className={classes.preInputIcon}>
                          <EmailIcon />
                        </div>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <label htmlFor="password" className={classes.label}>
                    PASSWORD
                  </label>
                  <InputBase
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className={classes.input}
                    startAdornment={
                      <InputAdornment position="start">
                        <div className={classes.preInputIcon}>
                          <VpnKeyIcon />
                        </div>
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <Visibility />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item container justify="space-between" alignItems="center">
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="secondary">
                    Forgot Password?
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  SIGN IN
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.help} variant="body2">
                  Need Help?
                </Typography>
              </Grid>
              <Grid item container justify="center">
                <Link href="/auth/google">
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<GoogleIcon />}
                  >
                    Sign In With Google
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
