

export function Navbar() {

    const navItems = [
        { name: 'Home',         path: '/'           },
        { name: 'About Us',        path: '/about'      },
        { name: 'Contact Us',   path: '/contact'    }
    ];

    const navList = navItems.map(item => {
        return `
            <li>
                <a href="${item.path}" data-navigo class="hover:text-red-600 active:text-red-600">${item.name}</a>
            </li>
        `;
    }).join('');


    return (
        `
            <ul class="flex font-bold text-md xl:text-xl gap-8">
                ${navList}
            </ul>
        `
    );

}