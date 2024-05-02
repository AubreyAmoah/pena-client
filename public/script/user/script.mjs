import { defaultUrl } from "../global.mjs"

export const getUserUsername = async(id) => {
    try {
        const response = await fetch(`${defaultUrl}/api/users/getuser/${id}`,{
            credentials: 'include',
            method: 'GET',
        })

        const result = await response.json()

        const username = result.username;

        return username;
    } catch (error) {
        console.error(error)
        return "Error occurred"
    }
}