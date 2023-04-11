import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './navigations/mainNavigation';
import UserAppState from './navigations/userAppState';
import {store} from './redux/store';

const App: React.FC = () => {
  const [initialRouteName, setInitialRouteName] = React.useState<
    string | undefined
  >();
  return (
    <Provider store={store}>
      <UserAppState setInitialRouteName={setInitialRouteName}>
        {initialRouteName && (
          <MainNavigation initialRouteName={initialRouteName} />
        )}
      </UserAppState>
    </Provider>
  );
};

export default App;
