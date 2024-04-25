import * as React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../components/navbar'
import BillBoard from '../components/billboard';
import Banner from '../components/banner';
import Card from '../components/card';

export default function Home() {

  const videoUrl = "https://videos.pexels.com/video-files/2620043/2620043-uhd_3840_2160_25fps.mp4"
  const bannerContent = '"Finest ingredients, amazing chefs, an interior that pays tribute to the great city of Coimbatore combined with impeccable service defines the Kove experience"'
  const CardProps = {
    imgUrl1: 'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
    imgUrl2: 'https://plus.unsplash.com/premium_photo-1663852705829-aa8707495e2e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D',
    imgUrl3: '',
    heading1: 'Wine and Dine',
    content1: 'We also offer a unique selection of reimagined signature cocktails, some of them with Indian roots and ingredients. Our cocktails aim to pay a tribute to memories made by every Coimbatorian during their travels, while also helping them make fresh new ones with us. Our chefs and bartenders will offer to guide you on the right wine, cocktail, or mocktail to pair with your choice of dishes.',
    heading2: 'Local fresh cuisine for everyone',
    content2: 'Our menu consists of some global favorites in pure vegetarian. Reimagining some of the international dishes in vegetarian and using local ingredients, while retaining their original flavor, as much as possible, was a challenge, but our team of expert chefs has aced it. We have used local ingredients like Jackfruit, Karipala (breadfruit), Mango ginger pickle, Nannari, and “Sangu poo” among others (Blue Pea Flower) in our food and beverages.'
  }

  return (
    <Grid container direction="column">          
        <Navbar/>
        <BillBoard videoUrl={videoUrl}/>
        <Banner content={bannerContent}/>
        <Card propsObj={CardProps}/>
    </Grid>
  );
}
