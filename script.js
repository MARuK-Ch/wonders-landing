const STATIONS = [
    // Switzerland
    "Zermatt Bus Terminal",
    "Interlaken Ost Bus Station",
    "Grindelwald Bus Terminal",
    "Lauterbrunnen Bahnhof",
    "Lucerne Bahnhofquai",
    "Chamonix-Mont-Blanc Sud (France, near Swiss border)",
    "Geneva Bus Station",
    "Bern PostAuto Terminal",
    "Gstaad Bus Station",
    "St. Moritz Bahnhof PostAuto",
    "Verbier Village",
    "Davos Platz Postautohaltestelle",
    "Andermatt Gotthardpass",
    "Täsch Bahnhof (Shuttle to Zermatt)",
    "Flims Dorf Post",

    // France
    "Chamonix Sud Bus Station",
    "Annecy Gare Routière",
    "Grenoble Gare Routière",
    "Nice Airport (Bus to Alps)",
    "Bourg-Saint-Maurice Gare Routière",
    "Morzine Gare Routière",
    "Les Gets Gare Routière",
    "Val d'Isère Centre",
    "Courchevel 1850",
    "Megève Place du Village",

    // Italy
    "Aosta Autostazione",
    "Bolzano Autostazione",
    "Trento Autostazione",
    "Cortina d'Ampezzo Autostazione",
    "Bormio Bus Station",
    "Livigno Centro",
    "Merano Autostazione",
    "Sestriere Bus Stop",
    "Ortisei (St. Ulrich) Autostazione",
    "Canazei Piazza Marconi",

    // Austria
    "Innsbruck Hauptbahnhof Bus Terminal",
    "Salzburg Süd Busbahnhof",
    "Mayrhofen Bahnhof",
    "Lech am Arlberg Postamt",
    "Kitzbühel Hahnenkammbahn",
    "Ischgl Seilbahn",
    "Zell am See Postplatz",
    "Bad Gastein Bahnhof",
    "St. Anton am Arlberg Bahnhof",
    "Sölden Postamt",

    // Germany
    "Garmisch-Partenkirchen Bahnhof (Bus Station)",
    "Berchtesgaden Busbahnhof",
    "Oberstdorf Busbahnhof",
    "Füssen Bahnhof (Bus Station)",
    "Mittenwald Bahnhof (Bus Station)",

    // Slovenia
    "Bled Bus Station",
    "Bohinj Jezero",
    "Kranjska Gora Avtobusna Postaja"
];

const departureInput = document.getElementById('departure-input');
const autocompleteDropdown = document.getElementById('autocomplete-dropdown');


//отображение выпадающего списка
departureInput.addEventListener('focus', (event) => {
    autocompleteDropdown.classList.remove('hidden');
    const value = event.target.value;

    renderStations(value);
})

//скрытие выпадающего списка
departureInput.addEventListener('blur', (event) => {
    autocompleteDropdown.classList.add('hidden');
})

//взаимодействие с содержимым инпута
departureInput.addEventListener('keyup', (event) => {
    const value = event.target.value;

    renderStations(value);
})


function renderStations(value) {
    let filteredStations = STATIONS.filter(station => station.toUpperCase().includes(value.toUpperCase().trim()));
    const filteredListElements = filteredStations.map((station) => {
        const li = document.createElement("li");
        li.innerText = station;
        return li;
    })
    autocompleteDropdown.innerHTML = '';

    if (filteredListElements.length === 0) {
        autocompleteDropdown.innerHTML = '<span class="not-found-span">Not found</span>'; //вывод если не найдено ни одно занчение
    }
    else {
        autocompleteDropdown.append(...filteredListElements);
    }
}

//ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
autocompleteDropdown.addEventListener('mousedown', (event) => {
    if (event.target.nodeName === 'LI') {
        departureInput.value = event.target.innerText;
    }
})


//ФУНКЦИИ ДЛЯ БЛОКА ARRIVAL
const arrivalInput = document.getElementById('arrival-input');
const autocompleteDropdownArrival = document.getElementById('autocomplete-dropdown-arrival');


//отображение выпадающего списка
arrivalInput.addEventListener('focus', (event) => {
    autocompleteDropdownArrival.classList.remove('hidden');
    const value = event.target.value;

    renderStationsArrival(value);
})

//скрытие выпадающего списка
arrivalInput.addEventListener('blur', (event) => {
    autocompleteDropdownArrival.classList.add('hidden');
})

