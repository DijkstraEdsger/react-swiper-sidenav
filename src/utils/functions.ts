// this helper function is a DFS algorithm that converts the menu object tree to an array
const dfs = (navItem: any, currentNavItemsIndex: number, tree: any, parent: number, parentName: string) => {
  if (navItem.childrenItems) {
    tree.push(currentNavItemsIndex)

    const navItemsChildren = navItem.childrenItems.map((navItemChild: any) => {
      const child = navItemChild.childrenItems ? tree.length : -1
      dfs(navItemChild, tree.length, tree, currentNavItemsIndex, navItem.name)
      return {
        child,
        parent: currentNavItemsIndex,
        name: navItemChild.name,
        renderItem: navItemChild.renderItem,
        disableClose: navItemChild.disableClose,
        className: navItemChild.className || '',
        itemProps: navItemChild.itemProps,
      }
    })

    tree[currentNavItemsIndex] = {
      parent,
      current: currentNavItemsIndex,
      parentName,
      headName: navItem.name,
      posXIndex: currentNavItemsIndex,
      navItemsChildren,
      classes: navItem.classes,
    }
  }
}

export const convertMenuTreeToArray = (navItems: any) => {
  const treeArray: any[] = []
  dfs(navItems, 0, treeArray, -1, '')

  return [...treeArray]
}

// Helper function to let the submenus to have the same classes as the parent
export const spreadCssClasses = (navItems: any[]) => {
  const updatedNavItems = [...navItems]

  updatedNavItems.forEach((navItem: any) => {
    if (navItem.parent !== -1) {
      navItem.classes = { ...navItems[navItem.parent].classes, ...navItem.classes }
    }
  })

  return updatedNavItems
}

export const preProcessNavItems = (navItems: any[], isSpreadClasses: boolean) => {
  const preProcessedNavItems = convertMenuTreeToArray(navItems)

  if (isSpreadClasses) {
    return spreadCssClasses(preProcessedNavItems)
  }

  return preProcessedNavItems
}
