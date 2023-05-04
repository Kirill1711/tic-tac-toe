import Player from '../player_field/Player';
import './feald.css';
import React, { useEffect, useState } from 'react';

const Feald  = () => {
    const [cell1, setCell1] = useState('');
    const [cell2, setCell2] = useState('');
    const [cell3, setCell3] = useState('');
    const [cell4, setCell4] = useState('');
    const [cell5, setCell5] = useState('');
    const [cell6, setCell6] = useState('');
    const [cell7, setCell7] = useState('');
    const [cell8, setCell8] = useState('');
    const [cell9, setCell9] = useState('');

    const [counter, setCounter] = useState(0);
    const [active, setActive] = useState(false);
    const [text, setText] = useState('');

    useEffect (() => {
        if((cell1 === 'X' & cell2 === 'X' & cell3 === 'X') |
        (cell4 === 'X' & cell5 === 'X' & cell6 === 'X') | 
        (cell7 === 'X' & cell8 === 'X' & cell9 === 'X') |
        (cell1 === 'X' & cell5 === 'X' & cell9 === 'X') |
        (cell1 === 'X' & cell4 === 'X' & cell7 === 'X') |  
        (cell3 === 'X' & cell5 === 'X' & cell7 === 'X') | 
        (cell2 === 'X' & cell5 === 'X' & cell8 === 'X') | 
        (cell3 === 'X' & cell6 === 'X' & cell9 === 'X')){
            setText('X');
            setActive(!active);
            setCounter(0);
        }
        if ((cell1 === 'O' & cell2 === 'O' & cell3 === 'O') |
        (cell4 === 'O' & cell5 === 'O' & cell6 === 'O') | 
        (cell7 === 'O' & cell8 === 'O' & cell9 === 'O') |
        (cell1 === 'O' & cell5 === 'O' & cell9 === 'O') | 
        (cell3 === 'O' & cell5 === 'O' & cell7 === 'O') |
        (cell1 === 'O' & cell4 === 'O' & cell7 === 'O') | 
        (cell2 === 'O' & cell5 === 'O' & cell8 === 'O') | 
        (cell3 === 'O' & cell6 === 'O' & cell9 === 'O')) {
            setText('O');
            setActive(!active);
            setCounter(0);
        }
        if (cell1 !== '' & cell2 !== '' & cell3 !== '' &
        cell4 !== '' & cell5 !== '' & cell6 !== '' &
        cell7 !== '' & cell8 !== '' & cell9 !== '' ) {
            setText('draw');
            setActive(!active);
            setCounter(0);
        }
    }, [cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9, setText, setActive,setCounter]);

    function game (setcell, counter, cell) {
        if(cell === '') {
        if(counter === 0 | counter % 2 === 0) {
            setcell('X');
            setCounter(counter + 1);
        } else {
            setcell('O');
            setCounter(counter + 1);
        }
    }
}

 
    return (<> <Player setCell1={setCell1}
    setCell2={setCell2} setCell3={setCell3} setCell4={setCell4} setCell5={setCell5}
    setCell6={setCell6} setCell7={setCell7} setCell8={setCell8} setCell9={setCell9} 
    text={text} setActive={setActive} setText={setText}/>
    <table className={active ? 'active' : ''}>
        <thead></thead>
        <tbody>
            <tr key='top'>
                <td key='top1' onClick={() => game(setCell1, counter, cell1)}>{cell1}</td>
                <td key='top2' onClick={() => game(setCell2, counter, cell2)}>{cell2}</td>
                <td key='top3' onClick={() => game(setCell3, counter, cell3)}>{cell3}</td></tr>
            <tr key='mid'>
                <td key='mid1' onClick={() => game(setCell4, counter, cell4)}>{cell4}</td>
                <td key='mid2' onClick={() => game(setCell5, counter, cell5)}>{cell5}</td>
                <td key='mid3' onClick={() => game(setCell6, counter, cell6)}>{cell6}</td></tr>
            <tr key='bot'>
                <td key='bot1' onClick={() => game(setCell7, counter, cell7)}>{cell7}</td>
                <td key='bot2' onClick={() => game(setCell8, counter, cell8)}>{cell8}</td>
                <td key='bot3' onClick={() => game(setCell9, counter, cell9)}>{cell9}</td></tr>
        </tbody>
    </table> </>);
}


export default Feald;