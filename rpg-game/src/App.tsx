import { useEffect, useState } from 'react';
import * as C from './App.styles';

import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter('Guilherme');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;
    }
  }

  return (
    <C.Container>
        <C.Mapa>
          <Character x={char.x} y={char.y} side={char.side} name={char.name}/>
        </C.Mapa>
    </C.Container>
  );
}

export default App;