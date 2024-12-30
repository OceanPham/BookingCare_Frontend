import { toast } from 'react-toastify';
import { createNewUserService, deleteUserService, editUserService, getAllCodeServices, getAllUsers } from '../../services/userService';
import actionTypes from './actionTypes';

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeServices("GENDER")
            if (res && res?.errCode === 0) {
                dispatch(fetchGenderSuccess(res?.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (error) {
            dispatch(fetchGenderFailed());
            console.log('fetch gender start error', error);
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeServices("POSITION")
            if (res && res?.errCode === 0) {
                dispatch(fetchPositionSuccess(res?.data))
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (error) {
            dispatch(fetchPositionFailed());
            console.log('fetch POSITION start error', error);
        }
    }
}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeServices("ROLE")
            if (res && res?.errCode === 0) {
                dispatch(fetchRoleSuccess(res?.data))
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (error) {
            dispatch(fetchRoleFailed());
            console.log('fetch ROLE start error', error);
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const saveUserSuccess = () => ({
    type: actionTypes.SAVE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.SAVE_USER_FAILED
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success('Create new user successfully! ')
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                dispatch(saveUserFailed())
            }
        } catch (error) {
            dispatch(saveUserFailed());
            console.log('create new user failed');
        }
    }
}

export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data)
            console.log('res: ', res);
            if (res && res.errCode === 0) {
                toast.success('Edit user successfully!')
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                dispatch(editUserFailed())
            }
        } catch (error) {
            dispatch(editUserFailed())
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL")
            if (res && res?.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res?.users.reverse()))
            } else {
                toast.success('fetch all users error! ')
                dispatch(fetchAllUsersFailed())
            }
        } catch (error) {
            dispatch(fetchAllUsersFailed());
            console.log('fetch all users error', error);
            toast.success('fetch all users error! ')

        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED
})

export const deleteNewUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success('Delete user successfully! ')
                dispatch(deleteUsersSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.success('Delete user failed! ')
                dispatch(deleteUsersFailed())
            }
        } catch (error) {
            toast.success('Delete user failed! ')
            dispatch(deleteUsersFailed());
            console.log('create new user failed');
        }
    }
}

export const deleteUsersSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUsersFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

