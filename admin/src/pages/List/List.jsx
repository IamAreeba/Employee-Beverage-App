import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import axiosInstance from '../../axios'

const List = ({url}) => {

    // const url = "http://localhost:5000"
    const [List, setList] = useState([])


    // Fetching all food data from DB
    const fetchList = async () => {
      const response = await axiosInstance.get('/api/food/list')
      console.log(response.data)
      if(response.data.success){
        setList(response.data.data)
      }
      else{
        toast.error("Error")
      }
    }

    // Removing specific food from DB using its ID
    const removeFood = async (foodId) => {
      console.log(foodId)
      const response = await axios.post(`${url}/api/food/remove`, {id: foodId})
      await fetchList()
      if(response.data.success){
        toast.success(response.data.message)
      }
      else{
        toast.error("Error")
      }
    }



    // When webpage loads we will run the fetchList
    useEffect(() => {
      fetchList()
    }, [])


  return (

    <div className='list add flex-col' >
      <p> All Food Lists </p>
        <div className="list-table">
          <div className="list-table-format title">
            <b> Image </b>
            <b> Name </b>
            <b> Category </b>
            <b> Price </b>
            <b> Action </b>
          </div>
          {List.map((item, index) => {
            return (
              <div key={index} className="list-table-format">
                <img src={`${url}/images/`+item.image} alt="" />
                <p> {item.name} </p>
                <p> {item.category} </p>
                <p> {item.price} </p>
                <p className='cursor' onClick={() => removeFood(item._id) } > X </p>
              </div>
            )
          })}

        </div>
    </div>
  )
}

export default List