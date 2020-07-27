import React, {useState, useEffect} from 'react';

import Page from './misc/page';
import UserList from './userList';

const UserListApi = 'https://gist.githubusercontent.com/MarcelRusu/0281c9b646c4dd4b69b14e597c896d97/raw/3d4514e1f119160ff2605520c116ccce02ae0cb4/test-users.json';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(UserListApi).then(res => res.json()).then(setUsers);
  }, []);
  return (
    <Page>
      <UserList users={users}/>
    </Page>
  );
}

export default App;
