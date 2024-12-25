import axios from "../axios"


const handleLoginAPI = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`)
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    })
}

const editUserService = (user) => {
    return axios.put('/api/edit-user', user)
}

const getAllCodeServices = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

export {
    handleLoginAPI,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllCodeServices
}