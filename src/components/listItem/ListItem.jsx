import "./listItem.scss"
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import {useState} from "react";

export default function ListItem({index}){

    const [isHovered, setIsHovered] = useState(false);
    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div className="listItem"
             style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <img
            src="https://4.bp.blogspot.com/-4uZ-feT-dUA/WJKH-R4mg-I/AAAAAAAAfJo/NcyPq6KWJbM2vLwFvO09PlmezoFYS71AgCLcB/s1600/4981_WeightliftingFairyKimBokJoo_Nowplay_Small.jpg"
            alt=""/>
            {isHovered && (
                <>
                <video src={trailer} autoPlay={true} loop/>
                <div className="itemInfo">
                <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownAltOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
                </div>
                <div className="desc">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                </div>
                <div className="genre">Romantic Comedy</div>
                </div>
                </>
            )}
        </div>
    )
}