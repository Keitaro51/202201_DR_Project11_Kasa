import React from 'react';
import HomeBanner from '../components/homeBanner/homeBanner';
import Cards from '../components/card/card'

function Home() {  
  return (

    <React.Fragment>
        <HomeBanner/>
        <Cards />
    </React.Fragment>
  )
}

export default Home;