import './style.css'
import { Home } from './pages/home.js'
import { About } from './pages/about.js'
import { Contact } from './pages/contact.js'
import { Navbar } from './components/navbar.js'
import { Sidebar } from './components/sidebar.js'
import { SearchBar } from './components/searchbar.js'
import Navigo from 'navigo'
import { categories } from './utils/categories.js'
import { listRecommendations } from './utils/list-recommendations.js';

const root = document.getElementById('root');
const navbar = document.getElementById('navbar');
const sidebar = document.getElementById('sidebar');
const searchbarContainer = document.getElementById('searchbar');
searchbarContainer.innerHTML = SearchBar();

navbar.innerHTML = Navbar();
sidebar.innerHTML = Sidebar();

//const router = new Navigo('/', { hash: false });
const baseUrl = import.meta.env.BASE_URL;
const router = new Navigo(baseUrl);


router.on({
  '/': (match) => {
    loadPage(Home(), match.url);
  },
  '/about': (match) => {
    loadPage(About(), match.url);
  },
  '/contact': (match) => {
    loadPage(Contact(), match.url);
  }
}).resolve();

router.updatePageLinks();


function loadPage(page, url) {
  root.innerHTML = page;

  url !== '' 
    ? searchbarContainer.firstElementChild.classList.add('hidden') 
    : searchbarContainer.firstElementChild.classList.remove('hidden');

}

const searchForm = document.getElementById("searchForm");
searchForm && searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let searchInputValue = document.getElementById("searchInput").value.toLowerCase().trim();
    if (!searchInputValue) return;
    let category = "";
    
    const isSearchValid = categories.some(c => {
        category = c.toLowerCase();
        searchInputValue === "country" && (searchInputValue = searchInputValue.slice(0, -1));
        return category.startsWith(searchInputValue);
    });
    
    if (isSearchValid) {
        listRecommendations(category);
    } else {
        document.getElementById("search-results").innerHTML = `
            <div class="text-center text-gray-100 bg-gray-500/30 rounded-lg p-6">
                <p class="text-lg">No results found.</p>
                <p class="text-sm">Please try a different search category.</p>
            </div>
        `;
    }
});


const clearButton = document.getElementById("clearButton");
clearButton && clearButton.addEventListener("click", function() {
    document.getElementById("searchInput").value = "";
});
