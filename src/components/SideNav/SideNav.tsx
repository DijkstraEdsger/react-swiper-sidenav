import React, { useEffect, useState } from "react";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import { ISideNavProps } from "Interfaces/SideNav";

type PreProcessedNavItems = {
  positions: string[];
  navItems: any;
  preProcessedNavItems: any[];
};

const SideNav = ({
  navItems,
  onClose,
  open,
  zIndex,
  children,
  placement,
  hideBackdrop = false,
  variant = "temporary",
  style = {},
}: ISideNavProps) => {
  let positions: string[] = [];

  const [state, setState] = useState<PreProcessedNavItems>({
    positions: [],
    navItems: {},
    preProcessedNavItems: [],
  });

  useEffect(() => {
    if (navItems) {
      positions = new Array<string>();
      const preProcessedNavItems: any[] = [];
      preProcessNavItems(preProcessedNavItems);

      setState({
        navItems: navItems,
        positions: positions,
        preProcessedNavItems: [...preProcessedNavItems],
      });
    }
  }, [navItems]);

  const preProcessNavItems = (tree: any) => {
    dfs(navItems, 0, tree, -1, "");
  };

  const dfs = (
    navItem: any,
    currentNavItemsIndex: number,
    tree: any,
    parent: number,
    parentName: string
  ) => {
    if (navItem.childrenItems) {
      const navItemsChildren: any[] = [];
      tree.push(currentNavItemsIndex);
      positions.push(currentNavItemsIndex === 0 ? "0" : "100%");

      navItem.childrenItems.forEach((navItemChild: any) => {
        let child = -1;
        if (navItemChild.childrenItems) {
          child = tree.length;
        }
        navItemsChildren.push({
          child: child,
          parent: currentNavItemsIndex,
          name: navItemChild.name,
          renderItem: navItemChild.renderItem,
          disableClose: navItemChild.disableClose,
          // link: !navItemChild.navItemsChildren ? navItemChild.link : null,
          // className: !navItemChild.navItemsChildren
          //   ? navItemChild.className
          //   : "",
          className: navItemChild.className || "",
          // icon: navItemChild.icon,
          itemProps: navItemChild.itemProps,
          // style: navItemChild.style,
          // className
          // styleRightArrow: navItemChild.styleRightArrow
        });
        dfs(
          navItemChild,
          tree.length,
          tree,
          currentNavItemsIndex,
          navItem.name
        );
      });

      tree[currentNavItemsIndex] = {
        parent: parent,
        current: currentNavItemsIndex,
        parentName: parentName,
        headName: navItem.name,
        posXIndex: currentNavItemsIndex,
        navItemsChildren: navItemsChildren,
        // styleChildrenContainer: navItem.styleChildrenContainer,
        // styleBackArrow: navItem.styleBackArrow,
        // styleHeadItem: navItem.styleHeadItem,
        classes: navItem.classes,
      };
    }
  };

  return (
    <div
      style={{
        // ...style,
        display: variant === "permanent" ? "block" : "fixed",
      }}
    >
      {!hideBackdrop && variant !== "permanent" && (
        <Backdrop clicked={onClose} show={open} zIndex={zIndex} />
      )}
      <SideDrawer
        open={open || variant === "permanent"}
        navItems={state.preProcessedNavItems as never[]}
        positions={state.positions}
        clickedLink={variant === "temporary" ? onClose : undefined}
        menuHead={children}
        placement={placement}
        zIndex={zIndex}
        variant={variant}
        style={style}
      />
    </div>
  );
};

export default SideNav;
