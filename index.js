const fs = require("fs");
const express = require("express");
const path = require("path");
const { log } = require("console");

const app = express();

const data = [
  {
    id: "1",
    numberOfSeats: 100,
    amenities: ["Ac", "chairs", "discolights"],
    price: 5000,
    ifBooked: "true",
    customerName: "Sakthivel",
    date: "30-oct-2023",
    startTime: "30-oct-2023 at 12PM",
    endTime: "31-oct-2023 at 11am",
    RoomId: 201,
    RoomName: "Duplex",
  },
  {
    id: "2",
    numberOfSeats: 100,
    amenities: ["Ac", "chairs", "discolights"],
    price: 5000,
    ifBooked: "false",
    customerName: "vijay",
    date: "01-nov-2023",
    startTime: "01-nov-2023 at 10pm",
    endTime: "02-nov-2023 at 10am",
    RoomId: 202,
    RoomName: "Duplex",
  },
  {
    id: "3",
    numberOfSeats: 80,
    amenities: ["Ac", "chairs", "discolights"],
    price: 4000,
    ifBooked: "true",
    customerName: "mathavan",
    date: "15-march-2022",
    startTime: "15-march-2022 at 1pm",
    endTime: "16-march-2022 at 12am",
    RoomId: 202,
    RoomName: "Duplex",
  },
  {
    id: "4",
    numberOfSeats: 70,
    amenities: ["Ac", "chairs", "discolights"],
    price: 3500,
    ifBooked: "false",
    customerName: "kumar",
    date: "20-june-2021",
    startTime: "20-june-2021 at 4pm",
    endTime: "21-june-2023 at 3am",
    RoomId: 202,
    RoomName: "Duplex",
  },
];

// get hall details
// req query used

app.get("/hall/details", (req, res) => {
  if (req.query) {
    const { ifBooked } = req.query;
    console.log(ifBooked);
    let filterdHall = data;
    if (ifBooked) {
      filterdHall = filterdHall.filter((halls) => halls.ifBooked === ifBooked);
    }
    res.send(filterdHall);
  } else {
    res.send(data);
  }
});

// req params used

app.get("/hall/details/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const specificHall = data.find((hall) => hall.id === id);
  res.send(specificHall);
});

// server listening
app.listen(7000, () => console.log("server start: 7000 port"));
