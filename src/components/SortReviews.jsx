

const SortReviews = ({sortedBy, setSortedBy}) => {

    const handleSortChange = (event) => {
      if(event.target.value) {
        setSortedBy(event.target.value)
      }
    }
    
return (
  <select
    name="sort-list"
    className="sort-list"
    value={sortedBy}
    onChange={handleSortChange}
  >
    <option value="created_at">Date</option>
    <option value="title">Game Title</option>
    <option value="votes">Votes</option>
  </select>
);
}

export default SortReviews