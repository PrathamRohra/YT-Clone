import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Text, Divider } from '@chakra-ui/react'
import { Link, BrowserRouter } from 'react-router-dom'

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  return (
    <Card maxW={'358px'} bg={'#282828'} className='' shadow={'none'}>
      <CardBody>
          <Link to={videoId? `/video/${videoId}` : '/'}>
            <Image src={snippet?.thumbnails?.high?.url}
            borderRadius={'md'}
            alt={snippet?.title}
            width={'358px'}
            height={'180px'}
            />
          </Link>
          <Text as="b" color='white' fontSize={'md'}>
            {snippet?.title.slice(0, 60)}
          </Text>
          <br/>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : '/' }>
            <Text as="b" color={'gray.300'} fontSize={'xs'}>
              {snippet?.channelTitle}
            </Text>
          </Link>
          
        
      </CardBody>
    </Card>
  )
}
