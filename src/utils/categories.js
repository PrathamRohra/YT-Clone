import { GiRetroController } from "react-icons/gi";
import { AiOutlineHome, AiOutlinePlaySquare, AiOutlineTrophy, AiOutlineFileDone, AiOutlineFire, AiOutlineBulb } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsSoundwave, BsMusicNote } from "react-icons/bs";

export const categories = [

    {name: "Home", icon: <AiOutlineHome/>},
    {name: "Shorts", icon: <AiOutlinePlaySquare/>},
    {name: "Music", icon: <BsMusicNote/>},
    {name: "Trending", icon:<AiOutlineFire/> },
    {name: "Movies", icon: <BiMoviePlay/> },
    {name: "Live", icon: <BsSoundwave/>},
    {name: "Gaming", icon: <GiRetroController/>},
    {name: "News", icon: <AiOutlineFileDone/>},
    {name: "Sports", icon: <AiOutlineTrophy/>},
    {name: "Learning", icon: <AiOutlineBulb/>}
] 
