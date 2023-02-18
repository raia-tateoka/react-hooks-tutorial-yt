import { useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback } from 'react';
import './App.css'
import ShinCodeContext from './main';
import SomeChild from './SomeChild';
import useLocalStorage from './useLocalStorage';

/**
 * useState     データが変更されたタイミングでレンダリングする
 * useEffect    発火のタイミングを決めることができる
 *              useEffect内で依存関係のあるものを使わない（無限ループ対策）
 * useContext   コンポーネント間のデータの受け渡し
 * useRef       input等の参照したい値を取得することができる
 * useReducer   Reduxのような概念（難しいため今はこんなものなんだ程度で覚える）
 * useMemo      メモ化することができる（メモリに値を保存することができる）
 *              第二引数に変化を見るものを指定できる
 * useCallback  関数のメモ化
 * custumHooks  自分の使いたいようにカスタムしたHooks
 */

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello, Hooks");
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };

  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // useMemo
  // const square = () => {
  //   let i = 0;
  //   while (i < 2000000000) {
  //     i++;
  //   }
  //   console.log("クリックされました");
  //   return count02 * count02;
  // };

  const square = useMemo(() => {
    let i = 0;
    // 重い処理
    while (i < 2000000000) {
      i++;
    };
    console.log("クリックされました");
    return count02 * count02;
  }, [count02]);

  // useCallback
  const [counter, setCounter] = useState(0);

  // const showCount = () => {
  //   alert('これは重い処理です');
  // };
  const showCount = useCallback(() => {
    alert('これは重い処理です');
  },[counter]);

  // カスタムフック
  const [age, setAge] = useLocalStorage("age", 24);

  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>UseRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>－</button>

      <hr />
      <h1>useMemo</h1>
      <div>カウント1：{count01}</div>
      <div>カウント2：{count02}</div>
      <div>結果：{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>＋</button>
      <button onClick={() => setCount02(count02 + 1)}>＋</button>

      <hr />
      <h1>useCallback</h1>
      <SomeChild showCount={showCount} />

      <hr />
      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>年齢をセット</button>
    </div>
  );
}

export default App
