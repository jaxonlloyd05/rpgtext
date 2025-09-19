/** gane configs */
const GAME_MAX_LEVEL = 70;
const BOARD_ROWS = 20;
const BOARD_COLS = 50;

const DRUNKARD_COVERAGE = 0.42;



export enum Tile {
    Wall = "#",
    Free = "",
    Player = "p"
}

export const free_spaces = (board: Tile[][]) => board.flatMap((row, y) =>
    row.flatMap((tile, x) => 
        tile === Tile.Free ? [{ x, y }] : []
    )
)

const spawn_tiles = (board: Tile[][]) => {
    // player 
    const free = free_spaces(board);
    const p_xy = free[Math.floor(Math.random() * free.length)];

    board[p_xy.y][p_xy.x] = Tile.Player;
}

const random_step = () => {
    const moves = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    return moves[Math.floor(Math.random() * moves.length)];
}

const drunkard_generate = () => {
    const wall_map = Array.from({ length: BOARD_ROWS }, () => new Array(BOARD_COLS).fill(Tile.Wall));
    // starting the drunkard walk in the middle for now, for more randomness make it random but close to middle-ish
    const pos = {x: Math.round(BOARD_COLS/2), y: Math.round(BOARD_ROWS/2)};

    while (wall_map.flatMap(r => r).filter(v => v ===  Tile.Free).length < (BOARD_COLS * BOARD_ROWS) * DRUNKARD_COVERAGE) {
        let [ dx, dy ] = random_step();
        let d_pos = { 
            x: Math.max(0, Math.min(pos.x + dx, BOARD_COLS-1)), 
            y: Math.max(0, Math.min(pos.y + dy, BOARD_ROWS-1))
        };

        if (wall_map[d_pos.y][d_pos.x] === Tile.Wall) {
            wall_map[d_pos.y][d_pos.x] = Tile.Free
        }

        pos.x = d_pos.x;
        pos.y = d_pos.y;
    }

    return wall_map;
}

export const create_floor = (floor_number: number) => {
    const blank_map = drunkard_generate();
    
    spawn_tiles(blank_map);
    return blank_map;
}
