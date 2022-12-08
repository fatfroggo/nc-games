import { useNavigate } from "react-router-dom"


const SortReviews = ({sortedBy, setSortedBy}) => {

  const navigate = useNavigate()

    const handleSortChange = (event) => {
      if(!event.target.value) {
        navigate("/")
        setSortedBy(undefined)
      }
      else if(event.target.value) {
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
    <option value="">
      -- Sort by --
    </option>
    <option value="created_at">Date</option>
    <option value="title">Game Title</option>
    <option value="votes">Votes</option>
  </select>
);
}

export default SortReviews