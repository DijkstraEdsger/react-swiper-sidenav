# react-swiper-sidenav

react-swiper-sidenav is a React component for creating responsive, swipeable side navigation menus. It allows you to display submenus in a way that the component slides forward, and you can go back to the previous parent menu by sliding backward with a smooth animation. You can also customize the style of the component by passing a style object or using CSS classes.

## Installation

To install react-swiper-sidenav, you can use npm or yarn:

```bash
npm install react-swiper-sidenav
# or
yarn add react-swiper-sidenav
```

## Usage

To use react-swiper-sidenav, you need to import the `SideNav` component and pass it an object of type `NavItems` that defines the structure of your menus. You also need to provide an `onClose` function that handles the closing of the side navigation. Optionally, you can customize the appearance and behavior of the component by passing other props such as `open`, `placement`, `zIndex`, `navProps`, `variant`, etc. Here is an example of usage:

```jsx
import { SideNav, NavItems } from 'react-swiper-sidenav';
import { Link } from "react-router-dom";

type CustomLinkProps = {
  to: string;
  label?: string;
};

const CustomLink = ({ to, label }: CustomLinkProps) => {
  return <Link to={to}>{label}</Link>;
};

const navItems: NavItems = {
  name: "Main",
  childrenItems: [
    {
      name: "Computers",
      childrenItems: [
        {
          name: "Desktops",
          childrenItems: [
            {
              itemProps: {
                to: "/gaming",
                label: "Gaming",
              },
            },
            {
              itemProps: {
                to: "/workstations",
                label: "Workstations",
              },
            },
            {
              itemProps: {
                to: "/all-in-one",
                label: "All-in-One",
              },
            },
          ],
        },
      ],
    },
  ],
};

function App() {
  return (
    <SideNav
      navItems={navItems}
      open={open}
      onClose={onClose}
      renderLink={CustomLink}
    />
  )
}
```

## Live demo

You can see a live demo of the component here: [live demo](https://stackblitz.com/edit/stackblitz-starters-9aj2at).

## Props

The `SideNav` component accepts the following props:

| Name             | Type                              | Default     | Description                                                                                                                                                                                                                                                                           |
| ---------------- | --------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| navItems         | NavItems                          | required    | An object that defines the structure of the menus. The object can have the following properties: `name`, `childrenItems`, `itemProps`, `renderItem`, `disableClose`, `className`, `classes`. Where `childrenItems` is an array of `NavItems`. See the Types section for more details. |
| onClose          | () => void                        | required    | A function that handles the closing of the side navigation.                                                                                                                                                                                                                           |
| open             | boolean                           | false       | A boolean value that indicates whether the side navigation is open or not.                                                                                                                                                                                                            |
| zIndex           | number                            | 500         | A number that specifies the z-index of the side navigation.                                                                                                                                                                                                                           |
| children         | React.ReactNode                   | null        | A React node that can be rendered inside the side navigation.                                                                                                                                                                                                                         |
| placement        | Placement                         | 'left'      | A string that specifies the placement of the side navigation. It can be either 'left' or 'right'.                                                                                                                                                                                     |
| hideBackdrop     | boolean                           | false       | A boolean value that indicates whether to hide the backdrop behind the side navigation or not.                                                                                                                                                                                        |
| variant          | Variant                           | 'temporary' | A string that specifies the variant of the side navigation. It can be either 'temporary' or 'permanent'. The temporary variant will close the side navigation when the backdrop is clicked, while the permanent variant will keep it open.                                            |
| style            | React.CSSProperties               | {}          | A style object that can be applied to the side navigation container.                                                                                                                                                                                                                  |
| navProps         | React.HTMLAttributes<HTMLElement> | {}          | An object that can be passed as props to the side navigation element.                                                                                                                                                                                                                 |
| spreadCssClasses | boolean                           | true        | A boolean value that indicates whether to spread the css classes of the navItems to their children or not.                                                                                                                                                                            |
| renderLink       | (props: any) => React.JSX.Element | undefined   | A function that can be used to render a custom link component for the navItems.                                                                                                                                                                                                       |

## Types

The `SideNav` component uses the following types:

```ts
export type Classes = {
  container?: string
  back?: string
  head?: string
  items?: string
}

export type NavItems = {
  name?: string
  childrenItems?: NavItems[]
  itemProps?: React.AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLLIElement> | any
  renderItem?: React.ReactNode
  disableClose?: boolean
  className?: string
  classes?: Classes
}

export type Variant = 'temporary' | 'permanent'
export type Placement = 'left' | 'right'

export interface ISideNavProps {
  navItems: NavItems
  onClose: () => void
  open?: boolean
  zIndex?: number
  children?: React.ReactNode
  placement?: Placement
  hideBackdrop?: boolean
  variant?: Variant
  style?: React.CSSProperties
  navProps?: React.HTMLAttributes<HTMLElement>
  spreadCssClasses?: boolean
  renderLink?: (props: any) => React.JSX.Element
}
```

### NavItems

The type NavItems is an object that defines the structure of the menus. The object can have the following properties:

| Property      | Type                                                                                    | Description                                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | string                                                                                  | The name of the menu item. It will be displayed as a text or a link, depending on whether the item has children or not.                                                   |
| childrenItems | NavItems[]                                                                              | An array of objects that defines the submenus of the menu item. If the item has children, it will be displayed as a link that opens the submenus when clicked.            |
| itemProps     | React.AllHTMLAttributes<HTMLAnchorElement \| HTMLButtonElement \| HTMLLIElement> \| any | An object that can be passed as props to the menu item element. It can be any HTML attribute or a custom prop.                                                            |
| renderItem    | React.ReactNode                                                                         | A React node that can be used to render a custom menu item. It will override the default rendering of the name and the itemProps.                                         |
| disableClose  | boolean                                                                                 | A boolean value that indicates whether to disable the closing of the side navigation when the menu item is clicked or not.                                                |
| className     | string                                                                                  | A string that specifies the CSS class name of the menu item.                                                                                                              |
| classes       | Classes                                                                                 | An object that specifies the CSS class names of the menu item container, the back button, the head element, and the items element. See the Classes type for more details. |

## License

ISC
