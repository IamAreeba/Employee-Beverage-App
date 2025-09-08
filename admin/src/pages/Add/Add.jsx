import React, { useEffect, useState } from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import axiosInstance from '../../axios'

const Add = ({ url }) => {

    // const url = "http://localhost:5000"
    // Setting the image
    const [image, setImage] = useState(false)

    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Coffee",
    })

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    // Whenever our state changes this get triggered
    useEffect(() => {
        // console.log(data)
    }, [data])


    // Now we arre doint the API call
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        // Now we have to insert this form data in one form data
        // const formData = new FormData()
        // formData.append("name", data.name)
        // formData.append("description", data.description)
        // formData.append("price", Number(data.price))
        // formData.append("category", data.category)
        // formData.append("image", image)

        // Now doing API call
        // We tested on backend with passing data throigh form so passed formData
        // const response = await axiosInstance.post(`${url}/api/food/add`, formData)
        // if (response.data.success) {
        //     setData({
        //         name: "",
        //         description: "",
        //         price: "",
        //         category: "Coffee",
        //     })
        //     setImage(false)
        //     toast.success(response.data.message)
        // }
        // else {
        //     toast.error(response.data.message)
        // }


    }



    return (
        <div className='add' >
            {/* <form onSubmit={onSubmitHandler} className='flex-col'> */}
             <form onSubmit={onSubmitHandler} className='flex-col'>
                <div className="add-img-upload flex-col">
                    <p> Upload Image </p>
                    <label htmlFor="image">
                        <img
                            src={image
                                ? URL.createObjectURL(image)
                                : assets.upload_area}
                            alt=""
                        />
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])} type="file"
                        id='image'
                        hidden
                        required
                    />
                </div>

                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        name='name'
                        placeholder='Type Here'
                    />
                </div>

                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea
                        onChange={onChangeHandler}
                        value={data.description}
                        name="description"
                        rows='6'
                        placeholder='Write Content Here'
                    ></textarea>
                </div>

                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="Coffee">Coffee</option>
                            <option value="Juice">Juice</option>
                            <option value="GreenTea">GreenTea</option>
                            <option value="RegularTea">RegularTea</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                        </select>
                    </div>


                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input
                            onChange={onChangeHandler}
                            value={data.price}
                            type="Number"
                            name='price'
                            placeholder='$20'
                        />
                    </div>

                </div>


                <button type='submit' className='add-btn' > ADD </button>

            </form>
        </div>
    )
}

export default Add