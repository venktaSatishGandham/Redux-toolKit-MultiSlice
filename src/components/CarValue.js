import React from "react";
import { useSelector } from "react-redux";

export default function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredCars.reduce((acc, car) => acc + car.cost, 0);
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

// let cost = 0;
// for (let car of filteredCars) {
//   cost += car.cost;
// }
// return cost;
