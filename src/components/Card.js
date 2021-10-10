import { createUseStyles } from 'react-jss'
import styles from '../../styles/Card.module.css'

const useStyles = createUseStyles({
  myCard: (props) => ({
    background: props.shade,
    border: '1px solid ' + props.light,
  }),
  myLight: (props) => ({
    background: props.light,
    boxShadow: '0px 0px 10px ' + props.light
  }),
  myTraffic: (props) => ({
    border: '1px solid ' + props.font
  }),
  myLabel: (props) => ({
    color: props.font
  })
});

export default function Card({ colors }) {
  const classes = useStyles(colors);

  return (
    <div className={`${styles.card} ${classes.myCard}`}>
      <div className={`${styles.trafficLight} ${classes.myTraffic}`}>
        <div className={`${styles.lightRed} ${colors.id == 'red' ? classes.myLight : null}`}></div>
        <div className={`${styles.lightYellow} ${colors.id == 'yellow' ? classes.myLight : null}`}></div>
        <div className={`${styles.lightGreen} ${colors.id == 'green' ? classes.myLight : null}`}></div>
      </div>
      <div className={`${styles.label} ${classes.myLabel}`}>
        The light is {colors.id}.
      </div>
    </div>
  )
}

