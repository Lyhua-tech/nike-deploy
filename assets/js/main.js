class UppernavbarComponent extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="backdrop-blur-sm w-full hidden h-screen fixed z-[90]" id="overlay-blur" onclick="closeNav()"></div>
        <nav class="bg-[#f5f5f5] py-2 ">
        <div class="justify-between max-w-[1600px] mx-auto items-center md:flex gap-10 hidden">
          <div class="flex size-full items-center gap-3 pl-3">
            <a href=""><img src="../assets/icons/Air-Jordan-Logo.png" alt="" class="w-6 h-[17px]"></a>
            <a href=""><img src="../assets/icons/converse-logo.svg" alt="" class="w-8 h-[26px]"></a>
          </div>
          <ul class="flex justify-between basis-[300px] text-[12px] items-center pr-3 font-sans font-medium">
            <li><a href="">Find a store</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Join Us</a></li>
            <li><a href="">Sign in</a></li>
          </ul>
        </div>
    </nav>
        `
    }
}
customElements.define('my-upper-nav', UppernavbarComponent)

class LowernavbaarComponent extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
        <nav class="h-[80px] md:top-10 absolute bg-white w-full top-0 z-[100]">
            <div class="justify-between max-w-[1600px] mx-auto items-center flex-1 flex">
                <a href="/index.html"><img src="../assets/icons/nike-4-logo.svg" alt="" class="size-[80px]"
          /></a>
          <ul class="md:flex gap-10 hidden">
            <li>
              <div
                class="group h-[80px] pt-7 "
                id="hoverLink"
                onmouseenter="hoverDrop(1)"
                onmouseleave="hoverHide(-1)"
              >
                <a href="/public/feature.html" class="group-hover:opacity-50 relative"
                  >New & Featured</a
                >
                <section
                  class="w-full bg-white absolute top-[80px] z-[10000] left-0 max-h-[0] ease-in-out duration-500 overflow-hidden"
                  id="new-feature"
                >
                  <div id="HoverBox" class="max-w-[1200px] mx-auto flex text-sm font-sans font-medium text-[#757575]">
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Mother's Day Shop</li>
                      <li>Extra 25% Off Select Styles</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">New & Featured</li>
                      <li>New Arrivals</li>
                      <li>Best Sellers</li>
                      <li>New & Upcoming Drops</li>
                      <li>Add to Bag to See Price</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Trending</li>
                      <li>Lifestyle Running</li>
                      <li>The Color Shop</li>
                      <li>Shop Sport</li>
                      <li>Jordan Family Days</li>
                      <li>ACG</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Shop Classics</li>
                      <li>Dunk</li>
                      <li>Air Jordan 1</li>
                      <li>Air Force</li>
                      <li>Air Max</li>
                      <li>Blazer</li>
                      <li>Vomero</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Explore</li>
                      <li>SNKRS Launch Calendar</li>
                      <li>Running Shoe Finder</li>
                      <li>Bra Finder</li>
                      <li>Product Care</li>
                      <li>Member Rewards</li>
                      <li>Member Rewards</li>
                    </ul>
                  </div>
                </section>
              </div>
            </li>
            <li>
              <div
                class="group h-[80px] pt-7"
                id="hoverLink"
                onmouseenter="hoverDrop(2)"
                onmouseleave="hoverHide(-2)"
              >
                <a href="/public/men.html" class="group-hover:opacity-50 relative">Men</a>
                <!-- men section -->
                <section
                  class="w-full bg-white  absolute top-[80px] z-[10000] left-0 max-h-[0] ease-in-out duration-500 overflow-hidden"
                  id="men"
                >
                  <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                    <li class="text-[18px] pb-2 text-black">Mother's Day Shop</li>
                    <li class="text-sm font-sans font-medium text-[#757575]">Extra 25% Off Select Styles</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">New & Featured</li>
                      <li>New Arrivals</li>
                      <li>Best Sellers</li>
                      <li>Add to Bag to See Price</li>
                      <li>All Sale</li>
                      <li>ACG Essentials</li>
                      <li>Time for Tennis</li>
                      <li>Jordan Family Days</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Shoes</li>
                      <li>All Shoes</li>
                      <li>Lifestyle</li>
                      <li>Jordan</li>
                      <li>Dunk</li>
                      <li>Lifestyle Running</li>
                      <li>Air Max</li>
                      <li>Air Force 1</li>
                      <li>Training & Gym</li>
                      <li>Basketball</li>
                      <li>Running</li>
                      <li>Nike SB</li>
                      <li>Sandals & Slides</li>
                      <li>Nike by You</li>
                      <li>Shoes $100 & Under</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Clothing</li>
                      <li>All Clothing</li>
                      <li>Hoodies & Sweatshirts</li>
                      <li>Pants & Tights</li>
                      <li>Jackets & Vests</li>
                      <li>Tops & T-Shirts</li>
                      <li>Shorts</li>
                      <li>Matching Sets</li>
                      <li>Big & Tall</li>
                      <li>Jordan</li>
                      <li>Accessories</li>
                      <li>All Accessories</li>
                      <li>Bags & Backpacks</li>
                      <li>Hats & Headwear</li>
                      <li>Socks</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Shop by Sport</li>
                      <li>Basketball</li>
                      <li>Running</li>
                      <li>Golf</li>
                      <li>Soccer</li>
                      <li>Baseball</li>
                      <li>Football</li>
                      <li>Softball</li>
                      <li>Tennis</li>
                      <li>Dance</li>
                      <li>Swimming</li>
                      <li>Skateboarding</li>
                      <li>Fan Gear</li>
                      <li>Accessories</li>
                      <li>All Accessories</li>
                      <li>Bags & Backpacks</li>
                      <li>Hats & Headwear</li>
                      <li>Socks</li>
                    </ul>
                  </div>
                </section>
              </div>
            </li>
            <li>
              <div
                class="group h-[80px] pt-7"
                id="hoverLink"
                onmouseenter="hoverDrop(3)"
                onmouseleave="hoverHide(-3)"
              >
                <a href="#" class="group-hover:opacity-50 relative">Women</a>
                <!--Women section -->
                <section
                  class="w-full bg-white  absolute top-[80px] z-[10000] left-0 max-h-[0] ease-in-out duration-500 overflow-hidden"
                  id="women"
                >
                  <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Mother's Day Shop</li>
                      <li>Extra 25% Off Select Styles</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">New & Featured</li>
                      <li>New Arrivals</li>
                      <li>Best Sellers</li>
                      <li>Add to Bag to See Price</li>
                      <li>All Sale</li>
                      <li>Collections</li>
                      <li>The Color Shop</li>
                      <li>Zenvy Collection</li>
                      <li>Loungewear</li>
                      <li>Jordan Family Days</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Shoes</li>
                      <li>All Shoes</li>
                      <li>Lifestyle</li>
                      <li>Jordan</li>
                      <li>Dunk</li>
                      <li>Lifestyle Running</li>
                      <li>Air Max</li>
                      <li>Air Force 1</li>
                      <li>Training & Gym</li>
                      <li>Basketball</li>
                      <li>Running</li>
                      <li>Nike SB</li>
                      <li>Sandals & Slides</li>
                      <li>Nike by You</li>
                      <li>Shoes $100 & Under</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Clothing</li>
                      <li>All Clothing</li>
                      <li>Hoodies & Sweatshirts</li>
                      <li>Pants</li>
                      <li>Leggings</li>
                      <li>Jackets & Vests</li>
                      <li>Tops & T-Shirts</li>
                      <li>Shorts</li>
                      <li>Skirts & Dresses</li>
                      <li>Bras</li>
                      <li>Matching Sets</li>
                      <li>Plus Size</li>
                      <li>Jordan</li>
                      <li>Accessories</li>
                      <li>All Accessories</li>
                      <li>Bags & Backpacks</li>
                      <li>Hats & Headwear</li>
                      <li>Socks</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Shop by Sport</li>
                      <li>Basketball</li>
                      <li>Running</li>
                      <li>Golf</li>
                      <li>Soccer</li>
                      <li>Baseball</li>
                      <li>Football</li>
                      <li>Softball</li>
                      <li>Tennis</li>
                      <li>Dance</li>
                      <li>Swimming</li>
                      <li>Skateboarding</li>
                      <li>Fan Gear</li>
                      <li>Accessories</li>
                      <li>All Accessories</li>
                      <li>Bags & Backpacks</li>
                      <li>Hats & Headwear</li>
                      <li>Socks</li>
                    </ul>
                  </div>
                </section>
              </div>
            </li>
            <li>
              <div
                class="group h-[80px] pt-7"
                id="hoverLink"
                onmouseenter="hoverDrop(4)"
                onmouseleave="hoverHide(-4)"
              >
                <a href="#" class="group-hover:opacity-50 relative">Kids</a>
                <!-- Kids section -->
                <section
                  class="w-full bg-white  absolute top-[80px] z-[10000] left-0 max-h-[0] ease-in-out duration-500 overflow-hidden"
                  id="kids"
                >
                  <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Mother's Day Shop</li>
                      <li>Extra 25% Off Select Styles</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">New & Featured</li>
                      <li>New Arrivals</li>
                      <li>Best Sellers</li>
                      <li>Add to Bag to See Price</li>
                      <li>All Sale</li>
                      <li>Collections</li>
                      <li>EasyOn</li>
                      <li>Teen Essentials</li>
                      <li>New in Basketball</li>
                      <li>Skate X Lifestyle</li>
                      <li>Jordan Family Days</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Shoes by Size</li>
                      <li>Big Kids (1Y - 7Y)</li>
                      <li>Little Kids (8C - 3Y)</li>
                      <li>Baby & Toddler (1C - 10C)</li>
                      <li>All Shoes</li>
                      <li>Lifestyle</li>
                      <li>Jordan</li>
                      <li>Dunk</li>
                      <li>Air Max</li>
                      <li>Air Force 1</li>
                      <li>Basketball</li>
                      <li>Running</li>
                      <li>Sandals & Slides</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Clothing By Size</li>
                      <li>Big Kids (XS - XL)</li>
                      <li>Little Kids (4 - 7)</li>
                      <li>Baby & Toddler (0M - 4T)</li>
                      <li>Extended Sizing</li>
                      <li>All Clothing</li>
                      <li>Hoodies & Sweatshirts</li>
                      <li>Pants & Tights</li>
                      <li>Jackets & Vests</li>
                      <li>Tops & T-Shirts</li>
                      <li>Shorts</li>
                      <li>Skirts & Dresses</li>
                      <li>Bras</li>
                      <li>Matching Sets</li>
                      <li>Jordan</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Shop by Sport</li>
                      <li>Basketball</li>
                      <li>Running</li>
                      <li>Golf</li>
                      <li>Soccer</li>
                      <li>Baseball</li>
                      <li>Football</li>
                      <li>Softball</li>
                      <li>Tennis</li>
                      <li>Dance</li>
                      <li>Swimming</li>
                      <li>Skateboarding</li>
                      <li>Fan Gear</li>
                      <li>Accessories</li>
                      <li>All Accessories</li>
                      <li>Bags & Backpacks</li>
                      <li>Hats & Headwear</li>
                      <li>Socks</li>
                    </ul>
                  </div>
                </section>
              </div>
            </li>
            <li class="hidden min-[880px]:block">
              <div
                class="group h-[80px] pt-7"
                id="hoverLink"
                onmouseenter="hoverDrop(5)"
                onmouseleave="hoverHide(-5)"
              >
                <a href="#" class="group-hover:opacity-50 relative">Sale</a>
                <!-- Sale section -->
                <section
                  class="w-full bg-white  absolute top-[80px] z-[10000] left-0 max-h-[0] ease-in-out duration-500 overflow-hidden"
                  id="sales"
                >
                  <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Mother's Day Shop</li>
                      <li>Extra 25% off Select Styles</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">All Sale</li>
                      <li>Sale Shoes</li>
                      <li>Sale Clothing</li>
                      <li>Sale Accessories</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Men</li>
                      <li>Shoes</li>
                      <li>Clothing</li>
                      <li>Accessories</li>
                      <li>Shop All</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Women</li>
                      <li>Shoes</li>
                      <li>Clothing</li>
                      <li>Accessories</li>
                      <li>Shop All</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Kids</li>
                      <li>Shoes</li>
                      <li>Clothing</li>
                      <li>Accessories</li>
                      <li>Shop All</li>
                    </ul>
                  </div>
                </section>
              </div>
            </li>
            <li class="hidden lg:block">
              <div
                class="group h-[80px] pt-7"
                id="hoverLink"
                onmouseenter="hoverDrop(6)"
                onmouseleave="hoverHide(-6)"
              >
                <a href="#" class="group-hover:opacity-50 relative">Jordan</a>
                <section
                  class="w-full bg-white  absolute top-[80px] z-[10000] left-0 max-h-[0] ease-in-out duration-500 overflow-hidden"
                  id="jordan"
                >
                  <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Jordan Family Days</li>
                      <li>Shop the Collections</li>
                      <li>Accessories</li>
                      <li>Shop All</li>
                      <li>Bags & Backpacks</li>
                      <li>Hats & Headwear</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">New & Featured</li>
                      <li>New Arrivals</li>
                      <li>Best Seller</li>
                      <li>Collections</li>
                      <li>Heat Check</li>
                      <li>Trending Colors</li>
                      <li>Golf Essentials</li>
                      <li>Girls Lemonade Stand</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Men</li>
                      <li>Shop All</li>
                      <li>Shoes</li>
                      <li>AJ1</li>
                      <li>Clothing</li>
                      <li>Basketball</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Women</li>
                      <li>Shop All</li>
                      <li>Shoes</li>
                      <li>AJ1</li>
                      <li>Clothing</li>
                      <li>Basketball</li>
                    </ul>
                    <ul
                      class="max-w-[1600px] mx-auto flex mb-4 justify-start flex-col text-sm font-sans font-medium text-[#757575]"
                    >
                      <li class="text-[18px] pb-2 text-black">Kids</li>
                      <li>Shop All</li>
                      <li>Shoes</li>
                      <li>AJ1</li>
                      <li>Clothing</li>
                      <li>Basketball</li>
                      <li>Big Kids</li>
                      <li>Little Kids</li>
                      <li>Baby & Toddler</li>
                    </ul>
                  </div>
                </section>
              </div>
            </li>
          </ul>
          <div
            class="justify-center gap-4 flex-1 items-center max-w-[300px] hidden md:flex"
          >
            <form action="" class="relative">
              <i
                class="fa-solid fa-magnifying-glass absolute left-4 top-[11px]"
              ></i>
              <input
                type="text"
                placeholder="Search"
                class="bg-[#f5f5f5] text-[#cccccc] text-sm pl-10 rounded-[20px] py-2"
              />
            </form>
            <a href=""
              ><img src="../assets/icons/love.png" alt="" class="size-[20px]"
            /></a>
            <a href=""
              ><img src="../assets/icons/shopping-bag.png" alt="" class="size-[20px]"
            /></a>
          </div>
          <!-- Sidebar -->
          <div class="flex flex-1 gap-2 md:hidden justify-end items-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>          
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>          
            <div class="block cursor-pointer md:hidden pb-1 " onclick="openNav()">
              <div class="bg-black w-6 h-[3px] rounded-md mt-1"></div>
              <div class="bg-black w-6 h-[3px] rounded-md mt-1"></div>
              <div class="bg-black w-6 h-[3px] rounded-md mt-1"></div>
            </div>
          </div>
        </div>
      </nav>
        `
    }
}
customElements.define('my-navbar', LowernavbaarComponent);

