import './player.css';
import React, { useEffect, useState } from 'react';


const Player = ({setCell1,setCell2,setCell3,
    setCell4,setCell5,setCell6,setCell7,
    setCell8,setCell9,text,setActive,setText}) => {
    const [playerX, setPlayerX] = useState(0);
    const [playerO, setPlayerO] = useState(0);
    const [note, setNote] = useState('');

    function again (setCell1,setCell2,setCell3,setCell4,
        setCell5,setCell6,setCell7,setCell8,setCell9,
        setActive) {
        setCell1('');setCell2('');setCell3('');
        setCell4('');setCell5('');setCell6('');
        setCell7('');setCell8('');setCell9('');
        setActive('');setNote('');setText('');
    }
    
    useEffect (() => {
        if(text === 'draw') {
            setNote('Ничья!');
        }
        if(text === 'X') {
            setNote('Победил игрок Х');
            setPlayerX(playerX + 1);
        }
        if(text === 'O') {
            setNote('Победил игрок O');
            setPlayerO(playerO + 1);
        }
    }, [text, setNote, setPlayerX, setPlayerO]);

    console.log(note);
    console.log(text);

    return (
        <div className='header'>
        <p>Игрок X - {playerX}</p>
        <p>Игрок O - {playerO}</p >
        <p>{note}</p>
        <button onClick={() => again(setCell1,setCell2,setCell3,setCell4,
            setCell5,setCell6,setCell7,setCell8,setCell9,setActive)}>Заново</button>
    </div>
    )
}

export default Player;