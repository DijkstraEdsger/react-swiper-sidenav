// this helper function is a DFS algorithm that converts the menu object tree to an array
export const menuObjectTreeToArray = (
  navItem: any,
  currentNavItemsIndex: number,
  tree: any,
  parent: number,
  parentName: string,
) => {
  if (navItem.childrenItems) {
    const navItemsChildren: any[] = []
    tree.push(currentNavItemsIndex)

    navItem.childrenItems.forEach((navItemChild: any) => {
      let child = -1
      if (navItemChild.childrenItems) {
        child = tree.length
      }
      navItemsChildren.push({
        child: child,
        parent: currentNavItemsIndex,
        name: navItemChild.name,
        renderItem: navItemChild.renderItem,
        disableClose: navItemChild.disableClose,
        className: navItemChild.className || '',
        itemProps: navItemChild.itemProps,
      })
      menuObjectTreeToArray(navItemChild, tree.length, tree, currentNavItemsIndex, navItem.name)
    })

    tree[currentNavItemsIndex] = {
      parent: parent,
      current: currentNavItemsIndex,
      parentName: parentName,
      headName: navItem.name,
      posXIndex: currentNavItemsIndex,
      navItemsChildren: navItemsChildren,
      classes: navItem.classes,
    }
  }
}
