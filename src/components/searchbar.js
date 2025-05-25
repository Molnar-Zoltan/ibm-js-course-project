import { categories } from "../utils/categories";


export function SearchBar() {

    const destinationOptions = categories.map(category => 
        `<option value="${category.charAt(0).toUpperCase() + category.slice(1)}">`
    ).join('');

    return (
        `
            <div class="flex items-center justify-center w-80">
                <form id="searchForm" class="flex items-center bg-gray-800/30 rounded-lg px-4 py-2">
                    <input list="destinations" id="searchInput" placeholder="Enter a destination..." maxlength="10" 
                        class="text-white placeholder-gray-400 outline-none text-sm" />

                    <datalist id="destinations">
                        ${destinationOptions}
                    </datalist>

                    <button type="submit" id="searchButton" class="text-sm px-4 py-2 bg-gray-700/80 rounded-lg hover:bg-gray-700/90 active:bg-gray-700/90 cursor-pointer font-semibold">
                        Search
                    </button>

                    <button type="button" id="clearButton" class="text-sm ml-2 px-4 py-2 bg-gray-700/80 rounded-lg hover:bg-gray-700/90 active:bg-gray-700/90 cursor-pointer font-semibold">
                        Clear
                    </button>
                </form>
            </div>
        `
    );
}