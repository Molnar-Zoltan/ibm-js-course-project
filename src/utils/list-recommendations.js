
import { fetchDestinations } from "./fetch-destinations";   
import { DestinationCard } from "../components/destination-card";   

export async function listRecommendations(category) {
    const destinations = await fetchDestinations();
    if (!destinations) return

    let destinationList = '';

    if (category === "countries") {
        const citiesNum = destinations[category].length;
        const randomIndex = Math.floor(Math.random() * citiesNum);

        destinationList = destinations[category][randomIndex]['cities'].map(destination => {
            return DestinationCard(destination.name, destination.imageUrl, destination.description);
        }).join('');

    }
    else {
        destinationList = destinations[category].map(destination => {
            return DestinationCard(destination.name, destination.imageUrl, destination.description);
        }).join('');
    }

    document.getElementById("search-results").innerHTML = destinationList;
}