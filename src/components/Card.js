import styles from '../../styles/Card.module.css'
// import { createUseStyles } from 'react-jss'

// const useStyles = createUseStyles({
//   myCard: (props) => ({
//     background: props.shade,
//     border: '1px solid ' + props.light,
//   }),
//   myLight: (props) => ({
//     background: props.light,
//     boxShadow: '0px 0px 10px ' + props.light,
//   }),
//   myTraffic: (props) => ({
//     border: '1px solid ' + props.font,
//   }),
//   myLabel: (props) => ({
//     color: props.font,
//   })
// });



export default function Card({ colors }) {
  // const classes = useStyles(colors);
  let classes = {};

  if (colors === 0) {
    classes = {
      myCard: styles.cardRed,
      myTraffic: styles.trafficRed,
      myLight: styles.lightRedOn,
      myLabel: styles.labelRed,
      labelText: 'red',
    }
  } else if (colors === 1) {
    classes = {
      myCard: styles.cardYellow,
      myTraffic: styles.trafficYellow,
      myLight: styles.lightYellowOn,
      myLabel: styles.labelYellow,
      labelText: 'yellow',
    }
  } else if (colors === 2) {
    classes = {
      myCard: styles.cardGreen,
      myTraffic: styles.trafficGreen,
      myLight: styles.lightGreenOn,
      myLabel: styles.labelGreen,
      labelText: 'green',
    }
  }

  return (
    <div className={`${styles.card} ${classes.myCard}`}>
      <div className={`${styles.trafficLight} ${classes.myTraffic}`}>
        <div className={`${styles.lightRed} ${colors === 0 ? classes.myLight : null}`}></div>
        <div className={`${styles.lightYellow} ${colors === 1 ? classes.myLight : null}`}></div>
        <div className={`${styles.lightGreen} ${colors === 2 ? classes.myLight : null}`}></div>
      </div>
      <div className={`${styles.label} ${classes.myLabel}`}>
        The light is {classes.labelText}.
      </div>
    </div>
  )
}

