import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

export default function CarList() {
  const dispatch = useDispatch();

  const { carsList, name } = useSelector(
    ({ form, cars: { data, searchTerm } }) => {
      const filteredCars = data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        carsList: filteredCars,
        name: form.name,
      };
    }
  );

  const handleCarDelete = (id) => {
    dispatch(removeCar(id));
  };

  const renderCars = carsList.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div className={`panel ${bold && "bold"}`} key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car.id)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderCars}
      <hr />
    </div>
  );
}
