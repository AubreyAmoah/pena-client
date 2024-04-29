import { defaultUrl } from "../../global.mjs";



export const handleLogout = async () => {
    try {
        const response = await fetch(`${defaultUrl}/api/auth/logout`);

        const result = await response.json();

        console.log(result)
    } catch (error) {
        console.error(error)
    }
}
