import { Badge } from "../components/badge"

interface MenuItemProps {
  name: string
  description: string
  price: number
  tags: string[]
  imageUrl: string
}

/**
 * MenuItem component
 * Displays an individual menu item with name, description, price, tags, and image
 */
export function MenuItem({ name, description, price, tags, imageUrl }: MenuItemProps) {
  // Function to get the appropriate color for each tag
  const getTagColor = (tag: string) => {
    switch (tag) {
      case "vegetarian":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "vegan":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
      case "spicy":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "popular":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      case "seasonal":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100"
      case "healthy":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "gluten-free":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "dairy-free":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <div className="group overflow-hidden rounded-lg border-2 border-amber-700 transition-all hover:shadow-md">
      <div className="relative h-90 p-4 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover rounded-lg h-100 w-100 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-amber-900 group-hover:text-amber-800">{name}</h3>
          <span className="font-medium text-amber-900 ml-2">₹{price.toFixed(2)}</span>
        </div>

        <p className="mt-1 text-amber-700 text-sm line-clamp-3">{description}</p>

        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className={`text-xs ${getTagColor(tag)}`}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
