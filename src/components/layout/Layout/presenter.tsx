import CameraIcon from "@mui/icons-material/Camera";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { Layout } from ".";

type Props = {
  mobileOpen: boolean;
  drawerWidth: number;
  drawerContainer: (() => HTMLElement) | undefined;
  handleDrawerToggle: () => void;
} & Pick<ComponentProps<typeof Layout>, "children">;

export const LayoutPresenter: React.FC<Props> = ({
  children,
  mobileOpen,
  drawerWidth,
  drawerContainer,
  handleDrawerToggle,
}) => {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List component={Link} to="/">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List component={Link} to="/camera">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText primary="Camera" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Tauri Camera App
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={drawerContainer}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <article>{children}</article>
      </Box>
    </Box>
  );
};
