function hoverDrop(x){
    if (x === 1){
      document.querySelector('#new-feature').classList.toggle('max-h-[600px]');
    
      
    }
    if (x === 2){
      document.querySelector('#men').classList.toggle('max-h-[600px]');
    }
    if (x === 3){
      document.querySelector('#women').classList.toggle('max-h-[600px]');
    }
    if (x === 4){
      document.querySelector('#kids').classList.toggle('max-h-[600px]');
    }
    if (x === 5){
      document.querySelector('#sales').classList.toggle('max-h-[600px]');
    }
    if (x === 6){
      document.querySelector('#jordan').classList.toggle('max-h-[600px]');
    }
  }
  function hoverHide(x){
    if (x === -1){
      document.querySelector('#new-feature').classList.toggle('max-h-[600px]');
      
    }
    if (x === -2){
      document.querySelector('#men').classList.toggle('max-h-[600px]');
    }
    if (x === -3){
      document.querySelector('#women').classList.toggle('max-h-[600px]');
    }
    if (x === -4){
      document.querySelector('#kids').classList.toggle('max-h-[600px]');
    }
    if (x === -5){
      document.querySelector('#sales').classList.toggle('max-h-[600px]');
    }
    if (x === -6){
      document.querySelector('#jordan').classList.toggle('max-h-[600px]');
    }
  }

// Hamburger Sidebar
function openNav() {
    document.getElementById("mySidenav").classList.toggle('w-[55%]');
    document.getElementById("mySidenav").classList.toggle('overflow-y-auto');
    document.getElementById('overlay-blur').classList.remove('hidden');
    document.querySelector('body').classList.add('overflow-y-hidden')
}

function closeNav() {
    document.getElementById("mySidenav").classList.toggle('w-[55%]');
    document.getElementById("mySidenav").classList.toggle('overflow-y-auto');
    document.getElementById('overlay-blur').classList.add('hidden');
    document.querySelector('body').classList.remove('overflow-y-hidden')
}
function showDropdown(x){
    if (x === 1){
        let dropdownside = document.getElementById('newfeature');
        dropdownside.classList.toggle('max-h-[600px]')
    }
    if (x === 2){
        let dropdownside = document.getElementById('men-drop');
        dropdownside.classList.toggle('max-h-[600px]')
    }
    if (x === 3){
        let dropdownside = document.getElementById('women-drop');
        dropdownside.classList.toggle('max-h-[600px]')
    }
    if (x === 4){
        let dropdownside = document.getElementById('kids-drop');
        dropdownside.classList.toggle('max-h-[600px]')
    }
    if (x === 5){
        let dropdownside = document.getElementById('sales-drop');
        dropdownside.classList.toggle('max-h-[600px]')
    }
    if (x === 6){
        let dropdownside = document.getElementById('jordan-drop');
        dropdownside.classList.toggle('max-h-[600px]')
    }
}
function hideDropDown(x){
    if (x === -1){
        let dropdownside = document.getElementById('newfeature');
        dropdownside.classList.toggle('max-h-[600px]')
    }
    if (x === -2){
        let dropdownside = document.getElementById('men-drop');
        dropdownside.classList.toggle('max-h-[600px]')
    }
    if (x === -3){
        let dropdownside = document.getElementById('women-drop');
        dropdownside.classList.toggle('max-h-[600px]')
    }
    if (x === -4){
        let dropdownside = document.getElementById('kids-drop');
        dropdownside.classList.toggle('max-h-[600px]')
    }
    if (x === -5){
        let dropdownside = document.getElementById('sales-drop');
        dropdownside.classList.toggle('max-h-[600px]')
    }
    if (x === -6){
        let dropdownside = document.getElementById('jordan-drop');
        dropdownside.classList.toggle('max-h-[600px]')
    }
}

function hoverShow(){
  let whiteblock = document.getElementById('white-block')
  let footersec = document.getElementById('footer-sec')
  whiteblock.classList.add('hidden')
  footersec.classList.add('top-[296px]')
}
function hoverhide(){
  let whiteblock = document.getElementById('white-block')
  let footersec = document.getElementById('footer-sec')
  let upperfooter= document.getElementById('upperfooter')
  whiteblock.classList.remove('hidden')
  footersec.classList.remove('top-[296px]')
  
}