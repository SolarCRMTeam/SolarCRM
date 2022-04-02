import React from 'react'
import { userStore } from '../../stores/UserStore'

export const MyAccount = () => {
    return (
        <div>
            Witaj, {userStore.representative?.name}
        </div>
    )
}
