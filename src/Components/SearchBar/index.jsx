import "./index.css";

function SearchBar(props) {
  const { onChangeText, onEnterKeyPress } = props;
  const onKeyChange = (event) => {
    if (event.key === "Enter") {
      onEnterKeyPress();
    }
  };
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search"
        onChange={onChangeText}
        onKeyPress={onKeyChange}
      />
    </div>
  );
}

export default SearchBar;
