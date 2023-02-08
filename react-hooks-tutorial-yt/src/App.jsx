import { useEffect, useState } from 'react';
import './App.css'

/**
 * useState   データが変更されたタイミングでレンダリングする
 * useEffect  発火のタイミングを決めることができる
 *            useEffect内で依存関係のあるものを使わない（無限ループ対策）
 * 
 * 
 */
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello, Hooks");
  }, [count]);

  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>
    </div>
  );
}

export default App
