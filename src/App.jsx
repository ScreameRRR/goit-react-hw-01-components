import user from './Components/Profile/user.json'
import data from './Components/Statistics/data.json'
import friends from './Components/FriendsList/friends.json'
import transactions  from './Components/Transactions/transactions.json'

import Profile  from './Components/Profile/Profile'
import { Statistics } from './Components/Statistics/Statistics'
import FriendsList  from './Components/FriendsList/FriendList'
import TransactionHistory from './Components/Transactions/TransactionHistory'

const App = () => {
    return (
        <div>
        <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        
        />

        <Statistics title="Upload stats" stats={data} />
        <FriendsList friends={friends} />;
        <TransactionHistory items={transactions} />;
        </div>
    );
}

export default App;