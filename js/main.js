const hoursLabels = document.getElementsByClassName('board__stat-card__hours');
const timeFrameLabels = document.getElementsByClassName('board__stat-card__timeframe');

console.log(hoursLabels);
console.log(timeFrameLabels);


fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        console.log(data[0].timeframes.daily.current);

        for(let i = 0; i < hoursLabels.length; i++) {
            hoursLabels[i].innerHTML = `${data[i].timeframes.daily.current}`;
        }

        for(let i = 0; i < timeFrameLabels.length; i++) {
            timeFrameLabels[i].innerHTML = `Yesterday -${data[i].timeframes.daily.previous}`;
        }
    })