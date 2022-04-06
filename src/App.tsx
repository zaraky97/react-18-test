import * as React from 'react';
import './App.css';
import { Loading } from './components/Loading';
import { fetchProfileData } from './utils/fakeApi';

function App() {
  const resource = fetchProfileData();

  function Profile() {
    return (
      <React.Suspense fallback={<Loading />}>
        <User />
        <Text />
      </React.Suspense>
    );
  }

  function User() {
    const user = resource.user.read();
    return <div>{user?.name}</div>;
  }

  function Text() {
    const text = resource.text.read();
    return <div>test</div>;
  }
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
