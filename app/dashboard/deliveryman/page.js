"use client"

import React, { useState, useEffect } from 'react';


const page = () => {

    const [editButtonClicked, setEditButtonClicked] = useState(false)

    const [deliveryManName, setDeliveryManName] = useState("")
    const [deliveryManPhone, setDeliveryManPhone] = useState("")
    
    let [deliveryManDetail, setDeliveryManDetail] = useState([
        {
        deliveryManName: "Raju",
        deliveryManPhone: "014345767"
        },
        {
        deliveryManName: "Dev",
        deliveryManPhone: "014345767"
        },
        {
        deliveryManName: "Zoru",
        deliveryManPhone: "014345767"
        },
        {
        deliveryManName: "Chris",
        deliveryManPhone: "014345767"
        }
    ])

    let [deliveryManDetailId, setDeliveryManDetailId] = useState("")
    let [deliveryManDetailName, setDeliveryManDetailName] = useState("")
    let [deliveryManDetailPhone, setDeliveryManDetailPhone] = useState("")
    
    const handleNameChange = (e) => {
        setDeliveryManName(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setDeliveryManPhone(e.target.value)
    }

    const handleSubmit = (e) => {

        if(deliveryManName && deliveryManPhone)
        {
        deliveryManDetail.push({deliveryManName,deliveryManPhone})
        let arr = [...deliveryManDetail]
        setDeliveryManDetail(arr)
        }
        
        setDeliveryManName("")
        setDeliveryManPhone("")
    }

    // Edit 
    const handleEdit = (deliveryManName, deliveryManPhone, index) => {
        setEditButtonClicked(index)
        setDeliveryManName(deliveryManName)
        setDeliveryManPhone(deliveryManPhone)
       
    }

    // update
    // const handleUpdate = (index) => {
        
    // }

    // delete
    const handleDelete = (id) => {
        deliveryManDetail.splice(id, 1)
        let arr = [...deliveryManDetail]
        setDeliveryManDetail(arr)
    }

    



    return (
        <div className="pt-[80px] p-[10px] w-full">
            <div className="deliveryMan-head mb-[50px]">
                <h2 className='text-3xl font-bold text-center mt-5 text-p-red'>Manage Delivery Man</h2>
            </div>

            <div className="customer-main flex flex-col gap-4">
                    <div className="form-input-name flex flex-col gap-2 w-[50%] mx-auto">
                        <label htmlFor="Name">Name: </label>
                        <input type="text" placeholder="Enter Delivery Man's Name Here" className='border rounded-lg py-[10px] px-3'
                         value={deliveryManName} onChange={handleNameChange}
                        />
                    </div>
                    <div className="form-input-id flex flex-col gap-2 w-[50%] mx-auto">
                    <label htmlFor="ID">Phone Number: </label>
                        <input type="text" placeholder="Enter Delivery Man's Phone Number Here" className='border rounded-lg py-[10px] px-3'
                        value={deliveryManPhone} onChange={handlePhoneChange}
                        />
                    </div>
                    {
                        editButtonClicked
                        ?
                        <button className="bg-p-red btn py-[15px] px-[20px] rounded-lg w-[50%] mx-auto font-bold text-[20px] text-p-yellow text-center cursor-pointer"
                        onClick={() => handleUpdate}
                        >
                            Update
                        </button>
                        :
                        <button className="bg-p-red btn py-[15px] px-[20px] rounded-lg w-[50%] mx-auto font-bold text-[20px] text-p-yellow text-center cursor-pointer"
                        onClick={() => {handleSubmit()}}
                        >
                            Submit
                        </button>     
                    }
                               
            </div>

            <div className="pendingOrder-main w-full">
                
                <div className="deliveryMan-head mt-[100px] mb-[50px]">
                    <h2 className='text-3xl font-bold text-center mt-5 text-p-red'>Manage your Delivery Man</h2>
                </div>

                <div className="pendingOrder-inner flex flex-col flex-col-reverse flex-wrap gap-[50px] justify-center items-center">
                    {deliveryManDetail.map((item, index) => (

                        <div key={index} className="rounded-lg shadow-lg p-[25px] my-[15px] w-full">

                            {/* Sumon's code here */}
                            <div className="blank"></div>

                            <p className='text-center pb-[30px] font-bold text-[50px] text-p-blue'>Name: {item.deliveryManName}</p>
                            <p className='text-center pb-[30px] font-bold text-[50px] text-p-blue'>Phone: {item.deliveryManPhone}</p>
                            <div className="btn-main flex gap-3 justify-end items-center">
                            { 
                            editButtonClicked === index
                            ?
                            ""
                            :
                            <div className="flex gap-3">
                                <button className='edit-btn  px-[30px] py-[10px]  rounded-lg bg-green-500 text-white cursor-pointer'
                                onClick={() => handleEdit(item.deliveryManName,item.deliveryManPhone, index)}
                                >
                                    Edit
                                </button>
                                <button className='px-[30px] py-[10px] rounded-lg bg-red-500 text-white cursor-pointer'
                                onClick={()=> handleDelete(index)}
                                >
                                Delete
                                </button>
                            </div>
                            }
                            
                                
                                
                            </div>
                    </div>
                    
                ))}
                
                
                
                </div>
            </div>
        </div>
    )
}

export default page