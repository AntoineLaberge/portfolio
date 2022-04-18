import React, {useState} from 'react';
import NavigationBar from './component/navigation-bar';
import SelectLanguage from './component/select-language';
import Contact from './page/contact';
import Home from './page/home';
import Resume from './page/resume';

export enum Page {
  Home = 'home',
  Resume = 'resume',
  Contact = 'contact',
}

const App: React.FC = () => {
  const [page, setPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (page) {
      case Page.Home:
        return <Home />;
      case Page.Resume:
        return <Resume />;
      case Page.Contact:
        return <Contact />;

      default:
        throw new Error(`Couldn't render page ${page}`);
    }
  };

  return (
    <>
      <NavigationBar setPage={setPage} />
      {renderPage()}
      <SelectLanguage />
    </>
  );
};

export default App;
