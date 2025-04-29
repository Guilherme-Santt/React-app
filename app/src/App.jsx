import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Guilherme Santos" 
        content="Hello community!"
      />
      <Post 
        author="Mayra Barboza" 
        content="Um novo Post muito legal!"
      />
    </div>
  )
}