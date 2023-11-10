// this helper function is a DFS algorithm that converts the menu object tree to an array
export const menuObjectTreeToArray = (
  navItem: any,
  currentNavItemsIndex: number,
  tree: any,
  parent: number,
  parentName: string,
) => {
  if (navItem.childrenItems) {
    tree.push(currentNavItemsIndex)

    const navItemsChildren = navItem.childrenItems.map((navItemChild: any) => {
      const child = navItemChild.childrenItems ? tree.length : -1
      menuObjectTreeToArray(navItemChild, tree.length, tree, currentNavItemsIndex, navItem.name)
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
