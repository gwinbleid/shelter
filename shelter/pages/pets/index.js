const json = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];

let itemsArr = [];

function disableBody() {
    let body = document.querySelector('body');
    let logo = document.querySelector('.shelter__logo');

    if (body.classList.contains('disable__body')) {
        body.classList.remove('disable__body');
        logo.classList.remove('header_Z');
    } else {
        body.classList.add('disable__body');
        logo.classList.add('header_Z');
    }
}

function panelDraw() {
  let itemOnPage;
  let page = document.querySelector('#page__count').innerHTML;
  let panel = document.querySelector('.slider__panel');

  let next_btns = document.querySelectorAll('.next__buttons');
  let prev_btns = document.querySelectorAll('.prev__buttons')

  panel.innerHTML = '';
  
  if (document.documentElement.clientWidth >= 1280) itemOnPage = 8;
  if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) itemOnPage = 6;
  if (document.documentElement.clientWidth < 768) itemOnPage = 3;

  next_btns.forEach(item => {
    item.classList.remove('inactive');
    item.disabled = false;
  });

  prev_btns.forEach(item => {
    item.classList.remove('inactive');
    item.disabled = false;
  });
  
  if ((+page + 1) * itemOnPage - 1 > itemsArr.length) { 
    next_btns.forEach(item => {
      item.classList.add('inactive');
      item.disabled = true;
    });
  } else if (+page === 1) { 
    prev_btns.forEach(item => {
      item.classList.add('inactive');
      item.disabled = true;
    });
  }

  console.log(itemsArr);

  console.log(itemOnPage * (+page - 1));
  let data = itemsArr
          .slice(itemOnPage * (page - 1), itemOnPage * (page - 1) + itemOnPage)
          .map(item => {
            let data = json[item];
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
              <img src="${data.img}" alt="Pet Image">
              <p class="pets__card__title">${data.name}</p>
              <button class="btn__secondary">Learn more</button>
            `;

            return card;
          })
          .forEach(item => panel.append(item));

  console.log(data);
  console.log(itemOnPage);
}

function generateItems() {

  let arr  = [];
  while (arr.length < json.length) {
    let r = Math.floor(Math.random() * json.length - 1) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }

  return [...arr, ...arr, ...arr, ...arr, ...arr, ...arr];
}

function moveToOne(side) {
    let page = document.querySelector('#page__count');

    if (side === 'prev') {
      if (+page === 1) {
        return;
      } else {
        page.innerHTML = +page.innerHTML - 1;
        panelDraw();
      }
    }

    if (side === 'next') {
      let itemOnPage;
      
      if (document.documentElement.clientWidth >= 1280) itemOnPage = 8;
      if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) itemOnPage = 6;
      if (document.documentElement.clientWidth < 768) itemOnPage = 3;

      if (+page * itemOnPage >= itemsArr.length) {
        return;
      } else {
        page.innerHTML = +page.innerHTML + 1;
        panelDraw();
      }
    }
}

function moveToEnd(side) {
  let page = document.querySelector('#page__count');

    if (side === 'prev') {
        page.innerHTML = 1;
        panelDraw();
    }

    if (side === 'next') {
      let itemOnPage;
      
      if (document.documentElement.clientWidth >= 1280) itemOnPage = 8;
      if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) itemOnPage = 6;
      if (document.documentElement.clientWidth < 768) itemOnPage = 3;

      page.innerHTML = (itemsArr.length) / itemOnPage;
      panelDraw();
    }
}

window.onload = function() {
    document.querySelector('body').style.overflowX = 'hidden';
    let page = document.querySelector('#page__count');
    page.innerHTML = '1';

    itemsArr = generateItems();
    panelDraw();
}

window.onclick = function(event) {
  if (document.getElementById('burger').checked === true) {
    console.log('works');
    let burger__nav = document.querySelector('.burger__nav');
    if (event.target === burger__nav) {
      document.getElementById('burger').checked = false;
    }
  }
  
}