import React from 'react';
import classes from './FeaturedGifView.module.css';
function FeaturedView({photo}) {
  return (
    <div>
    <div className={classes.photo_container}>
    <img src={photo[0]} alt="nothing to display"/>
    <img src={photo[1]} alt="nothing to display"/>
    <img  src={photo[2]} alt="nothing to display"/>
    <img src={photo[3]} alt="nothing to display"/>
    </div>
    <div className={classes.photo_container}>
    <img src={photo[4]} alt="nothing to display"/>
    <img src={photo[5]} alt="nothing to display"/>
    <img  src={photo[6]} alt="nothing to display"/>
    <img src={photo[7]} alt="nothing to display"/>
    </div>
    <div className={classes.photo_container}>
    <img src={photo[8]} alt="nothing to display"/>
    <img src={photo[9]} alt="nothing to display"/>
    <img  src={photo[10]} alt="nothing to display"/>
    <img src={photo[11]} alt="nothing to display"/>
    </div>
    <div className={classes.photo_container}>
    <img src={photo[12]} alt="nothing to display"/>
    <img src={photo[13]} alt="nothing to display"/>
    <img  src={photo[14]} alt="nothing to display"/>
    <img src={photo[15]} alt="nothing to display"/>
    </div>
    <div className={classes.photo_container}>
    <img src={photo[16]} alt="nothing to display"/>
    <img src={photo[17]} alt="nothing to display"/>
    <img  src={photo[18]} alt="nothing to display"/>
    <img src={photo[19]} alt="nothing to display"/>
    </div>
   
    </div>
  )
}

export default FeaturedView