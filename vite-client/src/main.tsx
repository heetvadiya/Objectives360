import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ObjectivesProvider from "../context/ObjectivesProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ObjectivesProvider>
      <App/>
    </ObjectivesProvider>
  </StrictMode>,
)
