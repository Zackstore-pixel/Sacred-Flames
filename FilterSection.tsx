import React from 'react';

interface FilterSectionProps {
  title: string;
  options: string[];
}

export default function FilterSection({ title, options }: FilterSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <div className="space-y-1">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-sage-600 focus:ring-sage-500" />
            <span className="text-sm text-gray-600">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}