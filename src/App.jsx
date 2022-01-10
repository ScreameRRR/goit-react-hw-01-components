import React from 'react';
import user from './Components/Profile/user.json'
import  Profile  from './Components/Profile/Profile'

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

        </div>
    );
}

export default App;