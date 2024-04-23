const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = `var(--main-bg)`;

// const title = document.createElement('h1');
// title.innerHTML = "DOM Manipulation";
mainEl.innerHTML = ('<h1>DOM Manipulation</h1> ')
// mainEl.appendChild(title);

mainEl.setAttribute('class', 'flex-ctr');
// mainEl.classList.add('flex-ctr'); another way


// ========================= Creating menu bar and sub-bar =========================
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height= "100%";
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.setAttribute('class' , 'flex-around');
// topMenuEl.classList.add('flex-around'); another way

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.add('flex-around');

// ========================= Adding Menu  and SubMenu Buttons =========================
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

menuLinks.forEach(link=>{
    const a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);
})


// ========================= Adding Interactivity =========================
const topMenuLinks = document.querySelectorAll('nav a.active');

topMenuEl.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (!e.target.matches('a')) { // Immediately return if the element clicked was not an <a> element
        return;
    }

    console.log(e.target.textContent); //verify if the handler is working.


    e.target.classList.toggle('active'); //add the active class to the <a> element that was clicked
   
   
    topMenuLinks.forEach(link => { // remove active class if not clicking 
        if (link !== e.target) {
            link.classList.remove('active');
        }
    });
    


    // ========================= Adding Submenu Interaction =========================
    const clickedLink = menuLinks.find(link => link.text === e.target.textContent);
    if (!e.target.classList.contains('active')) {
        subMenuEl.style.top = '0';
    } else {
        if (clickedLink && clickedLink.subLinks && clickedLink.subLinks.length > 0) {
            subMenuEl.style.top = '100%';
            buildSubmenu(clickedLink.subLinks); // Call the helper function with the subLinks array
        } else {
            subMenuEl.style.top = '0';
        }
    }

    function buildSubmenu(subLinks) {
        subMenuEl.innerHTML = '';
        subLinks.forEach(link => {
            const a = document.createElement('a');
            a.setAttribute('href', link.href);
            a.textContent = link.text;
            subMenuEl.appendChild(a);
        });
    }
    
});


// Adding Interactions to Submenu Items
subMenuEl.addEventListener('click', function(e) {
    e.preventDefault();
    if (!e.target.matches('a')) { // Immediately return if the element clicked was not an <a> element
        return;
    }
    console.log(e.target.textContent); // Log the content of the <a> to verify the handler is working.
    subMenuEl.style.top = '0'; // Set the CSS top property of subMenuEl to 0.
    topMenuLinks.forEach(link => { // Remove the active class from each <a> element in topMenuLinks
        link.classList.remove('active');
    });
    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`; // Update the contents of mainEl with the clicked submenu item
});






