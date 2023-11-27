// Async operations can be handled directly in React components or other JS files
const getCharacters = async (user) => {
    try {
        const response = await fetch('character-finder-backend-production.up.railway.app/characters/sendCharacters');
        const characters = await response.json();
        return characters;
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

const addUser = async (user) => {
    try {
        const response = await fetch('character-finder-backend-production.up.railway.app/users/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        const json = await response.json();
        console.log(json);
        
    } catch (error) {
        console.error('Error:', error);
        return null; // Return null or handle the error appropriately
    }
}

const getData = async () => {
    try {
        const response = await fetch('character-finder-backend-production.up.railway.app/users/sendUsers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Check if the response status indicates an error
        if (!response.ok) {
            // You can throw a new error with the response status
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to be caught by the caller
    }
}

export { getCharacters , addUser , getData };
