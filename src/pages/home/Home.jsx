import Navbar from "../../components/navbar/Navbar"
import "./home.scss";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

export default function Home() {
    return(
        <div className="home">
            <Navbar/>
            <Featured/>
            <List/>
        </div>
    )
}