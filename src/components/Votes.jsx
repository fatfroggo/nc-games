import { useEffect, useState } from "react";
import { addVotes, removeVotes } from "../api";

const Votes = ({ review_id, currentVotes, setVotes }) => {
  const handleAddVotes = () => {
    setVotes(currentVotes + 1);
    addVotes(review_id);
  };

  const handleRemoveVotes = () => {
    setVotes(currentVotes - 1)
    removeVotes(review_id)
  }
  return (
    <div className="voting-buttons">
      <button className="button"
        onClick={() => {
          handleAddVotes();
        }}
      >
        👍
      </button>
      <button className="button"
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
