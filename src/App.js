import DnD from './Builder/dnd';
import './App.css';
import TemplateBuilder from './Builder/TemplateBuilder';

function App() {
  return (
    <div>
      {/* Reminder: Use Slate JS */}
      <TemplateBuilder />

      <DnD />
    </div>
  );
}

export default App;
