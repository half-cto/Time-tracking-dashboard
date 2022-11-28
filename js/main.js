const hoursLabels = document.getElementsByClassName('board__stat-card__hours');
const timeFrameLabels = document.getElementsByClassName('board__stat-card__timeframe');
const dailyBtn = document.getElementById('board__daily');
const weeklyBtn = document.getElementById('board__weekly');
const monthlyBtn = document.getElementById('board__monthly');



const getData = event => {
    removeActive();
    addActive(event.target);

    const timeFrame = (event.target.innerHTML).toLowerCase();

    fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {

        for(let i = 0; i < hoursLabels.length; i++) {
            hoursLabels[i].innerHTML = `${data[i].timeframes[timeFrame].current}hrs`;
        }

        let previousTimeframe = '';
            switch (timeFrame) {
                case 'daily':
                    previousTimeframe = 'Yesterday - ';
                    break;
                case 'weekly':
                    previousTimeframe = 'Last Week - ';
                    break;
                case 'monthly':
                    previousTimeframe = 'Last Month - ';
                    break;
            }

        for(let i = 0; i < timeFrameLabels.length; i++) {
            timeFrameLabels[i].innerHTML = previousTimeframe + data[i].timeframes[timeFrame].previous + 'hrs';
        }
    })
}

const addActive = element => {
    element.classList.add('active')
}

const removeActive = () => {
    dailyBtn.classList.remove('active');
    weeklyBtn.classList.remove('active');
    monthlyBtn.classList.remove('active');
}

dailyBtn.addEventListener('click', getData);
weeklyBtn.addEventListener('click', getData);
monthlyBtn.addEventListener('click', getData);

dailyBtn.click();
