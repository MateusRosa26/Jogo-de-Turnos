import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from '@/context/GameContext';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import BattlePage from '@/pages/BattlePage';
import CharacterSelectPage from '@/pages/CharacterSelectPage';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

function AppContent() {
  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<CharacterSelectPage />} />
        <Route path="/battle" element={<BattlePage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GameProvider>
          <AppContent />
        </GameProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}