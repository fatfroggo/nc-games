import { useEffect, useState } from "react";
import { addVotes, removeVotes } from "../api";

const Votes = ({ review_id, currentVotes, setVotes }) => {

    const [addVoteClicked, setAddVoteClicked] = useState(false)
    const [deleteVoteClicked, setDeleteVoteClicked] = useState(false)

  const handleAddVotes = () => {
    setVotes(currentVotes + 1);
    addVotes(review_id);
    setAddVoteClicked(true)
    setDeleteVoteClicked(false)
  };

  const handleRemoveVotes = () => {
    setVotes(currentVotes - 1)
    removeVotes(review_id)
    setDeleteVoteClicked(true)
    setAddVoteClicked(false)
  }
  return (
    <div className="voting-buttons">
      <button className="button" disabled={addVoteClicked}
        onClick={() => {
          handleAddVotes();
        }}
      >
        👍
      </button>
      <button className="button" disabled={deleteVoteClicked}
        onClick={() => {
          handleRemoveVotes();
        }}
      >
        👎
      </button>
    </div>
  );
};

export default Votes;
