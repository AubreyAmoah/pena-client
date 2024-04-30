import { defaultUrl } from "../../global.mjs";

export const getMyDetails = async (user) => {
    try {
        const response = await fetch(`${defaultUrl}/api/users/me`,{
            method: 'GET',
            credentials : 'include',
        })

        const result = await response.json();

        console.log(result)

        if(result.error === 'Invalid token') {
            window.location.href = "/"
        }

        user.innerText = result.username
    } catch (error) {
        console.log(error)
    }
} 