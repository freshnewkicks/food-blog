
async function getAPI(){
    const res = await fetch ('http://localhost:3000/api');
    const data = await res.json();
    return data;
}

let nextTitles = [];
let prevTitles = [];

let prevBtn = document.querySelector('#prev-slider-btn');
let nextBtn = document.querySelector('#next-slider-btn');
prevBtn.style.opacity = '45%';
let cardTitles = document.querySelectorAll('.card-title');
function toggleClass(x) {
    for (let i = 0; i < cardTitles.length; i++){
        if (!cardTitles[i].classList.contains(x)){
            cardTitles[i].classList.add(x)
        } else {
            cardTitles[i].classList.remove(x);
        }
    }
}



nextBtn.addEventListener('click', () => {
    prevBtn.setAttribute('disabled', 'disabled');
    setTimeout(() => {
        prevBtn.removeAttribute( 'disabled');
    }, 3000);

    toggleClass('animate__slideInRight');
    prevBtn.style.opacity = '100%';
    nextBtn.style.opacity = '45%';

    getAPI()
        .then(data => {
            // grab and store title elements
            let titlesHtml = [
                document.querySelector('#title-1'),
            document.querySelector('#title-2'),
            document.querySelector('#title-3')
        ]
            // grab text content of title elements and push to array
            prevTitles.push(
                titlesHtml[0].textContent,
                titlesHtml[1].textContent,
                titlesHtml[2].textContent
            );
            // grab data from fetch request and push to array
            nextTitles.push(
               data.at(-4).title,
                data.at(-5).title,
                data.at(-6).title
            );
            // iterate over each element and change to fetched data's
            // next title
            for (let i = 0; i < titlesHtml.length; i++){
                titlesHtml[i].innerHTML = nextTitles[i];
            }
        })
});

prevBtn.addEventListener('click', () => {
    nextBtn.setAttribute('disabled', 'disabled');
    setTimeout(() => {
        nextBtn.removeAttribute( 'disabled');
    }, 3000);
    toggleClass('animate__slideInLeft');
    prevBtn.style.opacity = '45%';
    nextBtn.style.opacity = '100%';
    cardTitles.forEach(x => x.classList.toggle( 'animate__slideInRight'));
    getAPI()
        .then(data => {
            // grab and store title elements
            let titlesHtml = [
                document.querySelector('#title-1'),
                document.querySelector('#title-2'),
                document.querySelector('#title-3')
            ]
            // grab text content of title elements and push to array
            prevTitles.push(
                titlesHtml[0].textContent,
                titlesHtml[1].textContent,
                titlesHtml[2].textContent
            );
            // grab data from fetch request and push to array
            nextTitles.push(
                data.at(-4).title,
                data.at(-5).title,
                data.at(-6).title
            );
            // iterate over each element and change to fetched data's
            // next title
            for (let i = 0; i < titlesHtml.length; i++){
                titlesHtml[i].innerHTML = prevTitles[i];
            }
        })
});

    // badge.innerHTML = content.at(-4).category;
    // cardTitle.innerHTML = content.at(-4).title;
    // cardDesc.innerHTML = content.at(-4).desc;
    // authors.innerHTML = content.at(-4).author;
    // dateTime.innerHTML = content.at(-4).dateCreated;
    // readTime.innerHTML = content.at(-4).readTime;
    //
    // badge.innerHTML = content.at(-5).category;
    // cardTitle.innerHTML = content.at(-5).title;
    // cardDesc.innerHTML = content.at(-5).desc;
    // authors.innerHTML = content.at(-5).author;
    // dateTime.innerHTML = content.at(-5).dateCreated;
    // readTime.innerHTML = content.at(-5).readTime;
    //
    // badge.innerHTML = content.at(-6).category;
    // cardTitle.innerHTML = content.at(-6).title;
    // cardDesc.innerHTML = content.at(-6).desc;
    // authors.innerHTML = content.at(-6).author;
    // dateTime.innerHTML = content.at(-6).dateCreated;
    // readTime.innerHTML = content.at(-6).readTime;
