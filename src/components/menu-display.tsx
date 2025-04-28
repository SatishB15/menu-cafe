"use client"

import { useState, useEffect } from "react"
import { MenuCategory } from "./menu-category"
import { SearchBar } from "./search-bar"
import { FilterBar } from "./filter-bar"
import { Coffee, Cake, Wine } from "lucide-react"
import { menuData, type MenuItem as MenuItemType } from "../data/menu-data"

/**
 * MenuDisplay component
 * Renders the complete menu with tabs for different categories,
 * search functionality, and filtering options
 */
export function MenuDisplay() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [filteredItems, setFilteredItems] = useState<{
    beverages: MenuItemType[]
    pastries: MenuItemType[]
    specials: MenuItemType[]
    all: MenuItemType[] // Explicitly include the 'all' property
  }>({
    beverages: menuData.beverages,
    pastries: menuData.pastries,
    specials: menuData.specials,
    all: [...menuData.beverages, ...menuData.pastries, ...menuData.specials],
  })

  // Available dietary filters
  const dietaryFilters = [
    { id: "vegetarian", label: "Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "gluten-free", label: "Gluten-Free" },
    { id: "dairy-free", label: "Dairy-Free" },
  ]

  // Filter menu items based on search query and active filters
  useEffect(() => {
    const applyFilters = () => {
      const matchesSearch = (item: MenuItemType) =>
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesFilters = (item: MenuItemType) =>
        activeFilters.length === 0 || activeFilters.every((filter) => item.tags.includes(filter))

      const filtered = {
        beverages: menuData.beverages.filter((item) => matchesSearch(item) && matchesFilters(item)),
        pastries: menuData.pastries.filter((item) => matchesSearch(item) && matchesFilters(item)),
        specials: menuData.specials.filter((item) => matchesSearch(item) && matchesFilters(item)),
        all: [] as MenuItemType[], // Initialize 'all' as an empty array
      }

      filtered.all = [...filtered.beverages, ...filtered.pastries, ...filtered.specials]
      setFilteredItems(filtered)
    }

    applyFilters()
  }, [searchQuery, activeFilters])

  const handleSearch = (query: string) => setSearchQuery(query)

  const handleFilterChange = (filter: string) =>
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))

  return (
    <div className="bg-white rounded-lg shadow-lg p-2 md:p-4">
      <div className="mb-8 space-y-4">
        <SearchBar onSearch={handleSearch} />
        <FilterBar filters={dietaryFilters} activeFilters={activeFilters} onFilterChange={handleFilterChange} />
      </div>

      {/* Tabs */}
      <div>
        <div className="flex justify-between border-b border-gray-200 mb-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`py-2 px-4 ${activeCategory === "all" ? "border-b-2 border-amber text-amber-500" : "text-gray-500"
              }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory("beverages")}
            className={`py-2 px-4 ${activeCategory === "beverages" ? "border-b-2 border-amber text-amber-500" : "text-gray-500"
              }`}
          >
            <Coffee className="inline-block h-5 w-5 mr-1" />
            Drinks
          </button>
          <button
            onClick={() => setActiveCategory("pastries")}
            className={`py-2 px-4 ${activeCategory === "pastries" ? "border-b-2 border-amber text-amber-500" : "text-gray-500"
              }`}
          >
            <Cake className="inline-block h-5 w-5 mr-1" />
            Pastries
          </button>
          <button
            onClick={() => setActiveCategory("specials")}
            className={`py-2 px-4 ${activeCategory === "specials" ? "border-b-2 border-amber text-amber-500" : "text-gray-500"
              }`}
          >
            <Wine className="inline-block h-5 w-5 mr-1" />
            Specials
          </button>
        </div>

        {/* Tab Content */}
        {activeCategory === "all" && (
          <MenuCategory
            title="All Menu Items"
            description="Browse our complete selection of food and beverages"
            items={filteredItems.all}
            emptyMessage="No items match your search or filters. Try adjusting your criteria."
          />
        )}
        {activeCategory === "beverages" && (
          <MenuCategory
            title="Beverages"
            description="Expertly crafted coffee and tea beverages"
            items={filteredItems.beverages}
            emptyMessage="No beverages match your search or filters. Try adjusting your criteria."
          />
        )}
        {activeCategory === "pastries" && (
          <MenuCategory
            title="Pastries"
            description="Freshly baked treats to satisfy your sweet tooth"
            items={filteredItems.pastries}
            emptyMessage="No pastries match your search or filters. Try adjusting your criteria."
          />
        )}
        {activeCategory === "specials" && (
          <MenuCategory
            title="Seasonal Specials"
            description="Limited-time offerings featuring the best of the season"
            items={filteredItems.specials}
            emptyMessage="No specials match your search or filters. Try adjusting your criteria."
          />
        )}
      </div>
    </div>
  )
}
