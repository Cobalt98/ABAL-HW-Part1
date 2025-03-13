//Part1//

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.innerHTML = "<h1> DOM Manipulation </h1>" 
mainEl.classList.add('flex-ctr')

//Part 2//

const topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around')

//Part 3//

const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href:'/action'},
];

menuLinks.forEach((link) => {
    //Create an <a> element
    const anchor = document.createElement('a');
    anchor.setAttribute('href', link.href)
    console.log(anchor)
    console.log(link.href);
    topMenuEl.appendChild(anchor);
})

