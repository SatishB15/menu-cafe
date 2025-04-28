"use client"

import { Badge } from ".//badge"

interface FilterOption {
  id: string
  label: string
}

interface FilterBarProps {
  filters: FilterOption[]
  activeFilters: string[]
  onFilterChange: (filterId: string) => void
}

/**
 * FilterBar component
 * Displays filter options as toggleable badges
 */
export function FilterBar({ filters, activeFilters, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm font-medium text-amber-900">Dietary Filters:</span>
      {filters.map((filter) => (
        <Badge
          key={filter.id}
          variant={activeFilters.includes(filter.id) ? "default" : "outline"}
          className={`cursor-pointer px-4 py-2 text-sm ${activeFilters.includes(filter.id) ? "bg-amber-500 hover:bg-amber-600" : "hover:bg-amber-100"
            }`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </Badge>
      ))}
    </div>
  )
}
