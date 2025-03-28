import DnD from './Builder/dnd';
import './App.css';
import TemplateBuilder from './Builder/TemplateBuilder';
import { BuilderProvider } from './context/BuilderContext';

function App() {
  return (
    <div>
      {/* Reminder: Use Slate JS */}
      <BuilderProvider>
        <TemplateBuilder />
      </BuilderProvider> 
      {/* <DnD /> */}
    </div>
  );
}

export default App;
