import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const User = () => {
    const { isLoading, error, user } = useTypedSelector(state => state.user)
    const { getUserById } = useActions()
    
    return (
        <div>
            <button onClick={() => getUserById(1)}>
                Get user
            </button>
            {
                isLoading ? 'loading' : error ? error : user?.name ? 
                <h1>User: {user.name} </h1> : <h1>User not found</h1>
            }
        </div>
    )
}

export default User