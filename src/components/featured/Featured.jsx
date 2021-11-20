import "./featured.scss";
import {InfoOutlined, PlayArrow} from "@material-ui/icons";

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <video width="100%" className='videoTag' autoPlay loop muted>
                <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type='video/mp4' />
            </video>
            <div className="info">
                <img
                    src="https://occ-0-2433-2705.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZ2nEQLD1uOyaYPpZPcs5pFQ-gBC4kGceE3nC7DpQuvcRDooz6rSQ61AfmUsYw6rUiAyHuB0Fu303aXZ6jSw72VeB_LMix7iXhbKYD6PF9fhMhxxRfgTaHEfL4Kx1roOcLz4P1Di0u5WxObmJWhr7F24jPD0FQQ3kRUx-nNzJyvqHg.png?r=0ee"
                    alt=""
                />
                <span className="desc">
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                       <InfoOutlined/>
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}