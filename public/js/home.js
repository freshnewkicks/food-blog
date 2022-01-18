
async function getAPI(){
    const res = await fetch ('http://localhost:3000/api');
    const data = await res.json();
    return data;
}

let nextTitles = [];
let prevCats = [];
let prevTitles = [];
let prevDesc = [];
let prevAuthors = [];
let prevImg = [];
let prev



let prevBtn = document.querySelector('#prev-slider-btn');
let nextBtn = document.querySelector('#next-slider-btn');
prevBtn.style.opacity = '45%';
prevBtn.classList.add('disabled');
let prevCards = {
    cardOne: {
        img: document.querySelector('#img-1'),
        category: document.querySelector('#cat-1'),
        title: document.querySelector('#title-1'),
        desc: document.querySelector('#desc-1'),
        author: document.querySelector('#author-1'),
        dateCreated: document.querySelector('#dc-1'),
        readTime: document.querySelector('#rt-1'),
        profileImg: document.querySelector('#pi-1')
    },
    cardTwo: {
        img: document.querySelector('#img-2'),
        category: document.querySelector('#cat-2'),
        title: document.querySelector('#title-2'),
        desc: document.querySelector('#desc-2'),
        author: document.querySelector('#author-2'),
        dateCreated: document.querySelector('#dc-2'),
        readTime: document.querySelector('#rt-2'),
        profileImg: document.querySelector('#pi-2')
    },
    cardThree: {
        img: document.querySelector('#img-3'),
        category: document.querySelector('#cat-3'),
        title: document.querySelector('#title-3'),
        desc: document.querySelector('#desc-3'),
        author: document.querySelector('#author-3'),
        dateCreated: document.querySelector('#dc-3'),
        readTime: document.querySelector('#rt-3'),
        profileImg: document.querySelector('#pi-3')
    }
}

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
        toggleClass('animate__slideInRight');
        nextBtn.classList.add('disabled');
        setTimeout(() => {prevBtn.classList.remove('disabled')}, 2000);
        prevBtn.style.opacity = '100%';
        nextBtn.style.opacity = '45%';

        getAPI()
            .then(data => {
                console.log(data.at(-4).title);
                // grab and store title elements
                // prevCards.cardOne.title.innerHTML = elon musks stew recipe
                // nextCards.cardOne.title.innerHTML = whatever's next
                // grab and store next elements
                //                    data.at(-4).title,
                //                     data.at(-5).title,
                //                     data.at(-6).title
                let nextData = {
                    cardOne: {
                        img: document.querySelector('#img-1'),
                        category: data.at(-4).category,
                        title: data.at(-4).title,
                        desc: data.at(-4).desc,
                        author: data.at(-4).author,
                        dateCreated: data.at(-4).dateCreated,
                        readTime: data.at(-4).readTime,
                        profileImg: document.querySelector('#pi-1')
                    },
                    cardTwo: {
                        img: document.querySelector('#img-2'),
                        category: data.at(-5).category,
                        title: data.at(-5).title,
                        desc: data.at(-5).desc,
                        author: data.at(-5).author,
                        dateCreated: data.at(-5).dateCreated,
                        readTime: data.at(-5).readTime,
                        profileImg: document.querySelector('#pi-2')
                    },
                    cardThree: {
                        img: document.querySelector('#img-3'),
                        category: data.at(-6).category,
                        title: data.at(-6).title,
                        desc: data.at(-6).desc,
                        author: data.at(-6).author,
                        dateCreated: data.at(-6).dateCreated,
                        readTime: data.at(-6).readTime,
                        profileImg: document.querySelector('#pi-3')
                    }
                }
                // iterate over each element and change to fetched data's
                // next title
                for (let i = 0; i < 8; i++){
                    prevCards.cardOne.category.innerHTML = nextData.cardOne.category;
                    prevCards.cardOne.title.innerHTML = nextData.cardOne.title;
                    prevCards.cardOne.desc.innerHTML = nextData.cardOne.desc;
                    prevCards.cardOne.author.innerHTML = nextData.cardOne.author;
                    prevCards.cardOne.dateCreated.innerHTML = nextData.cardOne.dateCreated;
                    prevCards.cardOne.readTime.innerHTML = nextData.cardOne.readTime;

                    prevCards.cardTwo.category.innerHTML = nextData.cardTwo.category;
                    prevCards.cardTwo.title.innerHTML = nextData.cardTwo.title;
                    prevCards.cardTwo.desc.innerHTML = nextData.cardTwo.desc;
                    prevCards.cardTwo.author.innerHTML = nextData.cardTwo.author;
                    prevCards.cardTwo.dateCreated.innerHTML = nextData.cardTwo.dateCreated;
                    prevCards.cardTwo.readTime.innerHTML = nextData.cardTwo.readTime;

                    prevCards.cardThree.category.innerHTML = nextData.cardThree.category;
                    prevCards.cardThree.title.innerHTML = nextData.cardThree.title;
                    prevCards.cardThree.desc.innerHTML = nextData.cardThree.desc;
                    prevCards.cardThree.author.innerHTML = nextData.cardThree.author;
                    prevCards.cardThree.dateCreated.innerHTML = nextData.cardThree.dateCreated;
                    prevCards.cardThree.readTime.innerHTML = nextData.cardThree.readTime;
                }
            })
    });
