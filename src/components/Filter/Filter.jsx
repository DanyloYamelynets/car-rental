import React from 'react';
import { useSelector } from 'react-redux';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { SelectCars, SelectFilter } from 'redux/selectors';
import { FormStyled } from './StyledFilter';

const Filter = ({ onFilterChange }) => {
  const cars = useSelector(SelectCars);
  const filteredCars = useSelector(SelectFilter);

  const handleOnSubmit = values => {
    const capitalizeString = str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const allCase = (array, key, value) => {
      return array.filter(
        item => item[key].toLowerCase() === value.toLowerCase()
      );
    };

    const capitalizedModel = capitalizeString(values.model);
    const carPrice = `$${values.rentalPrice}`;

    let filteredResults;

    if (capitalizedModel) {
      filteredResults = allCase(cars, 'make', capitalizedModel);
    } else {
      filteredResults = cars.filter(car => car.rentalPrice === carPrice);
    }

    console.log('filteredResults: ', filteredResults);
    if (!filteredResults.length > 0) {
      //   notifyCarSearchError();
      return;
    } else {
      onFilterChange(filteredResults);
      //   notifyCarSearch(filteredCars.length);
    }
  };

  const prices = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
    180, 190, 200,
  ];

  const validationSchema = Yup.object({
    model: Yup.string(),
    rentalPrice: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        model: '',
        rentalPrice: '',
        fromMileage: '',
        toMileage: '',
      }}
      onSubmit={values => {
        handleOnSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      <FormStyled>
        <label>
          Car brand
          <div>
            <Field type="text" name="model" placeholder="enter car brand" />
          </div>
        </label>
        <label htmlFor="rentalPrice">
          Price/1 hour
          <Field as="select" id="rentalPrice" name="rentalPrice">
            <option value="">Select a price ($)</option>
            {prices.map(price => (
              <option key={price}>{price}</option>
            ))}
          </Field>
        </label>
        <label>
          Car mileage / km
          <div>
            <Field type="number" name="fromMileage" placeholder="from" />
            <Field type="number" name="toMileage" placeholder="to" />
          </div>
        </label>
        <button type="submit">Search</button>
        {filteredCars.length > 0 && <button type="submit">Back</button>}
      </FormStyled>
    </Formik>
  );
};

export default Filter;
