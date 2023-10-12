import './App.css'
import { useEffect, useState } from 'react'
import { HangImage } from './components/HangImage'
import { letters } from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWord';
import Button from './components/CustomButtonComponent.tsx';

function App() { 

  const [word, setWord] = useState( getRandomWord );
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);
  const [usedLetters, setUsedLetters] = useState(' ');

  // Determinar si la persona perdió
  useEffect( () => {
    if (attempts >= 9) {
      setLose(true)
    }
  }, [attempts] ) //hooks

  // Determinar si la persona ganó
  useEffect( () => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord == word) {
      setWon(true)
    }
  }, [hiddenWord] )
  
  const checkLetter = ( letter: string ) => {

    if (lose) return;
    if (won) return;

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts+1,9));   
      if (!usedLetters.includes(letter)) {
        setUsedLetters((usedLetters+' '+letter));
      }
      return;
    } 

    const hiddenWordArray = hiddenWord.split(' ');

    for (let i=0; i< word.length; i++) {
      if (word[i] == letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '));
  }

  const newGame = () => {

    const newWord = getRandomWord();

    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttempts(0);
    setLose(false)
    setWon(false);
    setUsedLetters(' ');

  }
  
  return(
    <div className='App'>

      {/* nuevo juego */}
      <Button 
        height = "40px"
        onClick={() => newGame()}
        width = "40px"
        background = 'url("https://i.pinimg.com/564x/8f/e1/05/8fe105d81b637623d9acaaf38b200082.jpg")'
      />
      
      {/* Imágenes */}
      <HangImage imageNumber={attempts} />

      {/* Palabra oculta */}
      <h3> {hiddenWord} </h3>

      {/* Contador de intentos */}
      <h3>Intentos: {attempts}</h3>

      { /* Mensaje si perdió */}
      { (lose) 
        ? <h2>Perdiste, la palabra era {word}</h2>
        : ''
      }

      { /* Mensaje si ganó */}
      { (won) 
        ? <h2>Felicidades, ganaste!!</h2>
        : ''
      }

      {/* Botones */}
      {
        letters.map( (letter) => (
          <button key={letter} onClick={() => checkLetter(letter)}>{letter}</button>
        ))
      }

      {/* Letras usadas */}
      {
        <h3>Letras usadas: {usedLetters}</h3>
      }

    </div>
  )

}

export default App
