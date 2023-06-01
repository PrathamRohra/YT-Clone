import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';

export default function SearchRes() {
  const [videos, setVideos] = useState([]);
  const { text } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${text}`)
      .then((data) => setVideos(data.items))
  }, [text]);
  return (
    <div className='bg-ytBlack min-h-screen'>
      <div className="flex flex-row p-2">
          <Videos videos={videos}/>
      </div>
    </div>
  )
}
