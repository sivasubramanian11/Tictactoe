export function calculateWinner(squares) {
    const line = [
        [0, 1, 2],
        [1, 4, 7],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [2, 5, 7],
        [3, 6, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for (let i = 0; i < line.length; i++) {
        const [a, b, c] = line[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }

    }
    return null;

}