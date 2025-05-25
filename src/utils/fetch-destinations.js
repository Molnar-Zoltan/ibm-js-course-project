

export async function fetchDestinations() {
    try {
        const baseUrl = import.meta.env.BASE_URL;
        const apiLocation = '/data/travel_recommendation_api.json';
        const response = await fetch(baseUrl + apiLocation);

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching destinations:', error);
        return null;
    }
}
