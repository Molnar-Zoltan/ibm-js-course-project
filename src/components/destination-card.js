

export function DestinationCard(name, imageUrl, description) {

    const baseUrl = import.meta.env.BASE_URL;

    return `
        <div class="w-80 bg-gray-700/60 rounded-lg p-4 flex flex-col items-center">
            <div class="w-full h-48 bg-cover bg-center rounded-lg mb-4">
                <img src="${baseUrl + imageUrl}" alt="${name}" class="w-full h-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="font-bold text-xl text-center">${name}</h3>
                <p class="destination-description">${description}</p>
            </div>
            <button class="mt-2 px-4 py-2 bg-gray-600/80 rounded-lg hover:bg-gray-600/90 active:bg-gray-600/90 cursor-pointer font-semibold">
                Visit
            </button>
            
        </div>
    `;
}   