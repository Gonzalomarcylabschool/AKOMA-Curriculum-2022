import { useEffect, useState } from "react";
import { getAllFriends } from "../adapters/friend-adapter";
import { getAllBooks } from "../adapters/book-adapter";

export default function BooksAndFriends() {
  const [friends, setFriends] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(setBooks);
    getAllFriends().then(setFriends);
  }, []);
  return <div>
    <h1>Books And Friends</h1>
    <p>Here is a page with a list of Books you should read and some friends you can make.</p>
    <h2>List of books</h2>
    <ul>
      {
        books.map((book) => <li key={book.id}>{book.tile} {book.author}</li>)
      }
    </ul>
    <h2>List of Friends</h2>
    <ul>
      {
        friends.map((friend) => <li key={friend.id}>{friend.first_name} {friend.last_name}</li>)
      }
    </ul>
  </div>;
}
