"use client";

import React, { useEffect, useState } from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
  const pathname = usePathname();
  const pathDirect = pathname;
  const [allData, setItems] = useState<any>([]);

  return (
    <Box sx={{ px: 3 }}>
      <List
        sx={{ pt: 0, fontFamily: "Nunito" }}
        className="sidebarNav"
        component="div"
      >
        {Menuitems.map((item: any) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                onClick={toggleMobileSidebar}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
