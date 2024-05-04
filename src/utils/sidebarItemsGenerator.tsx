import { TSidebarItem, TRoutePath } from "@/types";

export const sidebarItemsGenerator = (items: TRoutePath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.authority && item.authority.includes(role)) {
      if (item.path && item.name) {
        acc.push({
          label: item.name,
          path: item.path,
          icon: item.icon,
        });
      }

      // filtering nested children
      if (item.children) {
        const filteredChildren = item.children.filter((child) =>
          child.authority ? child.authority.includes(role) : true
        );
        acc.push({
          title: item.title,
          label: item.name,
          path: item.path,
          icon: item.icon,
          children:
            filteredChildren?.length > 0
              ? filteredChildren?.map((child) => ({
                  label: child.name,
                  path: child.path,
                  icon: child.icon,
                }))
              : undefined,
        });
      }
    }

    return acc;
  }, []);

  return sidebarItems;
};
