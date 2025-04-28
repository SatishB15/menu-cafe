import { MenuItem } from "./menu-item"
import type { MenuItem as MenuItemType } from "../data/menu-data"

interface MenuCategoryProps {
  title: string
  description: string
  items: MenuItemType[]
  emptyMessage?: string
}

export function MenuCategory({ title, description, items, emptyMessage }: MenuCategoryProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-amber-200 pb-2">
        <h2 className="text-2xl font-semibold text-amber-900">{title}</h2>
        <p className="text-amber-700">{description}</p>
      </div>

      {items.length > 0 ? (
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              tags={item.tags}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      ) : (
        <div className="py-8 text-center text-amber-700">
          <p>{emptyMessage || "No items available in this category."}</p>
        </div>
      )}
    </div>
  )
}
