import Categories from "./categories";
import Banner from "./Banner";
import Video from '../Components/videos';

const Home = () => {
    return ( 
        <div className="home">
            <Categories/>
            <Banner/>
            <Video/>
        </div>
     );
}
 
export default Home;