import React from "react";
import "./NavItem.scss";
import { INavItemProps } from "Interfaces/NavItem";

const NavItem = ({
  child,
  clicked,
  clickedLink,
  children,
  className,
  itemProps,
  hasRenderItem = false,
  disableClose = false,
  itemsClassName = "",
}: INavItemProps) => {
  let item = (
    <div
      onClick={disableClose ? undefined : clickedLink}
      className="IconLinkContainer"
    >
      {hasRenderItem ? (
        children
      ) : (
        <a className={`LinkItem ${itemsClassName}`} {...itemProps}>
          {children}
        </a>
      )}
    </div>
  );

  if (child !== -1) {
    if (hasRenderItem) {
      item = (
        <div role="button" onClick={clicked} style={{ cursor: "pointer" }}>
          {children}
        </div>
      );
    } else {
      item = (
        <button
          {...itemProps}
          onClick={clicked}
          className={`SliceItem ${itemsClassName} ${className}`}
        >
          <div className="TextItem">{children}</div>
        </button>
      );
    }
  }

  return (
    <li className={`${child !== -1 ? "NavItemRightArrow" : "NavItem"}`}>
      {item}
    </li>
  );
};

export default NavItem;
