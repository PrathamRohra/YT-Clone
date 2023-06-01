import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  //So as to change whenever we change the category we set the dependency array to selected category.
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <div className='flex flex-row bg-ytBlack'>
      <Sidebar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {selectedCategory}
      <Videos videos={videos}/>
    </div>
  )
}
