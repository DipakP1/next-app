"use client";

import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";
import PageviewIcon from '@mui/icons-material/Pageview';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { uniqueId } from "lodash";
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

const Menuitems =[
// auth.user.role==="Employee"?[

// ]:

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/home",
    present:"yes"

  },
  {
    id: uniqueId(),
    title: "Reports",
    icon: IconLayoutDashboard,
    href: "/reports",
    present:"yes"

  },
  {
    navlabel: true,
    subheader: "Authentication",
    present:"yes"
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLayoutDashboard,
    href: "/",
    present:"yes"

  },
  

]

export default Menuitems;
