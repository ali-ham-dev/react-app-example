import "./SearchBoxButton.css";

function SearchBoxButton(props) {
    return (
        <div className="button">
            <button className="button__button">
                <div className="button__icon-container">
                    { props.icon }
                </div>
            </button>
        </div>
    )
}

export default SearchBoxButton;