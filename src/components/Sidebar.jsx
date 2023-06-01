import { Button } from '@chakra-ui/react'
import React from 'react'
import { categories } from '../utils/categories'

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
    return (
      <div className='flex flex-col bg-ytBlack w-52 h-screen justify-center pr-2' >
        {categories.map((category) => (
          <Button 
            onClick={() => setSelectedCategory(category.name)}
            key={category.name} 
            variant={'ghost'} 
            h={20} 
            color={'white'} 
            _hover={{bg: 'black'}}>
            <span className='mr-2'>{category.icon}</span>
            <span>{category.name}</span>
          </Button>
        ))}
      </div>
    );
}
