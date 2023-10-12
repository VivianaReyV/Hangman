// eslint-disable-next-line prefer-const
let words: string[] = ['GATO', 'PERRO', 'COCHE', 'CASA', 'PELOTA', 'MANZANA', 'MONTAÑA', 'SOL', 'LUNA', 'MARIPOSA'];

export function getRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length);

    return words[randomIndex];
}