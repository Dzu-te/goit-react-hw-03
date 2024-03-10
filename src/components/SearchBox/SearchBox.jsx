export const SearchBox = ({ handleSearchChange }) => {
  return (
    <>
      <h4></h4>
      <label>Find contacts by name</label>
      <input
        type="text"
        placeholder="Enter name"
        onChange={handleSearchChange}
      />
    </>
  );
};
