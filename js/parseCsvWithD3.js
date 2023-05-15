const u100 = [];
const u110 = [];
const u130 = [];
const u150 = [];
const u200 = [];
const u210 = [];
const u230 = [];
const u250 = [];
const u300 = [];
const u310 = [];
const u330 = [];
const u350 = [];
const u500 = [];
const u510 = [];
const u530 = [];
const u550 = [];

d3.csv("../data/current_pay_data.csv").then((data) => {
  // convert the BASIC_SALARY string to a number
  data.forEach((d) => {
    // convert the BASIC_SALARY string to a number
    d.BASIC_SALARY = +d.BASIC_SALARY;

    // group all the pay tables into seperate pay tables

    if (d.PAY_TABLE == "U100") {
      u100.push(d);
    } else if (d.PAY_TABLE == "U110") {
      u110.push(d);
    } else if (d.PAY_TABLE == "U130") {
      u130.push(d);
    } else if (d.PAY_TABLE == "U130") {
      u130.push(d);
    } else if (d.PAY_TABLE == "U150") {
      u150.push(d);
    } else if (d.PAY_TABLE == "U200") {
      u200.push(d);
    } else if (d.PAY_TABLE == "U210") {
      u210.push(d);
    } else if (d.PAY_TABLE == "U230") {
      u230.push(d);
    } else if (d.PAY_TABLE == "U250") {
      u250.push(d);
    } else if (d.PAY_TABLE == "U300") {
      u300.push(d);
    } else if (d.PAY_TABLE == "U310") {
      u310.push(d);
    } else if (d.PAY_TABLE == "U330") {
      u330.push(d);
    } else if (d.PAY_TABLE == "U350") {
      u350.push(d);
    } else if (d.PAY_TABLE == "U500") {
      u500.push(d);
    } else if (d.PAY_TABLE == "U510") {
      u510.push(d);
    } else if (d.PAY_TABLE == "U530") {
      u530.push(d);
    } else if (d.PAY_TABLE == "U550") {
      u550.push(d);
    }
  });
  console.log(u100);
  //   console.log(u110);
  //   console.log(u130);
  //   console.log(u150);
  console.log(u200);
  //   console.log(u210);
  //   console.log(u230);
  //   console.log(u250);
  console.log(u300);
  //   console.log(u310);
  //   console.log(u330);
  //   console.log(u350);
  console.log(JSON.stringify(u500));
  //   console.log(u510);
  //   console.log(u530);
  //   console.log(u550);

  // group all the UXXX pay table data into seperate pay tables
  data.for;
});
