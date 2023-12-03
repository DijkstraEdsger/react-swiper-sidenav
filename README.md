# react-swiper-sidenav

`react-swiper-sidenav` is a React component for creating responsive, swipeable side navigation menus.

## Installation

```bash
npm install react-swiper-sidenav

Usage

import { SideNav } from 'react-swiper-sidenav';

function App() {
  return (
    <SideNav
      navItems={navItems}
      open={open}
      onClose={onClose}
      placement="left"
      zIndex={800}
      navProps={navProps}
      variant={variant}
    >
      <h2>Side Nav</h2>
    </SideNav>
  );
}

Props
navItems: Array of navigation items.
open: Boolean indicating whether the side nav is open.
onClose: Function to call when the side nav is closed.
placement: The placement of the side nav ("left" or "right").
zIndex: The z-index of the side nav.
navProps: Additional props for the nav element.
variant: The variant of the side nav.
Live Demo
Check out the live demo here.

Live Demo
Check out the live demo here.


```
