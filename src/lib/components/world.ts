/** gane configs */
const GAME_MAX_LEVEL = 70;
const BOARD_ROWS = 20;
const BOARD_COLS = 50;

const DRUNKARD_COVERAGE = 0.42;



const Tile = {
    Wall: { display: "#" },
    Free: { display: "" }
}

const spawn_tiles = (floor_number: number) => {

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
    const pos = {x: Math.round(BOARD_ROWS/2), y: Math.round(BOARD_COLS/2)};

    while (wall_map.flatMap(r => r).filter(v => v ===  Tile.Free).length < (BOARD_COLS * BOARD_ROWS) * DRUNKARD_COVERAGE) {
        let [ dx, dy ] = random_step();
        let d_pos = { 
            x: Math.max(0, Math.min(pos.x + dx, BOARD_ROWS-1)), 
            y: Math.max(0, Math.min(pos.y + dy, BOARD_COLS-1))
        };

        if (wall_map[d_pos.x][d_pos.y] === Tile.Wall) {
            wall_map[d_pos.x][d_pos.y] = Tile.Free
        }

        pos.x = d_pos.x;
        pos.y = d_pos.y;
    }

    return wall_map;
}

export const create_floor = (floor_number: number) => {
    const blank_map = drunkard_generate();
    
    return blank_map;
}
