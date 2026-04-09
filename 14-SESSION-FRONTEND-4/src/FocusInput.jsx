import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref={inputRef} type="text"/>
            <button onClick={handleFocus} style={{ margin: "10px" }}>입력창으로 이동</button>
        </>
    );
}

export default FocusInput;