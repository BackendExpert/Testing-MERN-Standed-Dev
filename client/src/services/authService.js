import axios from 'axios';

const LoginService = async (userData) => {
    const res = await axios.post(import.meta.env.VITE_APP_API + `/auth/Login/` + userData)

    if (res.data.token) {
        localStorage.setItem('token', res.data.token);
    }

    return res.data
}