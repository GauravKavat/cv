import { useState } from 'react';
import HeaderLeft from './components/HeaderLeft';
import Home from './components/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <>
      <div
        className={`min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${
          darkMode ? 'bg-[#202124]' : 'bg-[#EBEAE6]'
        }`}>
        <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
      </div>
    </>
  );
}

export default App;
