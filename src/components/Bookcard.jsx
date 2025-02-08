import { Link } from "react-router-dom";

function Bookcard({ book, onAccountPage, handleReturn }) {
  const renderBook = (
    <div className="book-list">
      <img
        src={book.coverimage}
        alt={book.title}
        style={{ width: "200px", height: "auto" }}
      />
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.description}</p>
      {!onAccountPage && <p>{book.available ? "Available" : "Unavailable"}</p>}
      {onAccountPage && (
        <button onClick={() => handleReturn(book.id)}>Return</button>
      )}
    </div>
  );
  return (
    <>
      {onAccountPage ? (
        renderBook
      ) : (
        <Link to={`/books/details/${book.id}`}>{renderBook}</Link>
      )}
    </>
  );
}
export default Bookcard;
