'use client'

import { useState } from 'react'
import { Filter, X } from 'lucide-react'

const priceRanges = [
  { value: '', label: '全部项目' },
  { value: '200-300', label: '200-300万' },
  { value: '300-400', label: '300-400万' },
  { value: '400-500', label: '400-500万' },
]

const locations = [
  '全部地区',
  '东京都',
  '大阪府',
  '神奈川县',
  '千叶县',
  '埼玉县',
  '静冈县',
]

const capacities = [
  '全部容量',
  '500-1000kW',
  '1000-1500kW',
  '1500-2000kW',
]

export default function ProjectFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPriceRange, setSelectedPriceRange] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('全部地区')
  const [selectedCapacity, setSelectedCapacity] = useState('全部容量')

  const handleFilterChange = (type: string, value: string) => {
    switch (type) {
      case 'price':
        setSelectedPriceRange(value)
        break
      case 'location':
        setSelectedLocation(value)
        break
      case 'capacity':
        setSelectedCapacity(value)
        break
    }
  }

  const clearFilters = () => {
    setSelectedPriceRange('')
    setSelectedLocation('全部地区')
    setSelectedCapacity('全部容量')
  }

  const hasActiveFilters = selectedPriceRange || selectedLocation !== '全部地区' || selectedCapacity !== '全部容量'

  return (
    <div className="bg-secondary-light border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Filters */}
        <div className="hidden lg:block py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {/* Price Range Filter */}
              <div>
                <label className="text-sm font-medium text-secondary-dark mb-2 block">
                  投资金额
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => handleFilterChange('price', e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="text-sm font-medium text-secondary-dark mb-2 block">
                  所在地区
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Capacity Filter */}
              <div>
                <label className="text-sm font-medium text-secondary-dark mb-2 block">
                  装机容量
                </label>
                <select
                  value={selectedCapacity}
                  onChange={(e) => handleFilterChange('capacity', e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {capacities.map((capacity) => (
                    <option key={capacity} value={capacity}>
                      {capacity}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 text-primary-blue hover:text-primary-green transition-colors duration-200"
              >
                <X className="w-4 h-4" />
                <span className="text-sm">清除筛选</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Filters */}
        <div className="lg:hidden py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 text-primary-blue hover:text-primary-green transition-colors duration-200"
            >
              <Filter className="w-5 h-5" />
              <span className="font-medium">筛选项目</span>
              {hasActiveFilters && (
                <span className="bg-primary-blue text-white text-xs px-2 py-1 rounded-full">
                  {[selectedPriceRange, selectedLocation !== '全部地区' ? selectedLocation : '', selectedCapacity !== '全部容量' ? selectedCapacity : ''].filter(Boolean).length}
                </span>
              )}
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-primary-blue hover:text-primary-green transition-colors duration-200"
              >
                清除
              </button>
            )}
          </div>

          {/* Mobile Filter Panel */}
          {isOpen && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
              <div>
                <label className="text-sm font-medium text-secondary-dark mb-2 block">
                  投资金额
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => handleFilterChange('price', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-secondary-dark mb-2 block">
                  所在地区
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-secondary-dark mb-2 block">
                  装机容量
                </label>
                <select
                  value={selectedCapacity}
                  onChange={(e) => handleFilterChange('capacity', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {capacities.map((capacity) => (
                    <option key={capacity} value={capacity}>
                      {capacity}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}