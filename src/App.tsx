import { Counter } from '@/components/Counter';
import { LoginForm } from './components/LoginForm';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter message="hello" />
          <LoginForm />
        </header>
      </div>
    );
  }
export default App;