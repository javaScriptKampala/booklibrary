import library from "../data/library";

const getBookById = (req, res) => {
    const { book_id } = req.params;
    library.find((book) => {
        if(book.book_id === parseInt(book_id)){
         return res.status(200).json({
              status: 200,
              message: "book successfully fetched",
              data: book
          })
      }  res.status(404).json({
          status: 404,
          message: `book with id ${book_id} not found`,
      })}) 
}

export default getBookById;
