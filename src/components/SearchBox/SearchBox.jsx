export const SearchBox = ({ handleSearchChange, searchItem }) => {
  return (
    <>
      <label>Find contacts by name</label>
      <input
        type="text"
        placeholder="Enter name"
        value={searchItem}
        onChange={handleSearchChange}
      />
    </>
  );
};
