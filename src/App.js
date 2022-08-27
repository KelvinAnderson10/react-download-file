import logo from './logo.svg';
import './App.css';
import guidelines from './guidelines.xlsx'
import template from './template.xlsx'

function App() {
  return (
    <div className="App">
      <button>
      <a href={guidelines} download="Upload Guidelines.xlsx">Download Guidelines</a>
      </button>
      <button>
      <a href={template} download="Template.xlsx">Download Template</a>
      </button>
    </div>
  );
}

export default App;
