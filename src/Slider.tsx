import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const valuetext = (value: number) => {
  return `${value}s`;
}

const DiscreteSlider = () => {
  const classes = useStyles();
  const [sliderValue, setSliderValue] = React.useState(20);

  const handleSliderChange = (event: Object, value: number | number[]) => {
   setSliderValue(value as number);
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Time per revolution
      </Typography>
      <Slider
        value={sliderValue}
        onChange={(e, v) => handleSliderChange(e,v)}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        valueLabelFormat={valuetext}
        step={1}
        marks
        min={1}
        max={40}
      />
    </div>
  );
}

export default DiscreteSlider;