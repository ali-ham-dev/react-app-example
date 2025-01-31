import "./SearchBox.css";
import MagnifyingGlass from "../magnifying-glass/MagnifyingGlass";
import Microphone from "../microphone/Microphone";
import Camera from "../camera/Camera";

function SearchBox() {
    return (
        <div className="search-box">
            <div className="search-box__search-button-container">
                <button className="search-box__search-button">
                    <div className="search-box__search-button-icon">
                        <MagnifyingGlass />  
                    </div>
                </button>
            </div>
            <input placeholder='Search' class="search-box__input-media"></input>
            <div className="search-box__audio-visual-controls">
                <div className="search-box__record-audio-container">
                    <button className="search-box__record-audio-button"
                            title="Search with audio">
                        <div className="search-box__record-audio-button-icon">
                            <Microphone />  
                        </div>
                    </button>
                </div>
                <div className="search-box__record-visual-container">
                    <button className="search-box__record-visual-button"
                            title="Search with visual">
                        <div className="search-box__record-visual-button-icon">
                            <Camera />  
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;