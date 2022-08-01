import s from '../Statistics/Statistics.module.css'
import PropTypes from 'prop-types';

export default function Statistics ({key, title, stats}){
    return  <section className={s.container}>
        {title && <h2 className={s.text}>{title}</h2>}
    
  
        <ul className={s.stats}>
  {stats.map ((stat) =>{
    const {id, label, percentage} = stat;
    return <li key={id} className="item">
    <span className={s.label}>{label}</span>
    <span className={s.quantity}>{percentage}%</span>
  </li>} )}


    </ul>
  </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats:PropTypes.arrayOf(PropTypes.shape({
      label:PropTypes.string,
      percentage: PropTypes.number
    }))
    
    
  };
