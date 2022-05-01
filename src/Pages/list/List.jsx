import React from 'react'
import './List.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Database from "../../components/database/Database"


const List = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Database />
            </div>
        </div>
    )
}

export default List

