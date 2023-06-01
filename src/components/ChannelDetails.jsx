import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Divider } from "@chakra-ui/react";

export default function ChannelDetails() {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);


  return (
    <div className="flex flex-col bg-ytBlack min-h-screen">
      <div className=" flex justify-center">
        <ChannelCard channelDetail={channelDetail}/>
      </div>
      <Divider/>
      <div className="flex flex-row p-2">
          <Videos videos={videos}/>
      </div>
    </div>
    
  )
}
