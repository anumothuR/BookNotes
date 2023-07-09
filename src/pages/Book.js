import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
  const { bookId } = useParams();
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    const newNote = prompt('Enter a new note:');
    if (newNote) {
      setNotes([...notes, newNote]);
    }
  };

  return (
    <div>
      <h2>Book {bookId}</h2>
      <p>Notes for Book {bookId}:</p>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default Book;
