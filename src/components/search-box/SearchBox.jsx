import "./SearchBox.css";
import MagnifyingGlass from "../magnifying-glass/MagnifyingGlass";
import Microphone from "../microphone/Microphone";
import Camera from "../camera/Camera";

function SearchBox() {
    return (
        <div className="search-box">
            <div className="search-box__search-button-container">
                <button className="search-box__search-button">
                    <div className="search-box__search-button-icon ">
                        <MagnifyingGlass />  
                    </div>
                </button>
            </div>
            <input placeholder='Search'></input>
            <div className="search-box__record-audio">
                <button className="search-box__record-audio-button">
                    <div className="search-box__record-audio-button-icon ">
                        <Microphone />  
                    </div>
                </button>
            </div>
            <div className="search-box__record-visual">
                <button className="search-box__record-visual-button">
                    <div className="search-box__record-visual-button-icon ">
                        <Camera />  
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SearchBox;