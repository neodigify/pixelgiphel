$(document).ready(function () {
  function openMenu() {
    $('.nav-menu').addClass('open');
    $('.menu-overlay').addClass('open');
    $('body').css('overflow', 'hidden');
  }

  function closeMenu() {
    $('.nav-menu').removeClass('open');
    $('.menu-overlay').removeClass('open');
    $('body').css('overflow', '');
  }

  $('.hamburger-menu').on('click', function (e) {
    e.preventDefault();
    openMenu();
  });

  $(document).on('click', '.close-menu-btn', function (e) {
    e.preventDefault();
    closeMenu();
  });

  $(document).on('click', '.menu-overlay', function () {
    closeMenu();
  });
});
 

const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarWrap = document.getElementById('sidebarWrap');

const mediaQuery = window.matchMedia('(max-width: 1024px)');

function handleSidebar(e) {
  if (e.matches) {
    sidebarWrap.classList.add('collapsed');
  } else {
    sidebarWrap.classList.remove('collapsed');
  }
}

handleSidebar(mediaQuery);
mediaQuery.addEventListener('change', handleSidebar);

sidebarToggle.addEventListener('click', function () {
  sidebarWrap.classList.toggle('collapsed');
});



const slider = document.getElementById('categorySlider');
const prevBtn = document.getElementById('catPrev');
const nextBtn = document.getElementById('catNext');
let sliderIndex = 0;
const slideAmount = 200; 

function updateSlider() {
  const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;
  sliderIndex = Math.max(0, Math.min(sliderIndex, maxScroll));
  slider.style.transform = `translateX(-${sliderIndex}px)`;
}

prevBtn.addEventListener('click', () => {
  sliderIndex -= slideAmount;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  sliderIndex += slideAmount;
  updateSlider();
});

// Active tab
document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});


const range = document.querySelector('.range-wrap input[type=range]');
const rangeVal = document.getElementById('rangeVal');

function updateRangeFill() {
  const val = (range.value - range.min) / (range.max - range.min) * 100;
  range.style.background = `linear-gradient(to right, #4C8BFF ${val}%, #1a2540 ${val}%)`;
  if (rangeVal) rangeVal.textContent = range.value;
}

range.addEventListener('input', updateRangeFill);
updateRangeFill();

function toggleSection(header) {
  const content = header.nextElementSibling;
  const isOpen = !header.classList.contains('closed');

  if (isOpen) {
    header.classList.add('closed');
    content.classList.add('closed');
  } else {
    header.classList.remove('closed');
    content.classList.remove('closed');
  }
}

 

 const rangeMin = document.getElementById('range-min');
  const rangeMax = document.getElementById('range-max');
  const inputMin = document.getElementById('input-min');
  const inputMax = document.getElementById('input-max');
  const fill     = document.getElementById('range-fill');
  const MIN = 0, MAX = 5000, GAP = 10;
 
  function updateUI() {
    const lo = parseInt(rangeMin.value);
    const hi = parseInt(rangeMax.value);
    // fill spans FROM lo thumb TO hi thumb
    const leftPct  = ((lo - MIN) / (MAX - MIN)) * 100;
    const rightPct = 100 - ((hi - MIN) / (MAX - MIN)) * 100;
    fill.style.left  = leftPct  + '%';
    fill.style.right = rightPct + '%';
    inputMin.value = 'CHF ' + lo;
    inputMax.value = 'CHF ' + hi;
    document.getElementById('pct-min').textContent = Math.round((lo / MAX) * 100) + '%';
document.getElementById('pct-max').textContent = Math.round((hi / MAX) * 100) + '%';
  }
 
  rangeMin.addEventListener('input', () => {
    if (parseInt(rangeMin.value) >= parseInt(rangeMax.value) - GAP)
      rangeMin.value = parseInt(rangeMax.value) - GAP;
    updateUI();
  });
 
  rangeMax.addEventListener('input', () => {
    if (parseInt(rangeMax.value) <= parseInt(rangeMin.value) + GAP)
      rangeMax.value = parseInt(rangeMin.value) + GAP;
    updateUI();
  });
 
  function toggleSection(header) {
    header.classList.toggle('open');
    header.nextElementSibling.classList.toggle('closed');
  }
 
  updateUI();


  // Scroll to Top visibility
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});


document.querySelectorAll('.wishlist-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');


  });
});