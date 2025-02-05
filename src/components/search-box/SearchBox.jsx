import "./SearchBox.css";
import MagnifyingGlass from "../magnifying-glass/MagnifyingGlass";
import Microphone from "../microphone/Microphone";
import Camera from "../camera/Camera";
import SearchBoxButton from "../search-box-buttons/SearchBoxButton";

function SearchBox() {
    const iconWidth = '30';
    const iconHeight = '30';

    return (
        <div className="search-box">
            <SearchBoxButton icon={ <MagnifyingGlass width={ iconWidth } height={ iconHeight } /> } />
            <input placeholder='Search' class="search-box__input-media"></input>
            <SearchBoxButton icon={ <Microphone width={ iconWidth } height={ iconHeight } /> } />
            <SearchBoxButton icon={ <Camera width={ iconWidth } height={ iconHeight } /> } />
        </div>
    )
}

export default SearchBox;