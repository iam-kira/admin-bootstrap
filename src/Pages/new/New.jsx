import React from 'react'
import './New.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Button } from '@mui/material'
import { Send } from '@mui/icons-material'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined'
import { useState } from 'react'





const New = ({ inputs, title }) => {

    const [file, setFile] = useState("")

    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://static.thenounproject.com/png/1520737-200.png"} alt="" />
                    </div>
                    <div className="right">
                        <form >

                            <div className="formInput">
                                <label htmlFor="file" > Image
                                    {/* <DriveFolderUploadOutlined /> */}
                                    <Button className="icon" color="primary" variant='text' component="span"><AddAPhotoOutlinedIcon /></Button>
                                </label>
                                <input accept="image/*" onChange={e => setFile(e.target.files[0])} type="file" id="file" style={{ display: "none" }} />
                            </div>
                            {inputs.map(input => (


                                <div className="formInput" key={input.id}>
                                    <label >{input.label} </label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}

                            <Button variant='contained' endIcon={<Send />}>Send</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New

