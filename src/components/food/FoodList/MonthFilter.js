import React, { useState } from 'react';

import { Grid, Typography } from '@material-ui/core';

import colorList from './color_list.json';
import './MonthFilter.css';

import FoodCard from "../FoodCard/FoodCard";
import FruitsAndVegetables from '../FruitsAndVegetables/FruitsAndVegetables';
import Filter from './Filter';

const MonthFilter = () => {
    const [foodList, setFoodList] = useState([]);
    const [stateOnglet, setStateOnglet] = useState();

    const vegetables = [];
    const fruits = [];

    const sortFood = () => {
        foodList.map(({ nom, type, vie }, idx) => {
            const element = (
                <Grid item className='food' key={ idx } >
                    <FoodCard foodAttributes={{ word: nom, color: colorList[nom] }} data= {{ 'vie': `${vie} jours` }}/>
                </Grid>
            );
            type === 'fruit' ? fruits.push(element): vegetables.push(element);
        })
    };
    sortFood();

    return (
        <>
            <Typography variant="h3" gutterBottom className="label">
                Liste des fruits et légumes
            </Typography>
            <Filter stateOnglet = { stateOnglet }setStateOnglet={ setStateOnglet } setFoodList={ setFoodList }/>
            <FruitsAndVegetables fruits={ fruits } vegetables={ vegetables }/>
        </>
    );}

    export default MonthFilter;