import React, {useState} from 'react';
import NavigationBar from './component/navigation-bar';
import Contact from './page/contact';
import Home from './page/home';
import Resume from './page/resume';
import Settings from './page/settings';
import UnderConstruction from './page/under-construction';

export enum Page {
  Home = 'home',
  Resume = 'resume',
  Contact = 'contact',
  Settings = 'settings',
}

const App: React.FC = () => {
  const underConstruction = true;

  const [page, setPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (page) {
      case Page.Home:
        return <Home />;
      case Page.Resume:
        return <Resume />;
      case Page.Contact:
        return <Contact />;
      case Page.Settings:
        return <Settings />;

      default:
        throw new Error(`Couldn't render page ${page}`);
    }
  };

  return (
    <>
      {underConstruction ? (
        <UnderConstruction />
      ) : (
        <>
          <NavigationBar setPage={setPage} />
          {renderPage()}
        </>
      )}
    </>
  );
};

export default App;
