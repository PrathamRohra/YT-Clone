import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import { Stack, Box } from '@chakra-ui/react';

export default function Videos({ videos }) {
  // console.log(videos);
  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    {videos.map((item, idx) => (
      <Box key={idx}>
        {item?.id?.videoId && <VideoCard video={item} /> }
        {item?.id?.channelId && <ChannelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>
  )
}
