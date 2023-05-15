const salary_2022 = [
  64120, 66076, 68058, 70060, 72090, 74138, 76213, 78306, 80414, 82544, 84688,
  86836, 89005, 91179, 93365, 95556, 97747, 99942, 102136, 104324, 106510,
  108692, 110857, 113018, 115154, 117280, 119382, 121468, 123527, 125559,
];

const calendar_leap_year_hours = 2096;
const school_year_hours = 1520;

var app = angular.module("myApp", []);

app.controller("myController", function ($scope, $http) {
  $scope.u100 = [
    { Step: 0, Annual: 67294, PerHour: 32.11, Earned: 44.27 },
    { Step: 1, Annual: 69347, PerHour: 33.09, Earned: 45.62 },
    { Step: 2, Annual: 71427, PerHour: 34.08, Earned: 46.99 },
    { Step: 3, Annual: 73528, PerHour: 35.08, Earned: 48.37 },
    { Step: 4, Annual: 75658, PerHour: 36.1, Earned: 49.77 },
    { Step: 5, Annual: 77808, PerHour: 37.12, Earned: 51.19 },
    { Step: 6, Annual: 79986, PerHour: 38.16, Earned: 52.62 },
    { Step: 7, Annual: 82182, PerHour: 39.21, Earned: 54.07 },
    { Step: 8, Annual: 84394, PerHour: 40.26, Earned: 55.52 },
    { Step: 9, Annual: 86630, PerHour: 41.33, Earned: 56.99 },
    { Step: 10, Annual: 88880, PerHour: 42.4, Earned: 58.47 },
    { Step: 11, Annual: 91134, PerHour: 43.48, Earned: 59.96 },
    { Step: 12, Annual: 93411, PerHour: 44.57, Earned: 61.45 },
    { Step: 13, Annual: 95692, PerHour: 45.65, Earned: 62.96 },
    { Step: 14, Annual: 97987, PerHour: 46.75, Earned: 64.47 },
    { Step: 15, Annual: 100286, PerHour: 47.85, Earned: 65.98 },
    { Step: 16, Annual: 102585, PerHour: 48.94, Earned: 67.49 },
    { Step: 17, Annual: 104889, PerHour: 50.04, Earned: 69.01 },
    { Step: 18, Annual: 107192, PerHour: 51.14, Earned: 70.52 },
    { Step: 19, Annual: 109488, PerHour: 52.24, Earned: 72.03 },
    { Step: 20, Annual: 111782, PerHour: 53.33, Earned: 73.54 },
    { Step: 21, Annual: 114072, PerHour: 54.42, Earned: 75.05 },
    { Step: 22, Annual: 116344, PerHour: 55.51, Earned: 76.54 },
    { Step: 23, Annual: 118612, PerHour: 56.59, Earned: 78.03 },
    { Step: 24, Annual: 120854, PerHour: 57.66, Earned: 79.51 },
    { Step: 25, Annual: 123085, PerHour: 58.72, Earned: 80.98 },
    { Step: 26, Annual: 125291, PerHour: 59.78, Earned: 82.43 },
    { Step: 27, Annual: 127481, PerHour: 60.82, Earned: 83.87 },
    { Step: 28, Annual: 129642, PerHour: 61.85, Earned: 85.29 },
    { Step: 29, Annual: 131774, PerHour: 62.87, Earned: 86.69 },
  ];

  $scope.u200 = [
    { Step: 0, Annual: 64657, PerHour: 30.85, Earned: 42.54 },
    { Step: 1, Annual: 66622, PerHour: 31.79, Earned: 43.83 },
    { Step: 2, Annual: 68619, PerHour: 32.74, Earned: 45.14 },
    { Step: 3, Annual: 70639, PerHour: 33.7, Earned: 46.47 },
    { Step: 4, Annual: 72682, PerHour: 34.68, Earned: 47.82 },
    { Step: 5, Annual: 74751, PerHour: 35.66, Earned: 49.18 },
    { Step: 6, Annual: 76843, PerHour: 36.66, Earned: 50.55 },
    { Step: 7, Annual: 78956, PerHour: 37.67, Earned: 51.94 },
    { Step: 8, Annual: 81082, PerHour: 38.68, Earned: 53.34 },
    { Step: 9, Annual: 83223, PerHour: 39.71, Earned: 54.75 },
    { Step: 10, Annual: 85384, PerHour: 40.74, Earned: 56.17 },
    { Step: 11, Annual: 87555, PerHour: 41.77, Earned: 57.6 },
    { Step: 12, Annual: 89739, PerHour: 42.81, Earned: 59.04 },
    { Step: 13, Annual: 91938, PerHour: 43.86, Earned: 60.49 },
    { Step: 14, Annual: 94140, PerHour: 44.91, Earned: 61.93 },
    { Step: 15, Annual: 96342, PerHour: 45.96, Earned: 63.38 },
    { Step: 16, Annual: 98555, PerHour: 47.02, Earned: 64.84 },
    { Step: 17, Annual: 100767, PerHour: 48.08, Earned: 66.29 },
    { Step: 18, Annual: 102979, PerHour: 49.13, Earned: 67.75 },
    { Step: 19, Annual: 105186, PerHour: 50.18, Earned: 69.2 },
    { Step: 20, Annual: 107392, PerHour: 51.24, Earned: 70.65 },
    { Step: 21, Annual: 109589, PerHour: 52.28, Earned: 72.1 },
    { Step: 22, Annual: 111776, PerHour: 53.33, Earned: 73.54 },
    { Step: 23, Annual: 113948, PerHour: 54.36, Earned: 74.97 },
    { Step: 24, Annual: 116106, PerHour: 55.39, Earned: 76.39 },
    { Step: 25, Annual: 118250, PerHour: 56.42, Earned: 77.8 },
    { Step: 26, Annual: 120371, PerHour: 57.43, Earned: 79.19 },
    { Step: 27, Annual: 122471, PerHour: 58.43, Earned: 80.57 },
    { Step: 28, Annual: 124550, PerHour: 59.42, Earned: 81.94 },
    { Step: 29, Annual: 126601, PerHour: 60.4, Earned: 83.29 },
  ];

  $scope.u300 = [
    { Step: 0, Annual: 51483, PerHour: 24.56, Earned: 33.87 },
    { Step: 1, Annual: 53052, PerHour: 25.31, Earned: 34.9 },
    { Step: 2, Annual: 54640, PerHour: 26.07, Earned: 35.95 },
    { Step: 3, Annual: 56245, PerHour: 26.83, Earned: 37.0 },
    { Step: 4, Annual: 57875, PerHour: 27.61, Earned: 38.08 },
    { Step: 5, Annual: 59521, PerHour: 28.4, Earned: 39.16 },
    { Step: 6, Annual: 61187, PerHour: 29.19, Earned: 40.25 },
    { Step: 7, Annual: 62865, PerHour: 29.99, Earned: 41.36 },
    { Step: 8, Annual: 64557, PerHour: 30.8, Earned: 42.47 },
    { Step: 9, Annual: 66265, PerHour: 31.61, Earned: 43.6 },
    { Step: 10, Annual: 67985, PerHour: 32.44, Earned: 44.73 },
    { Step: 11, Annual: 69723, PerHour: 33.26, Earned: 45.87 },
    { Step: 12, Annual: 71454, PerHour: 34.09, Earned: 47.01 },
    { Step: 13, Annual: 73203, PerHour: 34.92, Earned: 48.16 },
    { Step: 14, Annual: 74957, PerHour: 35.76, Earned: 49.31 },
    { Step: 15, Annual: 76723, PerHour: 36.6, Earned: 50.48 },
    { Step: 16, Annual: 78478, PerHour: 37.44, Earned: 51.63 },
    { Step: 17, Annual: 80239, PerHour: 38.28, Earned: 52.79 },
    { Step: 18, Annual: 81999, PerHour: 39.12, Earned: 53.95 },
    { Step: 19, Annual: 83758, PerHour: 39.96, Earned: 55.1 },
    { Step: 20, Annual: 85512, PerHour: 40.8, Earned: 56.26 },
    { Step: 21, Annual: 87263, PerHour: 41.63, Earned: 57.41 },
    { Step: 22, Annual: 89003, PerHour: 42.46, Earned: 58.55 },
    { Step: 23, Annual: 90734, PerHour: 43.29, Earned: 59.69 },
    { Step: 24, Annual: 92451, PerHour: 44.11, Earned: 60.82 },
    { Step: 25, Annual: 94159, PerHour: 44.92, Earned: 61.95 },
    { Step: 26, Annual: 95848, PerHour: 45.73, Earned: 63.06 },
    { Step: 27, Annual: 97521, PerHour: 46.53, Earned: 64.16 },
    { Step: 28, Annual: 99175, PerHour: 47.32, Earned: 65.25 },
    { Step: 29, Annual: 100806, PerHour: 48.09, Earned: 66.32 },
  ];

  //$scope.u500 = [];

  // $scope.submit = function () {
  //   const u1xxRate = Number(document.getElementById("u1xx").value) / 100;
  //   const u2xxRate = document.getElementById("u2xx").value;
  //   const u3xxRate = document.getElementById("u3xx").value;
  //   const u5xxRate = document.getElementById("u5xx").value;

  //   console.log(u1xxRate);
  //   console.log(u2xxRate);
  //   console.log(u3xxRate);
  //   console.log(u5xxRate);

  //   document.querySelector("form").reset();

  //   const salary_2023 = salary_2022.map((s) => Math.round(s * u1xxRate + s));
  //   console.log(salary_2023);

  //   // $scope.u100 = salary_2023.map((s, i) => {
  //   //   let annual = s; //Math.round(s * u1xxRate + s);
  //   //   let perhour = annual / calendar_leap_year_hours;
  //   //   let earned = annual / school_year_hours;
  //   //   return {
  //   //     Step: i,
  //   //     Annual: annual,
  //   //     PerHour: perhour.toFixed(2),
  //   //     Earned: earned.toFixed(2),
  //   //   };
  //   // });
  //   // console.log(JSON.stringify($scope.u100));
  // };
});

// JavaScript Document
// console.log("script.js loaded...");
// const rate_increase_2023 = 4.95 / 100;
// const calendar_leap_year_hours = 2096;
// const school_year_hours = 1520;

// const salary_2022 = [
//   64120, 66076, 68058, 70060, 72090, 74138, 76213, 78306, 80414, 82544, 84688,
//   86836, 89005, 91179, 93365, 95556, 97747, 99942, 102136, 104324, 106510,
//   108692, 110857, 113018, 115154, 117280, 119382, 121468, 123527, 125559,
// ];
// console.log(salary_2022);

// $(document).ready(function () {
//   $("#target").on("submit", function (e) {
//     e.preventDefault();
//     //alert("submit button clicked...");
//     console.log("submit clicked...");

//     const salary_2023 = salary_2022.map((s) =>
//       Math.round(s * rate_increase_2023 + s)
//     );
//     console.log(salary_2023);
//   });
// });
