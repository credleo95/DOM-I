const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBar = document.querySelectorAll('a')
console.log(navBar);
navBar[0].textContent = siteContent["nav"]["nav-item-1"]    
navBar[1].textContent = siteContent["nav"]["nav-item-2"]
navBar[2].textContent = siteContent["nav"]["nav-item-3"]
navBar[3].textContent = siteContent["nav"]["nav-item-4"]
navBar[4].textContent = siteContent["nav"]["nav-item-5"]
navBar[5].textContent = siteContent["nav"]["nav-item-6"]

navBar.forEach(element => element.style.color = "green");

const navTag = document.querySelector("nav")
const learnLink = document.createElement("a")
learnLink.textContent = "Learn More"
navTag.appendChild(learnLink)
learnLink.style.color = "green"

const partnersLink = document.createElement("a")
partnersLink.textContent = "Our Partners"
navTag.prepend(partnersLink);
partnersLink.style.color = "green"




// navigational bar text above
 const lineBreak = document.createElement("BR")
const heroStatement = document.querySelector('h1')
heroStatement.innerHTML = 'DOM <br> Is <br> Awesome'


const firstButton = document.querySelector('button')
firstButton.textContent = siteContent["cta"]["button"]

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent["cta"]["img-src"] 
// middle content above

const pHeadings = document.querySelectorAll('.text-content h4')
console.log(pHeadings);
pHeadings[0].textContent = siteContent["main-content"]["features-h4"]
pHeadings[1].textContent = siteContent["main-content"]["about-h4"]
pHeadings[2].textContent = siteContent["main-content"]["services-h4"]
pHeadings[3].textContent = siteContent["main-content"]["product-h4"]
pHeadings[4].textContent = siteContent["main-content"]["vision-h4"]

// paragraph headings organized via nodeList above 

const paragraphs = document.querySelectorAll('.text-content p')
console.log(paragraphs);
paragraphs[0].textContent = siteContent["main-content"]["features-content"]
paragraphs[1].textContent = siteContent["main-content"]["about-content"]
paragraphs[2].textContent = siteContent["main-content"]["services-content"]
paragraphs[3].textContent = siteContent["main-content"]["product-content"]
paragraphs[4].textContent = siteContent["main-content"]["vision-content"]

// full paragraphs organized via nodeList above

const midImage = document.querySelector("#middle-img")
midImage.src = siteContent["main-content"]["middle-img-src"]

// Image separating top paragraphs from bottom paragraphs above

const addressHeading = document.querySelector(".contact h4")
addressHeading.textContent = siteContent["contact"]["contact-h4"]

const addressInfo = document.querySelectorAll(".contact p")
console.log(addressInfo);
addressInfo[0].innerHTML = "123 Way 456 Street <br> Somewhere,USA"
addressInfo[1].textContent = siteContent["contact"]["phone"]
addressInfo[2].textContent = siteContent["contact"]["email"]

const copyright = document.querySelector("footer p")
copyright.textContent = siteContent["footer"]["copyright"]

// Address and copyright section above







