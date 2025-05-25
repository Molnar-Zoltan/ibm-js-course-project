

export function TeamCard(name, position) {

    const baseUrl = import.meta.env.BASE_URL;
    const image = "/icons/person.svg";
    const imageSize = 10;

    return (
        `
            <div class="flex gap-2 bg-gray-800/40 py-4 px-4 rounded-lg">
                <div>
                    <img src="${baseUrl + image}" alt="Profile Picture" class="w-${imageSize} h-${imageSize} rounded-full object-cover" />
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-lg font-bold text-white">${name}</p>
                    <p class="text-sm text-gray-300">${name} is responsible for...</p>
                    <div class="py-2 px-5 bg-gray-600/70 rounded-lg text-center font-bold mt-2">${position}</div>
                </div>
            </div>
        `
    );
}