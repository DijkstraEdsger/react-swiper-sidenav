# react-swiper-sidenav

react-swiper-sidenav is a React component for creating responsive, swipeable side navigation menus. It allows you to display submenus in a way that the component slides forward, and you can go back to the previous parent menu by sliding backward with a smooth animation.

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
import { SideNav } from 'react-swiper-sidenav'

function App() {
  return (
    <SideNav
      navItems={navItems}
      open={open}
      onClose={onClose}
      placement='left'
      zIndex={800}
      navProps={navProps}
      variant={variant}
    />
  )
}
```

You can see a live demo of the component here: [react-swiper-sidenav live demo](https://stackblitz.com/~/github.com/DijkstraEdsger/react-swiper-sidenav-live-demo).

## Props

The `SideNav` component accepts the following props:

| Name             | Type                              | Default     | Description                                                                                                                                                                                                                                     |
| ---------------- | --------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| navItems         | NavItems                          | required    | An object that defines the structure of the menus. The object can have the following properties: `name`, `childrenItems`, `itemProps`, `renderItem`, `disableClose`, `className`, `classes`. Where `childrenItems` is an array of `NavItems`. See the Types section for more details. |
| onClose          | () => void                        | required    | A function that handles the closing of the side navigation.                                                                                                                                                                                     |
| open             | boolean                           | false       | A boolean value that indicates whether the side navigation is open or not.                                                                                                                                                                      |
| zIndex           | number                            | 500        | A number that specifies the z-index of the side navigation.                                                                                                                                                                                     |
| children         | React.ReactNode                   | null        | A React node that can be rendered inside the side navigation.                                                                                                                                                                                   |
| placement        | Placement                         | 'left'      | A string that specifies the placement of the side navigation. It can be either 'left' or 'right'.                                                                                                                                               |
| hideBackdrop     | boolean                           | false       | A boolean value that indicates whether to hide the backdrop behind the side navigation or not.                                                                                                                                                  |
| variant          | Variant                           | 'temporary' | A string that specifies the variant of the side navigation. It can be either 'temporary' or 'permanent'. The temporary variant will close the side navigation when the backdrop is clicked, while the permanent variant will keep it open.      |
| style            | React.CSSProperties               | {}          | A style object that can be applied to the side navigation container.                                                                                                                                                                            |
| navProps         | React.HTMLAttributes<HTMLElement> | {}          | An object that can be passed as props to the side navigation element.                                                                                                                                                                           |
| spreadCssClasses | boolean                           | true       | A boolean value that indicates whether to spread the css classes of the navItems to their children or not.                                                                                                                                      |
| renderLink       | (props: any) => React.JSX.Element | undefined   | A function that can be used to render a custom link component for the navItems.                                                                                                                                                                 |

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

## License

ISC
