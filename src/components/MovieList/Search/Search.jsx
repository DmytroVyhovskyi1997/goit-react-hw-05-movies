const Search = ({searchValue,handleSearchInputChange}) =>{
    return <input type="text" value={searchValue} onChange={handleSearchInputChange} />
}
export default Search;