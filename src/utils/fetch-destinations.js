

export async function fetchDestinations() {
    try {
        const response = await fetch('/src/data/travel_recommendation_api.json');

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching destinations:', error);
        return [];
    }
}
