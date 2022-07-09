import React from 'react'
import Header from './UI/Header';
import Search from './UI/Search';
import FeaturedGif from './UI/FeaturedGif';
import TrendingTenorSearch from './UI/TrendingTenorSearch';
function Mainpage() {

  return (
    
    <div>

    <Header/>
    <Search/>
    <div>
    <TrendingTenorSearch/>
    <FeaturedGif/>
    
    </div>
    </div>
  )
}

export default Mainpage