import React from 'react';
import { Calendar } from 'lucide-react';
import { NewsCardProps } from '../../../types';

const NewsCard = ({ category, title, date, imageUrl }: NewsCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {category.toUpperCase()}
        </span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-sm flex items-center">
          <Calendar className="mr-2" size={16} />
          {date}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Read About
        </button>
      </div>
    </div>
  );
};

export default NewsCard;