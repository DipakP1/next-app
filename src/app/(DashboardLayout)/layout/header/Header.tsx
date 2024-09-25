"use client";

import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Badge,
  Button,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

// components
import Profile from "./Profile";
import { IconBellRinging, IconMenu } from "@tabler/icons-react";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    borderBottom: "2px solid #f5f5f5",
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    height: "60px",
    top: -3,
  }));

  return (
    <AppBarStyled position="fixed" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <Box sx={{ paddingRight: "10px" }}>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "18px",
                cursor: "pointer",
                letterSpacing: "-0.8px",
                fontFamily: "Nunito, sans-serif",
              }}
            >
            </Typography>

            <Typography
              sx={{
                color: "#000",
                fontWeight: "700",
                fontSize: "16px",
                cursor: "pointer",
                letterSpacing: "-0.8px",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              LOGO
            </Typography>
          </Box>
        </Box>

        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
        ></IconButton>
        <Box flexGrow={1} sx={{ textAlign: "center" }} alignItems="center">
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "20px",
              cursor: "pointer",
              letterSpacing: "-0.8px",
              fontFamily: "Nunito, sans-serif",
            }}
          >
          </Typography>
        </Box>
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
