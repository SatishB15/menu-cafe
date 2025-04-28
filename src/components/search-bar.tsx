"use client"

import type React from "react"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "./search-input"

interface SearchBarProps {
  onSearch: (query: string) => void
}

/**
 * SearchBar component
 * Provides a search input with clear functionality
 */
export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  const handleClear = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-amber-500" />
      </div>
      <Input
        type="text"
        placeholder="Search menu items..."
        className="pl-10 text-sm pr-10 py-2 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
        value={query}
        onChange={handleChange}
      />
      {query && (
        <button className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={handleClear}>
          <X className="h-4 w-4 text-amber-500" />
        </button>
      )}
    </div>
  )
}
