function CarItem({
  carInfo: {
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  },
  onOpenModal,
}) {
  return (
    <li>
      <img src={img} alt={make} width={300} loading="lazy" />
      <h3>
        {make} <span>{model}</span>, {year}
      </h3>
      <p>{rentalPrice}</p>
      <p>
        {address} | {rentalCompany} | {type} | {model} | {id} |{' '}
        {functionalities[0]}
      </p>
      <button
        id={id}
        onClick={() => {
          onOpenModal({
            make,
            model,
            year,
            img,
            rentalPrice,
            address,
            rentalCompany,
            type,
            id,
            functionalities,
            fuelConsumption,
            engineSize,
            description,
            accessories,
            rentalConditions,
            mileage,
          });
        }}
      >
        Learn more
      </button>
    </li>
  );
}

export default CarItem;
