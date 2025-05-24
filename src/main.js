import './style.css'
import { Home } from './pages/home.js'
import { About } from './pages/about.js'
import { Contact } from './pages/contact.js'
import { Navbar } from './components/navbar.js'
import { Sidebar } from './components/sidebar.js'

import Navigo from 'navigo'


const root = document.getElementById('root');
const navbar = document.getElementById('navbar');
const sidebar = document.getElementById('sidebar');

navbar.innerHTML = Navbar();
sidebar.innerHTML = Sidebar();


const router = new Navigo('/', { hash: false });


router.on({
  '/': () => {
    root.innerHTML = Home();
  },
  '/about': () => {
    root.innerHTML = About();
  },
  '/contact': () => {
    root.innerHTML = Contact();
  }
}).resolve();

router.updatePageLinks();



