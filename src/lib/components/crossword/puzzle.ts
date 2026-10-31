export interface Clue {
    number: number;
    text: string;
    answer: string;
}

export interface Puzzle {
    grid: string[];
    numbers: CellNumber[];
    across: Clue[];
    down: Clue[];
}

export interface CrosswordCell {
    row: number;
    col: number;
    letter: string | null;
    number: number | null;
    label: string;
}

export interface CellNumber {
    row: number;
    col: number;
    number: number;
}

export const puzzle: Puzzle = {
    grid: ['SCORE', 'M#T#A', 'ACTOR', 'R#E#T', 'TORCH'],
    numbers: [
        { row: 0, col: 0, number: 1 },
        { row: 0, col: 2, number: 2 },
        { row: 0, col: 4, number: 3 },
        { row: 2, col: 0, number: 4 },
        { row: 4, col: 0, number: 5 }
    ],
    across: [
        { number: 1, text: 'What a high one gets you on the leaderboard', answer: 'SCORE' },
        { number: 4, text: 'Someone who plays a role on stage', answer: 'ACTOR' },
        { number: 5, text: "It's passed in a relay but never dropped, ideally", answer: 'TORCH' }
    ],
    down: [
        { number: 1, text: 'Like some phones and some alecks', answer: 'SMART' },
        { number: 2, text: 'A playful river mammal that floats on its back', answer: 'OTTER' },
        { number: 3, text: 'The third planet from the Sun', answer: 'EARTH' }
    ]
};

export function buildCells(puzzle: Puzzle): CrosswordCell[] {
    const cells: CrosswordCell[] = [];

    for (let r = 0; r < puzzle.grid.length; r++) {
        for (let c = 0; c < puzzle.grid[r].length; c++) {
            if (isBlock(puzzle, r, c)) {
                cells.push({row: r, col: c, letter: null, number: null, label: 'Black square'});
            } else {
                cells.push({
                    row: r,
                    col: c,
                    letter: puzzle.grid[r]?.[c] ?? null,
                    number: numberAt(puzzle, r, c),
                    label: labelFor(puzzle, r, c)
                });
            }
        }
    }

    return cells;
}

function isBlock(puzzle: Puzzle, row: number, col: number): boolean {
    const char = puzzle.grid[row]?.[col];
    return char === '#' || char === undefined;
}

function numberAt(puzzle: Puzzle, row: number, col: number): number | null {
    const cellNumber = puzzle.numbers.find(n => n.row === row && n.col === col);
    return cellNumber ? cellNumber.number : null;
}

function labelFor(puzzle: Puzzle, row: number, col: number): string {
    const parts = [`Row ${row + 1}, Column ${col + 1}`];

    let startCol = col;
    while (!isBlock(puzzle, row, startCol - 1)) {
        startCol--;
    }

    const acrossNumber = numberAt(puzzle, row, startCol);
    if (puzzle.across.some(clue => clue.number === acrossNumber)) {
        parts.push(`${acrossNumber} Across`);
    }

    let startRow = row;
    while (!isBlock(puzzle, startRow - 1, col)) {
        startRow--;
    }
    const downNumber = numberAt(puzzle, startRow, col);
    if (puzzle.down.some(clue => clue.number === downNumber)) {
        parts.push(`${downNumber} Down`);
    }

    return parts.join(', ');
}