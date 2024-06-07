import { cardSlide } from "./data.js";
const dataSources = {
    'card-data': cardSlide,
};

const CreateCard = (cards) => {
    return `
    <div class="flex flex-col font-sans gap-2 relative">
        <div class="flex justify-between items-center">
          <p class="font-sans md:text-3xl font-bold pb-2 px-3">SHOP BY CLASSICS</p>
        </div>
        <div class="flex overflow-x-auto space-x-5 p-3 md:p-0 slide-men">
        ${cards.map((items) => `
            <img src="${items.img}" alt="" class="${items.className} mySlides w-[400px]" />
        `).join("")}
        </div>
        
        <div class="flex items-center gap-10">
          <button
            class="prev px-4 py-2 font-black text-xl rounded-[50%] bg-white border absolute top-[50%] left-1"
          >
            ❮
          </button>
          <button
            class="next px-4 py-2 font-black text-xl rounded-[50%] bg-white border absolute right-1 top-[50%]"
          >
            ❯
          </button>
        </div>
    </div>
    `;
};

class SlideShow extends HTMLElement {
    constructor() {
        super();
        this.currentSlide = 0;
    }

    connectedCallback() {
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource];
        if (data) {
            this.innerHTML = CreateCard(data);
        } else {
            console.error('Data source not found or invalid:', dataSource);
        }

        // Add event listeners for the buttons
        this.querySelector('.prev').addEventListener('click', () => this.plusSlides(-1));
        this.querySelector('.next').addEventListener('click', () => this.plusSlides(1));
    }

    plusSlides(n) {
        const carousel = this.querySelector('.slide-men');
        const images = carousel.querySelectorAll('.mySlides');
        const imageWidth = images[0].clientWidth;

        this.currentSlide = Math.max(0, Math.min(this.currentSlide + n, images.length - 1));
        carousel.scrollTo({ left: this.currentSlide * imageWidth, behavior: 'smooth' });
    }
}
customElements.define('card-slide', SlideShow);
