export const validateToken = async (token: string) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/user/token/validate/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error: any) {
        return { error: error.message };
    }
};
  
export const isDefined = (value: any) => {
    return value !== undefined && value !== null;
}