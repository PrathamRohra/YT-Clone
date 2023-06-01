import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Text, Divider } from '@chakra-ui/react';
import { Link, BrowserRouter } from 'react-router-dom';

export default function ChannelCard({ channelDetail }) {
  return (
    <Card maxW={'358px'} bg={'#282828'} className='flex flex-col justify-center text-center' border={'none'} shadow={'none'}>
      <CardBody className=''>
          <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <Image src={channelDetail?.snippet?.thumbnails?.high?.url}
            borderRadius={'full'}
            alt={channelDetail?.snippet?.title}
            width={'180px'}
            height={'180px'}
            />
          </Link>
          <br/>
          <Text as="b" color='gray.300' fontSize={'md'}>
            {channelDetail?.snippet?.title} {/*Title of Video */}
          </Text> 
          <br/>
          <Text as="b" color='gray.300' fontSize={'md'}>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers {/*Subscriber Count*/}
          </Text>         
          
        
      </CardBody>
    </Card>
  )
}
