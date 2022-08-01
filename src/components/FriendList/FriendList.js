import FriendListItem from "./FriendListItem"
import s from '../FriendList/FriendList.module.css'


export default function FriendList({friends}) {
    return <ul className={s.friendsList}>
    { friends.map (friend => <FriendListItem key={friend.id} friend = {friend} />)}
  
</ul>
}