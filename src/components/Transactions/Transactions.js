import propTypes from "prop-types";
import s from '../Transactions/Transactions.module.css'

export default function Transactions ({items}) {

    return <table className={s.transactions}>
    <thead>

      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>

    {items.map ( item => {

    const {type, amount, currency, id} = item;
         return <tr key={id}>
         <td>{type}</td>
         <td>{amount}</td>
         <td>{currency}</td>
       </tr>
        
    })}
       
    </tbody>
  </table>
}


Transactions.propTypes = {
 items:propTypes.arrayOf (propTypes.shape({
    type: propTypes.string,
    amount: propTypes.string,
    currency: propTypes.string,
    id: propTypes.string
 })) 



}