//взаимодействие с содержимым инпута
arrivalInput.addEventListener('keyup', (event) => {
    const value = event.target.value;

    renderStationsArrival(value);
})


function renderStationsArrival(value) {
    let filteredStations = STATIONS.filter(station => station.toUpperCase().includes(value.toUpperCase().trim()));
    const filteredListElements = filteredStations.map((station) => {
        const li = document.createElement("li");
        li.innerText = station;
        return li;
    })
    autocompleteDropdownArrival.innerHTML = '';

    if (filteredListElements.length === 0) {
        autocompleteDropdownArrival.innerHTML = '<span class="not-found-span">Not found</span>'; //вывод если не найдено ни одно занчение
    }
    else {
        autocompleteDropdownArrival.append(...filteredListElements);
    }
}

//ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
autocompleteDropdownArrival.addEventListener('mousedown', (event) => {
    if (event.target.nodeName === 'LI') {
        arrivalInput.value = event.target.innerText;
    }
})

//СЧЕТЧИК ПАССАЖИРОВ
const counterText = document.querySelector('.counter-span');
const counterButton = document.querySelectorAll('.counter-button');
let counter = 1;

counterButton.forEach( (el,index) => {
    el.addEventListener('click', (e) => {
        if (index === 0 && counter > 1) {
            counter = counter - 1;
        } else if (index === 1 && counter < 12) {
            counter = counter + 1;
        }
        counterText.textContent = counter;
    });
});

// БУРГЕР МЕНЮ
document.getElementById('burger').addEventListener('click', (e) => {
    document.querySelector('.burger').classList.toggle('open')
});

document.getElementById('burger').addEventListener('click', (e) => {
    document.querySelector('.menu').classList.toggle('open')
});



const footerLinks = document.querySelectorAll('.footer-links-item');

footerLinks.forEach( footerLink => {
    footerLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Что-то пошло не так. Виноват бэк...');
    });
});

//ФУНКЦИИ КАЛЕНДАРЯ

const leftMonthYearEl = document.getElementById('left-month-year')
const rightMonthYearEl = document.getElementById('right-month-year')
const prevMonthBtn = document.getElementById('prev-month-btn')
const nextMonthBtn = document.getElementById('next-month-btn')
const currMonthDatesEl = document.getElementById('curr-month-dates')
const nextMonthDatesEl = document.getElementById('next-month-dates')

class Calendar {
    #currentDate = new Date()
    #nextDate = new Date()
    #leftMonthYearEl
    #rightMonthYearEl
    #prevMonthBtn
    #nextMonthBtn
    #currMonthDatesEl
    #nextMonthDatesEl

    constructor(leftMonthYearEl, rightMonthYearEl, prevMonthBtn, nextMonthBtn, currMonthDatesEl, nextMonthDatesEl) {
        this.#leftMonthYearEl = leftMonthYearEl
        this.#rightMonthYearEl = rightMonthYearEl
        this.#prevMonthBtn = prevMonthBtn
        this.#nextMonthBtn = nextMonthBtn
        this.#currMonthDatesEl = currMonthDatesEl
        this.#nextMonthDatesEl = nextMonthDatesEl
    }

