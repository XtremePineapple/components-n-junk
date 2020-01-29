import axios from 'axios'

const API = "https://acme-users-api-rev.herokuapp.com/"

const fetchUsers = async function(){
    return axios.get(`${API}api/users`)
        .then(response => response.data)
}

export {fetchUsers}