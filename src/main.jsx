import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SkillsProvider } from './context/SkillsContext.jsx'
import { HobbiesProvider } from './context/HobbiesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkillsProvider>
      <HobbiesProvider>
        <App />
      </HobbiesProvider>
    </SkillsProvider>
  </StrictMode>,
)
