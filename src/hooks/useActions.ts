import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { actions } from "../store/favorites/favorites.slice"
import * as userActions from "../store/user/user.actions"

const rootActions = {
    ...actions,
    ...userActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch)
    }, [dispatch])

}