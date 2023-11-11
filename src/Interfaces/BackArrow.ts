export interface IBackArrowProps {
  onClick: () => void
  className: string
  children: React.ReactNode
  tabIndex: number
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void
}
