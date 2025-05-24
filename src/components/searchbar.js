

export function SearchBar() {

    return (
        `
            <div class="flex items-center justify-center w-full">
                <form id="searchForm" class="flex items-center w-full max-w-2xl bg-gray-800/30 rounded-lg px-4 py-2">
                    <input type="text" id="searchInput" placeholder="Search for destinations..." class="flex-grow bg-transparent text-white placeholder-gray-400 outline-none" />

                    <button type="submit" id="searchButton" class="ml-2 px-4 py-2 bg-gray-700/80 rounded-lg hover:bg-gray-700/90 active:bg-gray-700/90 cursor-pointer font-semibold">
                        Search
                    </button>

                    <button type="submit" id="clearButton" class="ml-2 px-4 py-2 bg-gray-700/80 rounded-lg hover:bg-gray-700/90 active:bg-gray-700/90 cursor-pointer font-semibold">
                        Clear
                    </button>
                </form>
            </div>
        `
    );
}