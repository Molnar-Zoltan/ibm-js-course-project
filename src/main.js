import './style.css'
import { Home } from './pages/home.js'
import { About } from './pages/about.js'
import { Contact } from './pages/contact.js'
import { Navbar } from './components/navbar.js'
import { Sidebar } from './components/sidebar.js'
import { SearchBar } from './components/searchbar.js'

import Navigo from 'navigo'


const root = document.getElementById('root');
const navbar = document.getElementById('navbar');
const sidebar = document.getElementById('sidebar');
const searchbarContainer = document.getElementById('searchbar');


navbar.innerHTML = Navbar();
sidebar.innerHTML = Sidebar();

const router = new Navigo('/', { hash: false });


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
  searchbarContainer.innerHTML = url === '' ? SearchBar() : '';
}