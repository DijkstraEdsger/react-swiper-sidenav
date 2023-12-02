import { Placement } from 'Interfaces/SideDrawer'
import { useEffect, useMemo, useState } from 'react'

type SideDrawerProps = {
  navItems: any[]
  placement: Placement
  open: boolean
}

type SideDrawerReturn = {
  positions: string[]
  className: string
  slideForward: (parent: number, child: number) => void
  slideBackward: (parent: number, current: number) => void
}

const useSideDrawer = ({ navItems, placement, open }: SideDrawerProps): SideDrawerReturn => {
  const [positions, setPositions] = useState<string[]>([])

  useEffect(() => {
    if (navItems) {
      const initialPositions = navItems.map((_, index) => (index === 0 ? '0' : '100%'))
      setPositions(initialPositions)
    }
  }, [navItems])

  const slide = (parent: number, child: number, parentPos: string, childPos: string) => {
    const m = [...positions]
    m[parent] = parentPos
    m[child] = childPos
    setPositions(m)
  }

  const slideForward = (parent: number, child: number) => slide(parent, child, '-100%', '0')
  const slideBackward = (parent: number, current: number) => slide(parent, current, '0', '100%')

  const className = useMemo(() => {
    const classesSideDrawer = [
      'SideDrawer',
      `SideDrawer${placement.charAt(0).toUpperCase() + placement.slice(1)}`,
      open ? 'Open' : `Close${placement.charAt(0).toUpperCase() + placement.slice(1)}`,
    ]
    return classesSideDrawer.join(' ')
  }, [open, placement])

  return {
    positions,
    className,
    slideForward,
    slideBackward,
  }
}

export default useSideDrawer
