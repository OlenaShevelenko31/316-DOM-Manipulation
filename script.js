const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = `var(--main-bg)`;

const title = document.createElement('h1');
title.innerHTML = "DOM Manipulation";
mainEl.appendChild(title);

mainEl.setAttribute('class', 'flex-ctr');
// mainEl.classList.add('flex-ctr'); another way


// ========================= Creating menu bar =========================
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height= "100%";
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

topMenuEl.setAttribute('class' , 'flex-around');
// topMenuEl.classList.add('flex-around'); another way


// ========================= Adding Menu Buttons =========================
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

menuLinks.forEach(link=>{
    const a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);
})

// ========================= Adding Interactivity =========================
