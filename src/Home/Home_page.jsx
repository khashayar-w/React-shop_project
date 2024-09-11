import { Link } from "react-router-dom";
import "./home.css"
const HomePage = () => {
    return ( 
        <section className="hero">
            <div className="content">
                <h1>Be Creative</h1>
                <span className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eaque laudantium dicta nobis quisquam dolorem mollitia itaque animi exercitationem deserunt. </span>
                <Link to="/Store">shop</Link>
            </div>
        </section>
     );
}
 
export default HomePage;