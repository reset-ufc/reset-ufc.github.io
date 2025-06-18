import { useState } from "react";

interface TagListProps {
    title: string;
    items: string[];
    onAdd: (item: string) => void;
    onRemove: (index: number) => void;
    placeholder: string;
  }
  
const TagList: React.FC<TagListProps> = ({
title,
items,
onAdd,
onRemove,
placeholder,
}) => {
const [newItem, setNewItem] = useState('');

const handleAdd = () => {
    if (newItem.trim()) {
    onAdd(newItem.trim());
    setNewItem('');
    }
};

return (
    <div className="md:col-span-2">
    <h4 className="text-md font-medium text-gray-700 mb-2">{title}</h4>
    <div className="flex gap-2 mb-2">
        <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        placeholder={placeholder}
        />
        <button
        type="button"
        onClick={handleAdd}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
        Adicionar
        </button>
    </div>
    <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
        <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
        >
            {item}
            <button
            type="button"
            onClick={() => onRemove(index)}
            className="ml-2 text-indigo-600 hover:text-indigo-800"
            >
            ×
            </button>
        </span>
        ))}
    </div>
    </div>
);
};

export default TagList;