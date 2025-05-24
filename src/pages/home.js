

export function Home() {
    return (
        `
            <section class="flex h-full justify-between px-10">
                <div id="home-text" class="flex flex-col gap-4 w-150 justify-center -mt-25">
                    <h1 class="text-4xl xl:text-7xl font-bold">EXPLORE DREAM DESTINATION</h1>
                    <p class="text-lg">
                        It encourages exploration of unfamiliar territories, embracing diverse cultures and landscapes, 
                        while pursuing the desired destination that captivates the heart and ignites a sense of wonder.
                    </p>
                    <button type="button" id="exploreButton" class="px-2 py-1 bg-gray-700/80 rounded-lg hover:bg-gray-700/90 active:bg-gray-700/90 cursor-pointer w-40">
                        BOOK NOW
                    </button>
                </div>
                <div id="search-results" class="flex items-center justify-center">
                </div>
            </section>
        `
    );
}