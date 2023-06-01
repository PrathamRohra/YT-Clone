import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import VideoDetails from './components/VideoDetails';
import ChannelDetails from './components/ChannelDetails';
import SearchRes from './components/SearchRes';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<h1 className='font-bold text-center align-middle text-red-600 text-5xl'>Page Not Found :/</h1>} />
            <Route path='/video/:id' element={<VideoDetails/>}/>
            <Route path='/channel/:id' element={<ChannelDetails/>}/>
            <Route path='/search/:text' element={<SearchRes/>} />
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
