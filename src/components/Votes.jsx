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
    <div>
      <button
        onClick={() => {
          handleAddVotes();
        }}
      >
        👍
      </button>
      <button
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
