import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
          <Route path="/" render={() => <Redirect to="/news" />} />
          <Route path="/news" component={() => <News />} />
          <Route path="/trending" component={() => <Trending />}  />
          <Route path="/submit" component={() => <Submit />}  />
          <Route path="/search" component={() => <Search />}  />
          <Route path="/profile" component={() => <Profile />}  />
          <Route component={() => <Redirect to="/news" />}  />
      </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