    init() {
        this.#nextDate.setMonth(this.#currentDate.getMonth() + 1)
        this.#render()

        this.#prevMonthBtn.addEventListener('click', function () {
            // this = Calendar
            this.#goPrevMonth()
            this.#render()
        }.bind(this))
        this.#nextMonthBtn.addEventListener('click', function () {
            // this = Calendar
            this.#goNextMonth()
            this.#render()
        }.bind(this))
    }

    #goPrevMonth() {
        this.#currentDate.setMonth(this.#currentDate.getMonth() - 1) // 0 - 1 = 11
        this.#nextDate.setMonth(this.#nextDate.getMonth() - 1) // 11 + 1 = 0
    }

    #goNextMonth() {
        this.#currentDate.setMonth(this.#currentDate.getMonth() + 1)
        this.#nextDate.setMonth(this.#nextDate.getMonth() + 1)
    }

    #getMonthMatrix(dateObj) {
        const year = dateObj.getFullYear() // 2025
        const month = dateObj.getMonth() // 0,1,2,3
        const daysInMonth = new Date(year, month + 1, 0).getDate() // последний день месяца (кол-во дней в месяце)
        const firstDay = new Date(year, month, 1)
        const firstDayWeekIndex = (firstDay.getDay() + 6) % 7


        // 1 - Понедельник -> 1 + 6 = 7 % 7 = 0
        // 2 - Вторник -> 2 + 6 = 8 % 7 = 1
        // 3 - Среда -> 3 + 6 = 9 % 7 = 2
        // 4 - Четверг -> 4 + 6 = 10 % 7 = 3
        // 5 - Пятница -> 5 + 6 = 11 % 7 = 4
        // 6 - Суббота -> 6 + 6 = 12 % 7 = 5
        // 0 - Воскресенье -> 7 + 6 = 13 % 7 = 6

        // (день + предпоследний день) % максимально кол-во дней

        const matrix = []
        // первая неделя
        const firstWeek = new Array(7).fill(null) // [null, null, null, null, null, null, null,]
        let dayCounter = 1

        // Заполняем массив первой неделы (до первого числа)
        for (let i = 0; i < firstDayWeekIndex; i++) { // [null, null]
            firstWeek[i] = null
        }
        // заполняем остаток недели (после первого числа)
        for (let i = firstDayWeekIndex; i < 7; i++) { // [null, null, 1, 2, 3, 4, 5]
            firstWeek[i] = dayCounter
            dayCounter++
        }
        // Добавляем в матрицу первую неделю
        matrix.push(firstWeek)

        // заполняем остальные дни других недель
        while (dayCounter <= daysInMonth) { // 8 <= 31
            const newWeek = new Array(7).fill(null)
            for (let i = 0; i < 7 && dayCounter <= daysInMonth; i++) { // [8, 9, 10, 11, 12, 13, 14]
                newWeek[i] = dayCounter
                dayCounter++
            }

            matrix.push(newWeek)
        }

        return matrix
    }

    #render() {
        this.#leftMonthYearEl.innerText = this.#currentDate.toLocaleString('en', { month: 'long', year: 'numeric' })
        this.#rightMonthYearEl.innerText = this.#nextDate.toLocaleString('en', { month: 'long', year: 'numeric' })

        const currentMonthMatrix = this.#getMonthMatrix(this.#currentDate) // september
        const nextMonthMatrix = this.#getMonthMatrix(this.#nextDate) // october

        this.#currMonthDatesEl.innerHTML = ''
        this.#nextMonthDatesEl.innerHTML = ''

        currentMonthMatrix.forEach((week) => {
            week.forEach((day) => {
                if (!day) {
                    this.#currMonthDatesEl.innerHTML += `<span class="empty"></span>`
                }
                else {
                    this.#currMonthDatesEl.innerHTML += `<button class="date">${day}</button>`
                }
            })
        })

        nextMonthMatrix.forEach((week) => {
            week.forEach((day) => {
                if (!day) {
                    this.#nextMonthDatesEl.innerHTML += `<span class="empty"></span>`
                }
                else {
                    this.#nextMonthDatesEl.innerHTML += `<button class="date">${day}</button>`
                }
            })
        })
    }
}

const calendar = new Calendar(leftMonthYearEl, rightMonthYearEl, prevMonthBtn, nextMonthBtn, currMonthDatesEl, nextMonthDatesEl)
calendar.init()

// console.log(calendar)

// ОТОБРАЖЕНИЕ И СКРЫТИЕ КАЛЕНДАРЯ
const dateInputButton = document.querySelectorAll('.date-input-button');

dateInputButton.forEach( (el,index) => {
    el.addEventListener('click', (e) => {
        document.querySelector('.calendar').classList.toggle('hidden')
    });
});

// ВАЛИДАЦИЯ ФОРМЫ ПОИСКА(без учета заполнения полей календаря)
const findAlpRideBtn = document.getElementById('depart-button');

findAlpRideBtn.addEventListener('click', function () {
    const departeValue = document.getElementById('departure-input').value.trim();
    const arrivValue = document.getElementById('arrival-input').value.trim();

    if (!departeValue || !arrivValue) {
        alert('Please fill in all required fields: Departure, Arrival!');
        return;
    }
    if (departeValue.toLowerCase() === arrivValue.toLowerCase()) {
        alert('The departure and destination points must be different');
        return;
    }
    window.location.href = 'https://github.com/MARuK-Ch'; // позже будет добавлен переход на bus-list.html
});








