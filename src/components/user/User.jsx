import React from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'

const User = () => {
    const { isLoading, error, user } = useSelector(state => state.user)
    const { getUserById } = useActions()
    
    return (
        <div>
            <button onClick={() => getUserById(1)}>
                Get user
            </button>
            {
                isLoading ? 'loading' : error ? error.message : user?.name ? 
                <h1>User: {user.name} </h1> : <h1>User not found</h1>
            }
        </div>
    )
}

export default User