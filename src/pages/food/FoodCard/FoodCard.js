import React, { useState } from 'react';
import { Popover, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import FoodRepresentation from '../FoodRepresentation/FoodRepresentation';

const useStyles = makeStyles({
    popOverWindow: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
        popover: {
            pointerEvents: "none"
        },
        paper: {
            padding: 10
        }
    },

    typography: {
        fontSize: 18,
        padding: 12
    }
});

const FoodCard = ({ foodAttributes, data }) => {
    const [anchor, setAnchor] = useState(null);
    const classes = useStyles();

    const { word, color } = foodAttributes;
    const open = Boolean(anchor);

    const handleClose = () => setAnchor(null);
    const handleClick = (event) => { anchor === null ? setAnchor(event.currentTarget) : setAnchor(null) }

    return (
        <div style={{ width: 70 }} 
            onClick = { handleClick }
        >
            <FoodRepresentation 
                word={word} 
                color={color}  
                onClick = { handleClick }
            />
            <Popover
                classes={{
                paper: classes.paper
                }}
                open={ open }
                anchorEl={ anchor }
                className={classes.popOverWindow}
                onClose={handleClose}
                onMouseLeave={ handleClose }
                disableRestoreFocus
            >
                { Object.keys(data).map((key, idx) => 
                    <Typography key={ idx } className={ classes.typography }>
                        {`${key} : ${data[key]}`}
                    </Typography>
                )}
            </Popover>
        </div>
    );
}

export default FoodCard;