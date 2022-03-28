let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let labels1 = ['English', 'Hindi', 'Science', 'Social', 'Maths', 'Other'];
let data1 = [10, 6, 15, 34, 17, 18];
let colors1 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

let myChart = document.getElementById("myChart").getContext('2d');

let chart = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "Academic score subject wise(in Percentage)",
            display: true
        }
    }
});

let labels2 = ['English', 'Hindi', 'Math', 'Science', ' Social Studies', 'Other'];
let data2 = [199.6, 130.3, 126.3, 130, 156, 178];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#FF0000', '#0000FF'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Number of marks in whole academic year (From 200) ",
            display: true
        },
        legend: {
            display: false
        }
    }
});




