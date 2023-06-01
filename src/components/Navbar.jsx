import React, { useState } from 'react';
import logo from '../assets/yt_logo_rgb_dark.png';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Link, BrowserRouter, useNavigate } from 'react-router-dom';

export default function Navbar() {

  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
      e.preventDefault();
      if(search){
        navigate(`search/${search}`)
      }
  }
  return (
    <div className='h-15 w-full bg-ytBlack p-3 flex flex-row items-center'>
      <HamburgerIcon boxSize={6} color={'white'}/>
        <Link to="/">
          <img src={logo} className='h-5 ml-6'/>
        </Link>  
      <form onSubmit={handleSubmit}>
          <InputGroup className='ml-10' w={800}>
            <Input 
              rounded={'full'} 
              size={'md'} 
              w={800} 
              variant={'outline'} 
              placeholder='Search' 
              textColor={'white'}
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <InputRightElement className='mr-2'>
              <SearchIcon color={'white'}/>
            </InputRightElement>
          </InputGroup>
      </form>   
      

    </div>
  )
}