class footerComponent extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="relative">
      <div
        class="max-w-[1200px] mx-auto flex items-center h-[300px] justify-between relative top-[94px] duration-300 text-[#707072] p-3 max-sm:hidden"
        id="upperfooter"
      >
        <ul
          class="md:flex flex-col gap-2 ml-5 hidden"
        >
          <li class="font-sans text-[16px] pb-2 tracking-[1px] text-black">Featured</li>
          <li class="font-sans text-[16px] tracking-[1px]">Air Force 1</li>
          <li class="font-sans text-[16px] tracking-[1px]">Jordan 1</li>
          <li class="font-sans text-[16px] tracking-[1px]">Metcon</li>
          <li class="font-sans text-[16px] tracking-[1px]">Jordan 1</li>
          <li class="font-sans text-[16px] tracking-[1px]">Air Max 270</li>
          <li class="font-sans text-[16px] tracking-[1px]">Air Max 97</li>
          <li class="font-sans text-[16px] tracking-[1px]">Blazer</li>
          <li class="font-sans text-[16px] tracking-[1px]">Pegasus</li>
        </ul>
        <ul
          class="sm:flex flex-col gap-2 h-[288px] hidden"
        >
          <li class="font-sans text-[16px] pb-2 tracking-[1px] text-black">Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">All Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">Jordan Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">Running Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">Basketball Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">Tennis Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">Training Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">Custom Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">Sale Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">Soccer Cleats</li>
        </ul>
        <ul
          class="flex flex-col gap-2 h-[288px]"
        >
          <li class="font-sans text-[16px] pb-2 tracking-[1px] text-black">Clothing</li>
          <li class="font-sans text-[16px] tracking-[1px]">All Clothing</li>
          <li class="font-sans text-[16px] tracking-[1px]">Tops & T-Shirts</li>
          <li class="font-sans text-[16px] tracking-[1px]">Shorts</li>
          <li class="font-sans text-[16px] tracking-[1px]">
            Hoodies & Pullovers
          </li>
          <li class="font-sans text-[16px] tracking-[1px]">
            Joggers & Sweatpants
          </li>
          <li class="font-sans text-[16px] tracking-[1px]">Sports Bras</li>
          <li class="font-sans text-[16px] tracking-[1px]">Pants & Tights</li>
          <li class="font-sans text-[16px] tracking-[1px]">Socks</li>
          <li class="font-sans text-[16px] tracking-[1px]">Yoga</li>
          <li class="font-sans text-[16px] tracking-[1px]">NikeLab</li>
          <li class="font-sans text-[16px] tracking-[1px]">Plus Size</li>
          <li class="font-sans text-[16px] tracking-[1px]">Big & Tall</li>
          <li class="font-sans text-[16px] tracking-[1px]">Sale Clothing</li>
        </ul>
        <ul
          class="flex flex-col gap-2 mr-5 pt-6"
        >
          <li class="font-sans text-[16px] pb-2 tracking-[1px] text-black">Kids</li>
          <li class="font-sans text-[16px] tracking-[1px]">
            Infant & Toddler Shoes
          </li>
          <li class="font-sans text-[16px] tracking-[1px]">Kids Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">
            Kid Basketball Shoes
          </li>
          <li class="font-sans text-[16px] tracking-[1px]">
            Kid Running Shoes
          </li>
          <li class="font-sans text-[16px] tracking-[1px]">Kid Jordan Shoes</li>
          <li class="font-sans text-[16px] tracking-[1px]">Kids Clothing</li>
          <li class="font-sans text-[16px] tracking-[1px]">Kids Backpacks</li>
          <li class="font-sans text-[16px] tracking-[1px]">Kids Socks</li>
          <li class="font-sans text-[16px] tracking-[1px]">Kids Sale</li>
        </ul>
      </div>
      <div
        class="bg-white max-w-[1200px] mx-auto flex h-[100px] my-0 relative z-20 "
        id="white-block"
      ></div>
      <footer
        class="bg-neutral-950 text-white font-sans text-sm relative w-full"
        id="footer-sec"
      >
        <div>
          <div class="max-w-[1600px] mx-auto md:items-center h-full md:justify-center gap-2 text-[12px] flex justify-between p-6 pb-0"> 
            <ul class='max-md:grid grid-rows-4 flex md:gap-3 justify-around max-md:max-h-[300px] md:w-5/6'>
              <ul class="md:ml-[15px]  flex mb-4 justify-start flex-col gap-[20px] font-semibold">
                <li><a href="">RESOURCES</a></li>
                <div class="flex flex-col gap-6 max-md:hidden">
                  <li><a href="">GIFT CARDS</a></li>
                  <li><a href="">FIND A STORE</a></li>
                  <li><a href="">BECOME A MEMBER</a></li>
                  <li><a href="">NIKE X NBA</a></li>
                  <li><a href="">NIKE JOURNAL</a></li>
                  <li><a href="">Site Feedback</a></li>
                </div>
              </ul>
              <ul class="flex justify-start flex-col gap-[20px] font-semibold">
                <li ><a href="">HELP</a></li>
                <div class="flex flex-col gap-6 max-md:hidden font-light">
                  <li><a href="">Get Help</a></li>
                  <li><a href="">Order Status</a></li>
                  <li><a href="">Shipping and Delivery</a></li>
                  <li><a href="">Returns</a></li>
                  <li><a href="">Order Cancellation</a></li>
                  <li><a href="">Payment Options</a></li>
                  <li><a href="">Gift Card Balance</a></li>
                  <li><a href="">Contact Us</a></li>
                </div>
              </ul>
              <ul class=" flex mb-4 justify-start flex-col gap-[20px] font-semibold">
                <li><a href="">COMPANY</a></li>
                <div class="flex flex-col gap-6 max-md:hidden font-light">
                  <li><a href="">About Nike</a></li>
                  <li><a href="">News</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Investors</a></li>
                  <li><a href="">Purpose</a></li>
                  <li><a href="">Sustainability</a></li>
                </div>
              </ul>
              <ul class=" flex mb-4 justify-start flex-col gap-[20px] font-semibold">
                <li><a href="">PROMOTIONS & DISCOUNTS</a></li>
                <div class="flex flex-col gap-6 max-md:hidden font-light">
                  <li><a href="">Student</a></li>
                  <li><a href="">Military</a></li>
                  <li><a href="">Teacher</a></li>
                  <li><a href="">First Responders & Medical </a></li>
                  <li><a href="">Professionals</a></li>
                  <li><a href="">Birthday</a></li>
                </div>
              </ul>
            </ul>
            <div class="flex max-w-[400px] gap-2 md:h-[380px] h-full">
              <img src="../assets/icons/facebook-icon.svg" alt="" class="size-[30px]" />
              <img src="../assets/icons/twitter_icon.svg" alt="" class="size-[30px]" />
              <img src="../assets/icons/instagram_icon.svg" alt="" class="size-[30px]" />
              <img src="../assets/icons/youtube_icon.svg" alt="" class="size-[30px]" />
            </div>
          </div>
          <div class='flex lg:flex-row flex-col p-6 max-lg:gap-4 text-[11px] gap-4 justify-center md:px-16 pt-0'>
            <p>© 2024 Nike,Inc. All Rights Reversed</p>
            <p>Guide</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Nike Privacy Policy</p>
            <div class="flex gap-2 items-center">
              <img src="/assets/icons/help-icons.png" alt="" class="size-[10px]"/>
              <p>Your privacy Choices</p>
            </div>
            <p>CA Supply Chains Act</p>
          </div>
        </div>
      </footer>
    </div>
        `
    }
}
customElements.define('my-footer', footerComponent)

class SidebarCom extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <div
      id="mySidenav"
      class="bg-white absolute z-[100] w-0 h-screen right-0 top-0 duration-500 overflow-hidden"
    >
      <div class="mt-10 ml-6">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-[30px]"
        onclick="closeNav()"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
      </div>
      <ul class="mt-10 ml-4 flex-col gap-[24px] flex">
        <li class="border-b">
          <div class="flex justify-between">
            <a
              href="/public/feature.html"
              class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[22px]"
              >New & Featured</a
            >
            <button
              onclick="showDropdown(1)"
              onclick="hideDropDown(-1)"
              class=""
            >
              <img
                src="../assets/icons/dropdown.png"
                alt="dropdown"
                class="size-6 mr-3"
              />
            </button>
          </div>
          <ul
            class="pl-10 mt-4 h-0 duration-500 overflow-hidden"
            id="newfeature"
          >
            <li class="pb-2"><a href="feature.html">New & Featured</a></li>
            <li class="pb-2"><a href="">New Arrivals</a></li>
            <li class="pb-2"><a href="">Mother's Day Shop </a></li>
            <li class="pb-2"><a href="">Featured</a></li>
            <li class="pb-2"><a href="">Trending</a></li>
            <li class="pb-2"><a href="">Shop Classics</a></li>
            <li class="pb-2"><a href="">Shop Classics</a></li>
            <li class="pb-2"><a href="">Explore</a></li>
          </ul>
        </li>
        <li class="border-b">
          <div class="flex justify-between">
            <a
              href="/public/men.html"
              class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[22px]"
              >Men</a
            >
            <button
              onclick="showDropdown(2)"
              onclick="hideDropDown(-2)"
              class=""
            >
              <img
                src="../assets/icons/dropdown.png"
                alt="dropdown"
                class="size-6 mr-3"
              />
            </button>
          </div>
          <ul
            class="pl-10 mt-4 h-0 duration-500 overflow-hidden"
            id="men-drop"
          >
            <li class="pb-2"><a href="men.html">Men</a></li>
            <li class="pb-2"><a href="">New Arrivals</a></li>
            <li class="pb-2"><a href="">Mother's Day Shop </a></li>
            <li class="pb-2"><a href="">Featured</a></li>
            <li class="pb-2"><a href="">Collections</a></li>
            <li class="pb-2"><a href="">Shoes</a></li>
            <li class="pb-2"><a href="">Clothing</a></li>
            <li class="pb-2"><a href="">Accessories</a></li>
            <li class="pb-2"><a href="">Shop by Sport</a></li>
          </ul>
        </li>
        <li class="border-b">
          <div class="flex justify-between">
            <a
              href="#"
              class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[22px]"
              >Women</a
            >
            <button
              onclick="showDropdown(3)"
              onclick="hideDropDown(-3)"
              class=""
            >
              <img
                src="../assets/icons/dropdown.png"
                alt="dropdown"
                class="size-6 mr-3"
              />
            </button>
          </div>
          <ul
            class="pl-10 mt-4 h-0 duration-500 overflow-hidden"
            id="women-drop"
          >
            <li class="pb-2"><a href="">Women</a></li>
            <li class="pb-2"><a href="">New Arrivals</a></li>
            <li class="pb-2"><a href="">Mother's Day Shop </a></li>
            <li class="pb-2"><a href="">Featured</a></li>
            <li class="pb-2"><a href="">Collections</a></li>
            <li class="pb-2"><a href="">Shoes</a></li>
            <li class="pb-2"><a href="">Clothing</a></li>
            <li class="pb-2"><a href="">Accessories</a></li>
            <li class="pb-2"><a href="">Shop by Sport</a></li>
          </ul>
        </li>
        <li class="border-b">
          <div class="flex justify-between">
            <a
              href="#"
              class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[22px]"
              >Kids</a
            >
            <button
              onclick="showDropdown(4)"
              onclick="hideDropDown(-4)"
              class=""
            >
              <img
                src="../assets/icons/dropdown.png"
                alt="dropdown"
                class="size-6 mr-3"
              />
            </button>
          </div>
          <ul
            class="pl-10 mt-4 h-0 duration-500 overflow-hidden"
            id="kids-drop"
          >
            <li class="pb-2"><a href="">Kids</a></li>
            <li class="pb-2"><a href="">New Arrivals</a></li>
            <li class="pb-2"><a href="">Mother's Day Shop </a></li>
            <li class="pb-2"><a href="">Featured</a></li>
            <li class="pb-2"><a href="">Collections</a></li>
            <li class="pb-2"><a href="">Shop by Age</a></li>
            <li class="pb-2"><a href="">Shoes</a></li>
            <li class="pb-2"><a href="">Clothing</a></li>
            <li class="pb-2"><a href="">Accessories</a></li>
            <li class="pb-2"><a href="">Shop by Sport</a></li>
          </ul>
        </li>
        <li class="border-b">
          <div class="flex justify-between">
            <a
              href="#"
              class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[22px]"
              >Sales</a
            >
            <button
              onclick="showDropdown(5)"
              onclick="hideDropDown(-5)"
              class=""
            >
              <img
                src="../assets/icons/dropdown.png"
                alt="dropdown"
                class="size-6 mr-3"
              />
            </button>
          </div>
          <ul
            class="pl-10 mt-4 h-0 duration-500 overflow-hidden"
            id="sales-drop"
          >
            <li class="pb-2"><a href="">Shops</a></li>
            <li class="pb-2"><a href="">Extra 25% Off Select Styles</a></li>
            <li class="pb-2"><a href="">All Sale</a></li>
            <li class="pb-2"><a href="">Sale Shoes</a></li>
            <li class="pb-2"><a href="">Sale Clothing</a></li>
            <li class="pb-2"><a href="">Sale Accessories & Equipment</a></li>
            <li class="pb-2"><a href="">Sale Mens</a></li>
            <li class="pb-2"><a href="">Sale Womens</a></li>
            <li class="pb-2"><a href="">Sale Kids</a></li>
          </ul>
        </li>
        <li class="border-b">
          <div class="flex justify-between">
            <a
              href="#"
              class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[22px]"
              >Jordan</a
            >
            <button
              onclick="showDropdown(6)"
              onclick="hideDropDown(-6)"
              class=""
            >
              <img
                src="../assets/icons/dropdown.png"
                alt="dropdown"
                class="size-6 mr-3"
              />
            </button>
          </div>
          <ul
            class="pl-10 mt-4 h-0 duration-500 overflow-hidden"
            id="jordan-drop"
          >
            <li class="pb-2"><a href="">Shops</a></li>
            <li class="pb-2"><a href="">Extra 25% Off Select Styles</a></li>
            <li class="pb-2"><a href="">New Arrivals</a></li>
            <li class="pb-2"><a href="">Mother's Day Shop </a></li>
            <li class="pb-2"><a href="">Featured</a></li>
            <li class="pb-2"><a href="">Collections</a></li>
          </ul>
        </li>
      </ul>
      <!-- Jordan -->
      <div class="flex mt-4 ml-8 items-center gap-4">
        <img src="../assets/icons/jordan-icons.webp" alt="" class="size-[30px]">
        <p>Jordan</p>
      </div>
      <!-- Converse -->
      <div class="flex mt-4 ml-8 items-center gap-4">
        <img src="../assets/icons/converse-logo.svg" alt="" class="size-[30px]">
        <p>Converse</p>
      </div>
      <p class="text-wrap pl-10 font-sans font-normal text-xl py-5 text-neutral-500">
        Become a Nike Member for the best products, inspiration and stories in sport. <span class="text-black font-medium">Learn More</span>
      </p>
      <!-- Sign in buttons -->
      <button class="ml-10 bg-black text-white py-2 px-5 rounded-3xl">Join Us</button>
      <button class="ml-2 bg-white border-solid border-[1px] border-neutral-400 text-black py-2 px-5 rounded-3xl">Sign In</button>

      <!-- bag shopping-->
      <div class="flex mt-4 ml-8 items-center gap-4">
        <img src="../assets/icons/shopping-bag.png" alt="" class="size-[25px]">
        <p>Bag</p>
      </div>
      <!-- order -->
      <div class="flex mt-4 ml-8 items-center gap-4">
        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75"></path>
        <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14">

        </path></svg>
        <p>Orders</p>
      </div>
      <!-- store -->
      <div class="flex mt-4 ml-8 items-center gap-4">
        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
        <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"></path>
        <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21">
        </path></svg>
        <p>Find a store</p>
      </div>
      <!-- help -->
      <div class="flex mt-4 ml-8 items-center gap-4 mb-3">
        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5">
        </path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15">
        </path></svg>
        <p>Help</p>
      </div>
      </div>
    `
  }
}

customElements.define('sidebar-nav', SidebarCom)