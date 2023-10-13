import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectSign = ({ children }) => {
    const token = localStorage.getItem('token')
    if (!token) {
        return children
    }
    return <Navigate to='/one' />
}

export default ProtectSign