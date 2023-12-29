const fileInput = document.querySelector('#file');
const customFileUpload = document.querySelector('.custom-file-upload');
const slidesContainer = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const removeButton = document.querySelector('.remove');

let imgFiles = [];
let currentSlide = 0;

customFileUpload.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('input', () => {
    handleFileInputChange(fileInput.files);
    fileInput.value = null;
});

function handleFileInputChange(files) {
    if (files.length === 0) return alert('Файлы не выбраны!');

    imgFiles = Array.from(files);

    slidesContainer.innerHTML = '';

    imgFiles.forEach((file, index) => {
        const imgUrl = URL.createObjectURL(file);
        const slide = createSlide(imgUrl, index + 1);
        slidesContainer.appendChild(slide);
    });

    showIndex(currentSlide);
}

function createSlide(imgUrl, index) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `<img src="${imgUrl}" alt="Слайд ${index}">`;
    return slide;
}

function showIndex(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + imgFiles.length) % imgFiles.length;
    showIndex(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % imgFiles.length;
    showIndex(currentSlide);
});

removeButton.addEventListener('click', () => {
    if (imgFiles.length === 0) return;

    imgFiles.splice(currentSlide, 1);

    if (currentSlide >= imgFiles.length && currentSlide > 0) {
        currentSlide--;
    }

    slidesContainer.innerHTML = '';

    imgFiles.forEach((file, index) => {
        const imgUrl = URL.createObjectURL(file);
        const slide = createSlide(imgUrl, index + 1);
        slidesContainer.appendChild(slide);
    });

    showIndex(currentSlide);
});
