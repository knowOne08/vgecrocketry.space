import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider } from "@mui/material/styles";
import { Copyright } from "../components/Copyright";
import { theme } from "../theme";
import { colors, fonts } from "../tokens";
import { Navbar } from "../components/Navbar";

export const LoginPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      remember: data.get("remember"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: colors.bg.page, minHeight: "100vh" }}>
        <Navbar />
        <Container component="main" maxWidth="xs" sx={{ pt: 14, pb: 8 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 4,
              bgcolor: colors.bg.card,
              border: `1px solid ${colors.border.subtle}`,
              borderRadius: 1,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: colors.accent.main }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              variant="h4"
              sx={{ color: colors.text.primary, fontFamily: fonts.display, mb: 3 }}
            >
              Sign In
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: "100%" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" sx={{ color: colors.text.secondary }} />}
                label={<Typography variant="body2">Remember me</Typography>}
              />
              <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: colors.text.secondary }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" sx={{ color: colors.text.secondary }}>
                    Sign up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 4, color: colors.text.muted, textAlign: "center" }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};
