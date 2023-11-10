import { CSSProperties, useEffect, useMemo, useState } from 'react'

const useSideDrawer = ({ navItems, variant, placement, open }: any) => {
  const [positions, setPositions] = useState(new Array<string>())

  useEffect(() => {
    if (navItems) {
      const initialPositions = navItems.map((_: any, index: number) => (index === 0 ? '0' : '100%'))
      setPositions(initialPositions)
    }
  }, [navItems])

  const slideForward = (parent: number, child: number) => {
    const m = [...positions]
    m[parent] = '-100%'
    m[child] = '0'
    setPositions(m)
  }

  const slideBackward = (parent: number, current: number) => {
    const m = [...positions]
    m[parent] = '0'
    m[current] = '100%'
    setPositions(m)
  }

  const className = useMemo(() => {
    let classesSideDrawer = ['SideDrawer', 'SideDrawerLeft', 'CloseLeft']

    if (placement === 'right') {
      classesSideDrawer = ['SideDrawer', 'SideDrawerRight', 'CloseRight']
    }

    if (open) {
      classesSideDrawer = ['SideDrawer', 'SideDrawerLeft', 'Open']

      if (placement === 'right') {
        classesSideDrawer = ['SideDrawer', 'SideDrawerRight', 'Open']
      }
    }

    return classesSideDrawer.join(' ')
  }, [open, placement])

  const cssPosition = useMemo<CSSProperties['position']>(
    () => (variant === 'permanent' ? 'inherit' : 'fixed'),
    [variant],
  )

  return {
    positions,
    className,
    cssPosition,
    slideForward,
    slideBackward,
  }
}

export default useSideDrawer
