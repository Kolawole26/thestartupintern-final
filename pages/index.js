import Meta from "../components/Meta";
import Header from "../components/Header";
import Grid from "../components/Grid";
import About from "../components/About";
import Details from "../components/Details";
import Video from "../components/Video";
import Energy from "../components/Energy";
import Protein from "../components/Protein";
import Blog from "../components/Blog";


export default function Home() {
  return (
    <>
      <Meta title='Home Page'/>
      <Header/>
      <Grid/>
      <About/>
      <Details/>
      <Video/>
      <Energy/>
      <Protein/>
      <Blog/>
    </>
  )
}
