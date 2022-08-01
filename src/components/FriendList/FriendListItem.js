import s from '../FriendList/FriendList.module.css'
import propTypes from "prop-types";


export default function FriendListItem ({friend}) {
   
  const {avatar, name, isOnline} = friend
 
   return <li  className={s.item}>
   <span className={isOnline ? (s.statusOnline) : (s.statusOfline)}> &nbsp;&nbsp;&nbsp;&nbsp;  </span>
   <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
   <p className={s.name}>{name}</p>
 </li>
   
}

FriendListItem.propTypes = {
  friend: propTypes.shape({
  name:propTypes.string,
  avatar:propTypes.string,
  id: propTypes.number,
  isOnline: propTypes.bool})
}