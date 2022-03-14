import "./index.css";

function SearchBar(props) {
  const { onChangeText } = props;
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search" onChange={onChangeText} />
    </div>
  );
}

export default SearchBar;
