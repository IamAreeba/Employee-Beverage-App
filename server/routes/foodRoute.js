import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'

const foodRouter = express.Router()

// Saving Image in Uploads folder
// This is the disk storage config we did below
// Image Storage Engine

// const storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {
//         return cb(null, `${Date.now()}${file.originalname}`)
//     }
// })


// Now we can use this storage config which we created above
// This middleware upload is created with which we can store image in upload folder
// const upload = multer({storage: storage})   

// foodRouter.post("/add", upload.single("image"), addFood)

foodRouter.get('/list', listFood)

foodRouter.post('/remove', removeFood)



export default foodRouter