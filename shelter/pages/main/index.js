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

const sliderArr = [];

let state = {
  burger__open: false,
  sliderFirst: null,
  sliderMiddle: null,
  sliderLast: null,
  step: null
}

let burger = document.querySelector('.burger__nav');
let logo = document.querySelector('.shelter__logo');


const sliderDraw = function(destination) {
    document.querySelectorAll('.card').forEach(item => item.remove());
    let arr = [];

    if (!state.step) {
      state.sliderFirst = 0; state.sliderMiddle =1; state.sliderLast = 2;
      if (document.documentElement.clientWidth >= 1280) {  state.step = 3; }
      if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) { state.step = 2;}
      if (document.documentElement.clientWidth < 768) { state.step = 1; }

      while(sliderArr.length !== json.length) {
        let r = Math.floor(Math.random() * json.length - 1) + 1;
        if(sliderArr.indexOf(r) === -1) sliderArr.push(r);
      }
    }
    
    if (destination === 'next') {
      if (state.sliderFirst || state.sliderFirst === 0) {
        if (state.sliderFirst + state.step > sliderArr.length - 1) {
          state.sliderFirst = state.sliderFirst + state.step - sliderArr.length;
        } else {
          state.sliderFirst = state.sliderFirst + state.step;
        }
      }

      if (state.sliderMiddle || state.sliderMiddle === 0) {
        if (state.sliderMiddle + state.step > sliderArr.length - 1) {
          state.sliderMiddle = state.sliderMiddle + state.step - sliderArr.length;
        } else {
          state.sliderMiddle = state.sliderMiddle + state.step;
        }
      }


      if (state.sliderLast || state.sliderLast === 0) {
        if (state.sliderLast + state.step > sliderArr.length - 1) {
          state.sliderLast = state.sliderLast + state.step - sliderArr.length;
        } else {
          state.sliderLast = state.sliderLast + state.step;
        }
      }
  
    } else if (destination === 'prev' ) {
      if (state.sliderFirst || state.sliderFirst === 0) {
        if (state.sliderFirst - state.step < 0) {
          state.sliderFirst = sliderArr.length + state.sliderFirst - state.step;
        } else {
          state.sliderFirst -= state.step;
        }
      }
      if (state.sliderMiddle || state.sliderMiddle === 0) {
        if (state.sliderMiddle - state.step < 0) {
          state.sliderMiddle = sliderArr.length + state.sliderMiddle - state.step;
        } else {
          state.sliderMiddle -= state.step;
        }
      }
      if (state.sliderLast || state.sliderLast === 0) {
        if (state.sliderLast - state.step < 0) {
          state.sliderLast = sliderArr.length + state.sliderLast - state.step;
        } else {
          state.sliderLast -= state.step;
        }
      }
    }

    arr = [state.sliderFirst, state.sliderMiddle, state.sliderLast]
      .filter(item => item !== null)
      .map(item => sliderArr[item]);

    constructSlider(arr);
}

function constructSlider(arr) {
        let full = document.querySelectorAll('.full__screen__control');
        let cards = generateHTML(arr.map(item => json[item]), arr);

        cards.forEach(element => {
            full[0].after(element);
        });
}

function generateHTML(arr, items) {
    return arr.map((item, index) => {

        let div = document.createElement('div');
        div.classList.add('card');
        div.addEventListener('click', function() {
          modal.style.display = "flex";
          document.body.style.overflow = 'hidden';
          drawModal(json[items[index]]);
        })
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p class="pets__card__title">${item.name}</p>
            <button class="btn__secondary">Learn more</button>`;

        return div;
    });
}

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

window.onload = function() {
    sliderDraw();
}

document.querySelector('#burger').addEventListener('click', function() {
  if (burger.classList.contains('w3-animate-show')) {
    burger.classList.remove('w3-animate-show');
  } else {
    burger.classList.add('w3-animate-show')
  }
});

window.onclick = function(event) {
  if (document.getElementById('burger').checked === true) {
    if (event.target === burger) {
      if (burger.classList.contains('w3-animate-show')) {
        burger.classList.remove('w3-animate-show');
      } else {
        burger.classList.add('w3-animate-show')
      }
      document.getElementById('burger').checked = false;
      disableBody();
    }
  }
}