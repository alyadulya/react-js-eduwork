import { useState } from "react";
import { useToggle } from "./pembahasan/hook/useToggle";
// import Identity from "./pembahasan/Identity";

const Hooks = () => {
    let [label, setLabel] = useState('ON');
    let [lampu, setLampu] = useToggle();

    const style = {
        background: lampu ? '#ffaa2a' : 'black',
        textAlign: 'center',
        height: '657px'
    }

    const saklar = () => {
        setLampu(!lampu);
        setLabel(e => {
            if (e === 'ON') {
                return 'OFF';
            }
            return 'ON';
        })
    }

    return (
        <div style={style}>
            <button onClick={saklar}> {label} </button>
        </div>
    )
}

export default Hooks;