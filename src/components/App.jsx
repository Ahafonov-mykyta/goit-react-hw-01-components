import user from "../dataObjects/user"
import Profile from "../components//Profile/Profile"
import data from "../dataObjects/data"
import Statistics from "../components//Statistics/Statistics"
import FriendList from "../components//FriendList/FriendList"
import friends from "../dataObjects/friends"
import Transactions from "./Transactions/Transactions"
import transactions from "../dataObjects/transactions"


export const App = () => {
  return (
   <div>
    <Profile 
    userName={user.username}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}
    /> 
    
  <Statistics  title="Upload stats" stats={data} />

  <FriendList friends={friends} />
  <Transactions items={transactions} />
  </div>
  );
};
