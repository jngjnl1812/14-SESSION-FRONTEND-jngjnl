import { useState, useEffect, useRef } from 'react';

// 1. Component 실습: 별도의 부품(컴포넌트) 만들기
function WelcomeMessage({ name }) {
  return <h2>안녕하세요, {name}님! (JSX 실습)</h2>;
}

function App() {
  // 2. useState 실습: 변하는 데이터(상태) 관리
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 3. useRef 실습: 특정 태그(DOM)에 직접 접근하기
  const inputRef = useRef(null);

  // 4. useEffect 실습: 화면이 나타날 때나 값이 바뀔 때 실행
  useEffect(() => {
    console.log("화면에 컴포넌트가 나타났습니다!");
    // 처음 시작하자마자 입력창에 커서 두기
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log(`카운트가 변했습니다: ${count}`);
  }, [count]);

  // 5. React Event 실습: 클릭하거나 입력할 때 반응하기
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      {/* 컴포넌트 사용 및 Props 전달 */}
      <WelcomeMessage name="사용자" />

      <hr />

      <h3>1. useState & Event 테스트</h3>
      <p>현재 숫자: {count}</p>
      <button onClick={handleButtonClick}>숫자 올리기</button>

      <hr />

      <h3>2. useRef & useEffect 테스트</h3>
      <p>입력한 내용: {text}</p>
      <input 
        ref={inputRef} 
        type="text" 
        value={text} 
        onChange={handleInputChange} 
        placeholder="여기에 입력하세요"
      />
      <button onClick={() => inputRef.current.focus()}>입력창으로 커서 이동</button>
    </div>
  );
}

export default App;