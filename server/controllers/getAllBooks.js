import library from "../data/library";

const getAllBooks = (req, res) => {
    const data = library;
    if(data.length === 0){
        return res.status(404).json({
            status: 404,
            message: "sorry currently no books available"
        })
    }
    res.status(200).json({
        status: 200,
        message: "all books successfully fetched",
        data
    })
}
export default getAllBooks;
