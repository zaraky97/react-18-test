import React from 'react';
import './App.css';
import { Loading } from './components/Loading';
import { fetchProfileData } from './utils/fakeApi';

const resource = fetchProfileData();

function Profile() {
  return (
    <React.Suspense fallback={<Loading />}>
      <User />
    </React.Suspense>
  );
}

function User() {
  const user = resource.read();
  return <div>{user?.name}</div>;
}

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
