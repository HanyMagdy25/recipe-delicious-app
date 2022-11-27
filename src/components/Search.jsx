import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <form className="search">
      <div>
        <FaSearch />
        <input type="text" />
      </div>
    </form>
  );
}

export default Search;