prevBtn.addEventListener('click', () => {
    toggleClass('animate__slideInLeft');
    prevBtn.classList.add('disabled');
    setTimeout(() => {nextBtn.classList.remove('disabled')}, 2000);

    prevBtn.style.opacity = '45%';
        nextBtn.style.opacity = '100%';
        cardTitles.forEach(x => x.classList.toggle('animate__slideInRight'));

        getAPI()
            .then(data => {
                // grab and store title elements
                // iterate over each element and change to fetched data's
                // next title
                let prevData = {
                    cardOne: {
                        img: document.querySelector('#img-1'),
                        category: data.at(-1).category,
                        title: data.at(-1).title,
                        desc: data.at(-1).desc,
                        author: data.at(-1).author,
                        dateCreated: data.at(-1).dateCreated,
                        readTime: data.at(-1).readTime,
                        profileImg: document.querySelector('#pi-1')
                    },
                    cardTwo: {
                        img: document.querySelector('#img-2'),
                        category: data.at(-2).category,
                        title: data.at(-2).title,
                        desc: data.at(-2).desc,
                        author: data.at(-2).author,
                        dateCreated: data.at(-2).dateCreated,
                        readTime: data.at(-2).readTime,
                        profileImg: document.querySelector('#pi-2')
                    },
                    cardThree: {
                        img: document.querySelector('#img-3'),
                        category: data.at(-3).category,
                        title: data.at(-3).title,
                        desc: data.at(-3).desc,
                        author: data.at(-3).author,
                        dateCreated: data.at(-3).dateCreated,
                        readTime: data.at(-3).readTime,
                        profileImg: document.querySelector('#pi-3')
                    }
                }
                for (let i = 0; i < 8; i++){
                    prevCards.cardOne.category.innerHTML = prevData.cardOne.category;
                    prevCards.cardOne.title.innerHTML = prevData.cardOne.title;
                    prevCards.cardOne.desc.innerHTML = prevData.cardOne.desc;
                    prevCards.cardOne.author.innerHTML = prevData.cardOne.author;
                    prevCards.cardOne.dateCreated.innerHTML = prevData.cardOne.dateCreated;
                    prevCards.cardOne.readTime.innerHTML = prevData.cardOne.readTime;

                    prevCards.cardTwo.category.innerHTML = prevData.cardTwo.category;
                    prevCards.cardTwo.title.innerHTML = prevData.cardTwo.title;
                    prevCards.cardTwo.desc.innerHTML = prevData.cardTwo.desc;
                    prevCards.cardTwo.author.innerHTML = prevData.cardTwo.author;
                    prevCards.cardTwo.dateCreated.innerHTML = prevData.cardTwo.dateCreated;
                    prevCards.cardTwo.readTime.innerHTML = prevData.cardTwo.readTime;

                    prevCards.cardThree.category.innerHTML = prevData.cardThree.category;
                    prevCards.cardThree.title.innerHTML = prevData.cardThree.title;
                    prevCards.cardThree.desc.innerHTML = prevData.cardThree.desc;
                    prevCards.cardThree.author.innerHTML = prevData.cardThree.author;
                    prevCards.cardThree.dateCreated.innerHTML = prevData.cardThree.dateCreated;
                    prevCards.cardThree.readTime.innerHTML = prevData.cardThree.readTime;

                }
            })
    });

