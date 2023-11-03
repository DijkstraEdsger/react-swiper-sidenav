import React, { useEffect, useState } from "react";
import "./SideDrawer.scss";
import NavItems from "components/NavItems/NavItems";
import NavItem from "components/NavItems/NavItem/NavItem";
import BackArrow from "components/BackArrow/BackArrow";
import HeadItem from "./HeadItem/HeadItem";
import { ISideDrawerProps } from "Interfaces/SideDrawer";

const SideDrawer = ({
  navItems,
  positions,
  open,
  clickedLink,
  placement,
  zIndex,
  menuHead,
  variant = "temporary",
  style = {},
}: ISideDrawerProps) => {
  const [state, setState] = useState({
    positions: new Array<string>(),
    navItems: [],
  });

  useEffect(() => {
    if (navItems && positions && positions.length) {
      setState({
        navItems: [...navItems],
        positions: [...positions],
      });
    }
  }, [navItems, positions]);

  const slideForwardHandler = (parent: number, child: number) => {
    const m = [...state.positions];
    m[parent] = "-100%";
    m[child] = "0";
    setState((prevState) => ({
      ...prevState,
      positions: m,
    }));
  };

  const slideBackward = (parent: number, current: number) => {
    const m = [...state.positions];
    m[parent] = "0";
    m[current] = "100%";
    setState((prevState) => ({
      ...prevState,
      positions: m,
    }));
  };

  const preProcessedNavItems = state.navItems.map((itemsGroup: any, index) => {
    if (state.positions && state.positions.length > 0) {
      return (
        <NavItems
          posX={state.positions[itemsGroup.posXIndex]}
          key={index}
          // styles={itemsGroup.styleChildrenContainer}
          className={itemsGroup.classes?.container}
        >
          {itemsGroup.current ? (
            <BackArrow
              onClick={() =>
                slideBackward(itemsGroup.parent, itemsGroup.current)
              }
              // style={itemsGroup.styleBackArrow}
              className={itemsGroup.classes?.back}
            >
              {itemsGroup.parentName}
            </BackArrow>
          ) : null}
          {index !== 0 ? (
            <HeadItem className={itemsGroup.classes?.head}>
              {itemsGroup.headName}
            </HeadItem>
          ) : null}
          {itemsGroup.navItemsChildren.map((navItem: any, i: number) => {
            return (
              <NavItem
                key={i + index}
                child={navItem.child}
                // parent={index}
                // clicked={(parent, child) => slideForwardHandler(parent, child)}
                clicked={() => slideForwardHandler(index, navItem.child)}
                // link={navItem.link}
                clickedLink={clickedLink}
                hasRenderItem={!!navItem.renderItem}
                itemProps={navItem.itemProps}
                disableClose={navItem.disableClose}
                // icon={navItem.icon}
                // style={navItem.style}
                // className={`${itemsGroup.classes?.button || ""} ${
                //   navItem.className || ""
                // }`}
                className={navItem.className}
                itemsClassName={itemsGroup.classes?.items}
                // styleRightArrow={navItem.styleRightArrow}
              >
                {/* {navItem.name} */}
                {navItem.renderItem || navItem.name}
              </NavItem>
            );
          })}
        </NavItems>
      );
    }

    return null;
  });

  let classesSideDrawer = ["SideDrawer", "SideDrawerLeft", "CloseLeft"];

  if (placement === "right") {
    classesSideDrawer = ["SideDrawer", "SideDrawerRight", "CloseRight"];
  }

  if (open) {
    classesSideDrawer = ["SideDrawer", "SideDrawerLeft", "Open"];

    if (placement === "right") {
      classesSideDrawer = ["SideDrawer", "SideDrawerRight", "Open"];
    }
  }

  return (
    <div
      className={classesSideDrawer.join(" ")}
      style={{
        zIndex: zIndex ? zIndex : 500,
        // width: "inherit",
        ...style,
        position: variant === "permanent" ? "inherit" : "fixed",
      }}
    >
      {menuHead ? menuHead : null}
      {preProcessedNavItems}
    </div>
  );
};

export default SideDrawer;
