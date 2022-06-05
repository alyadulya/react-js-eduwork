import { useEffect, useState } from "react"

const Effect = () => {
    let [text, setText] = useState('');
    let [user, setUser] = useState({});
    let [second, setSecond] =useState(0);

    useEffect(() => {
        console.log('get API');
        // setDisplay(() => localStorage.getItem('text'));
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(res => setUser(res));
    }, []);

    useEffect(() => {
        localStorage.setItem('text', text);
        console.log('sync');
    }, [text]);

    useEffect(() =>  {
        let intervalId = setInterval(() => {
            setSecond(s => s + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <div>
            <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
            {/* <p>{display}</p> */}
            <p>{user.name}</p>
            <div>Waktu: {Math.floor(second / 60)} menit {second % 60} detik</div>
        </div>
    )
}

export default Effect;