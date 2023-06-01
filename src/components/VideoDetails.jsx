import React, { useState, useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { Text, Box } from '@chakra-ui/react';
import Videos from './Videos';

export default function VideoDetails() {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  // if(videoDetail?.snippet){
  //   const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  // }
  

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  const date = new Date(videoDetail?.snippet?.publishedAt);

  return (
    <div className='flex flex-row min-h-screen bg-ytBlack player-wrapper p-8'>
      <div className='flex flex-col'>
        <ReactPlayer
          className="react-player"
          url={`https://youtube.com/watch?v=${id}`}
          controls
          width={'960px'}
          height={'480px'}
        />
        <br/>
        <Text color={'white'} className='-mt-3' fontSize={'lg'}>{videoDetail?.snippet?.title}</Text>

        <Link to={`/channel/${videoDetail?.snippet?.channelTitle}`}>
          <Text color={'gray.300'} fontSize={'sm'} className=''>
            {videoDetail?.snippet?.channelTitle}
          </Text>
        </Link>
        
     
        <br/>
        <div className='flex flex-row justify-between'>
          <Text color={'gray.300'} fontSize={'sm'} className=''>
            {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} Views
          </Text>
          <Text color={'gray.300'} fontSize={'sm'} className=''>
            {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} Likes
          </Text>

        </div>
        <Box color={'white'} fontSize={'sm'} rounded={'sm'} shadow={'sm'}>
            <p className='font-bold'>Description</p>
            {videoDetail?.snippet?.description}
        </Box>
        
      </div>

      <div className="flex flex-col p-2">
          <Videos videos={videos}/>
      </div>
    </div>
  )
}
