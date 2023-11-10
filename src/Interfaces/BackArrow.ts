export interface IBackArrowProps {
  onClick: () => void
  className: string
  children: React.JSX.Element
  tabIndex: number
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void
}
