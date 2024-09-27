import React from 'react';
import NewsCard from './NewsCard';

const NewsCardList = () => {
  const newsItems = [
    {
      category: 'PAPERS',
      title: 'RESHAPE Lab paper accepted at AIware Conference 2024',
      date: '2024-05-07',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      category: 'COLLABORATION',
      title: 'Collaboration USES/UFAM -- RESHAPE/NAU!',
      date: '2024-03-01',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      category: 'PAPERS',
      title: 'RESHAPE Lab hat trick at ICSE 2024!',
      date: '2024-03-01',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      category: 'AWARD',
      title: 'Bianca Trinkenreich received the 2024 ACM SIGSOFT Distinguished Dissertation Award',
      date: '2024-02-01',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
  ];

  return (
    <div className='bg-[#270B79] '>
    <h1 className="text-white flex bg-inherit justify-center text-4xl pt-6 font-Lufga-ExtraBold">Notícias</h1>
      <div className="flex justify-center pt-5 gap-8">
      {newsItems.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
    </div>
  );
};

export default NewsCardList;