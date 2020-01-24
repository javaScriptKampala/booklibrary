import library from '../data/library';

const addNewBook = (req, res) => {
    // const {
    //     book_id,
    //     book_name ,
    //     price ,
    //     author,
    //     description,
    //     quantity
    //     } = req.body;
    console.log(req.body)
    // const data = library.push({
    //     book_id,
    //     book_name ,
    //     price ,
    //     author,
    //     description,
    //     quantity
    //     })
    // library.push(data)
    // res.status(201).json({
    //     status: 201,
    //     message: "book successfully added to the library"
    // })
}

export default addNewBook;
