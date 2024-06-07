arrItem = [
  {
    img: "../assets/images/shoes/zoom-vomero-5-womens-shoes-81TPKW.png",
    title: "Nike Zoom Vomero 5",
    type: "Women's Shoes",
    color: '1 color',
    price: '$ 160'
  },
  {
    img: "../assets/images/shoes/air-jordan-1-low-se-mens-shoes-r4hJb1.png",
    title: "Air Jordan 1 Low SE",
    type: "Men's Shoes",
    color: '1 color',
    price: '$ 125'
  },
  {
    img: "../assets/images/shoes/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png",
    title: "Air Jordan 1 Retro High OG",
    type: "Men's Shoes",
    color: '2 colors',
    price: '$ 160'
  },
  {
    img: "../assets/images/shoes/air-max-1-womens-shoes-0vW0ds.png",
    title: "Nike Air Max 1",
    type: "Women's Shoes",
    color: '1 color',
    price: '$ 140'
  },
  {
    img: "../assets/images/shoes/air-vapormax-2023-flyknit-mens-shoes-vSm5p2.jpeg",
    title: "Nike Air VaporMax 2023 Flyknit",
    type: "Men's Shoes",
    color: '1 color',
    price: '$ 210'
  },
  {
    img: "../assets/images/shoes/gt-hustle-2-womens-basketball-shoes-MpbrH6.png",
    title: "Nike G.T. Hustle 2",
    type: "Women's Shoes",
    color: '1 color',
    price: '$ 170'
  },
  {
    img: "../assets/images/shoes/jordan-poolside-jumpman-little-kids-graphic-t-shirt-219wQk.png",
    title: "Jordan Poolside Jumpman",
    type: "Little Kids' Graphic T-Shirt",
    color: '1 color',
    price: '$ 22'
  },
  {
    img: "../assets/images/shoes/jordan-spizike-low-mens-shoes-LDT8cp.png",
    title: "Jordan Spizike Low",
    type: "Men's Shoes",
    color: '1 color',
    price: '$ 160'
  },
  {
    img: "../assets/images/shoes/sb-big-kids-chino-skate-shorts-w5Xpv8.png",
    title: "Nike SB",
    type: "Big Kids'chino Skate Shorts",
    color: '2 colors',
    price: '$ 50'
  },
  {
    img: "../assets/images/shoes/sportswear-phoenix-fleece-womens-over-oversized-crew-neck-sweatshirt-3rWtjN.png",
    title: "Nike Sportwear Phoenix Fleece",
    type: "Women's Over-Oversized Crew-Neck Sweatshirt",
    color: '4 colors',
    price: '$ 75'
  },
  {
    img: "../assets/images/shoes/v2k-run-shoes-ZKMJLX.png",
    title: "Nike V2K Run",
    type: "Shoes",
    color: '3 colors',
    price: '$ 120'
  },
  {
    img: "../assets/images/shoes/waffle-debut-vintage-womens-shoes-rfRkv2.png",
    title: "Nike Waffle Debut Vintage",
    type: "Women's Shoes",
    color: '1 color',
    price: '$ 80'
  },
  {
    img: "../assets/images/shoes/air-jordan-1-low-method-of-make-womens-shoes-tq9cmG.png",
    title: "Air Jordan 1 Low Method of Make",
    type: "Women's Shoes",
    color: '2 colors',
    price: '$ 135'
  },
  {
    img: "../assets/images/shoes/air-jordan-11-retro-low-black-varsity-royal-mens-shoes-MNm675.png",
    title: 'Air Jordan 11 Retro Low "Black/Varsity Royal"',
    type: "Men's Shoes",
    color: '1 color',
    price: '$ 190'
  },
  {
    img: "../assets/images/shoes/dunk-low-big-kids-shoes-fRhdtf.png",
    title: "Nike Dunk Low",
    type: "Big Kid's Shoes",
    color: '1 color',
    price: '$ 90'
  },
  {
    img: "../assets/images/shoes/dunk-low-retro-mens-shoes-5FQWGR.png",
    title: "Nike Dunk Low Retro",
    type: "Men's Shoes",
    color: '2 colors',
    price: '$ 125'
  },
  {
    img: "../assets/images/shoes/gt-cut-3-womens-basketball-shoes-9T5tP5.png",
    title: "Nike G.T.Cut.3",
    type: "Women's Shoes",
    color: '1 color',
    price: '$ 190'
  },
  {
    img: "../assets/images/shoes/air-jordan-1-mid-womens-shoes-Kg3nnj.png",
    title: "Air Jordan 1 Mid",
    type: "Women's Shoes",
    color: '2 colors',
    price: '$ 125'
  },
]
function hoverDrop(x){
    if (x === 1){
      document.querySelector('#new-feature').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
    if (x === 2){
      document.querySelector('#men').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
    if (x === 3){
      document.querySelector('#women').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
    if (x === 4){
      document.querySelector('#kids').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
    if (x === 5){
      document.querySelector('#sales').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
    if (x === 6){
      document.querySelector('#jordan').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
  }
  function hoverHide(x){
    if (x === -1){
      document.querySelector('#new-feature').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
    if (x === -2){
      document.querySelector('#men').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
    if (x === -3){
      document.querySelector('#women').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
    if (x === -4){
      document.querySelector('#kids').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
    if (x === -5){
      document.querySelector('#sales').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
    if (x === -6){
      document.querySelector('#jordan').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
  }

// Hamburger Sidebar
function openNav() {
    document.getElementById("mySidenav").classList.toggle('w-[55%]');
    document.getElementById('overlay-blur').classList.remove('hidden');
    document.querySelector('body').classList.add('overflow-y-hidden')
}

function closeNav() {
    document.getElementById("mySidenav").classList.toggle('w-[55%]');
    document.getElementById('overlay-blur').classList.add('hidden');
    document.querySelector('body').classList.remove('overflow-y-hidden')
}

function hideDropDown(x){
    if (x === -1){
        let dropdownside = document.getElementById('newfeature');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -2){
        let dropdownside = document.getElementById('men-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -3){
        let dropdownside = document.getElementById('women-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -4){
        let dropdownside = document.getElementById('kids-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -5){
        let dropdownside = document.getElementById('sales-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -6){
        let dropdownside = document.getElementById('jordan-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
}

function stickyDropdown(x){
    if (x === 1){
        let dropdownside = document.getElementById('sales');
        dropdownside.classList.toggle('h-[100px]')
    }
    if (x === 2){
        let dropdownside = document.getElementById('men-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === 3){
        let dropdownside = document.getElementById('women-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === 4){
        let dropdownside = document.getElementById('kids-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === 5){
        let dropdownside = document.getElementById('sales-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === 6){
        let dropdownside = document.getElementById('jordan-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
}

function noStickyDropDown(x){
    if (x === -1){
        let dropdownside = document.getElementById('sales');
        dropdownside.classList.toggle('h-[100px]')
    }
    if (x === -2){
        let dropdownside = document.getElementById('men-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -3){
        let dropdownside = document.getElementById('women-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -4){
        let dropdownside = document.getElementById('kids-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -5){
        let dropdownside = document.getElementById('sales-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -6){
        let dropdownside = document.getElementById('jordan-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
}

function toggleDropdown(n) {
  if (n===1) {
    let form = document.getElementById("sales-tog");
    form.classList.toggle("max-h-[200px]");
  }
  if (n===2) {
    let form = document.getElementById("gender");
    form.classList.toggle("max-h-[200px]");
  }
  if (n===3) {
    let form = document.getElementById("kids-togg");
    form.classList.toggle("max-h-[200px]");
  }
  if (n===4) {
    let form = document.getElementById("color-togg");
    form.classList.toggle("max-h-[200px]");
  }
  if (n===5) {
    let form = document.getElementById("shop-price");
    form.classList.toggle("max-h-[200px]");
  }
  if (n===6) {
    let form = document.getElementById("brand");
    form.classList.toggle("max-h-[200px]");
  }
  if (n===7) {
    let form = document.getElementById("actsport");
    form.classList.toggle("max-h-[200px]");
  }
  if (n===8) {
    let form = document.getElementById("best");
    form.classList.toggle("max-h-[200px]");
  }
}
function toggleSort(){
  document.getElementById('sortlist').classList.toggle('max-h-[130px]')
}

class GridItems extends HTMLElement {
  connectedCallback() {
    // Assuming arrItem is defined elsewhere

    this.innerHTML = `
    <div class="grid lg:grid-cols-3 gap-4  md:gap-3 grid-cols-2">
      ${arrItem.map((card) => {
        return `
          <div class="p-4">
            <img src="${card.img}" alt="">
            <div class="text-sm pt-3 text-zinc-600 font-sans pl-2">
              <p>${card.title}</p>
              <p>${card.type}</p>
              <p>${card.color}</p>
              <p class="text-lg pt-3 text-black font-medium">${card.price}</p>
            </div>
          </div>
        `
      }).join("")}
      </div>
      `;
  }
}

// Define the custom element after class definition
customElements.define("grid-card", GridItems);
