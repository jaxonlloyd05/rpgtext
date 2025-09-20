import { create_floor, free_spaces, is_free, Tile } from "./world";

const DISPLAY_ROWS = 20;
const DISPLAY_COLS = 20;

export class Player {
    private board: Tile[][];
    private floor_n = 1;
    
    private x = 0;
    private y = 0;

    constructor() {
        this.board = create_floor(this.floor_n);
        this.spawn_player();
    }

    private spawn_player = () => {
        const free = free_spaces(this.board);
        const p_xy = free[Math.floor(Math.random() * free.length)];

        this.x = p_xy.x;
        this.y = p_xy.y;
        this.board[p_xy.y][p_xy.x] = Tile.Player;
    }

    public get_board = () => {
        return this.board;
    }

    public get_board_display = () => {
        const rows = this.board.length;
        const cols = rows ? this.board[0].length : 0;
        if (!rows || !cols) return [];

        const mx = Math.min(DISPLAY_COLS, cols);
        const my = Math.min(DISPLAY_ROWS, rows);

        let x0 = this.x - Math.floor(mx / 2);
        let y0 = this.y - Math.floor(my / 2);

        x0 = Math.max(0, Math.min(x0, cols - mx));
        y0 = Math.max(0, Math.min(y0, rows - my));

        const out: Tile[][] = [];
        for (let y = 0; y < my; y++) {
            out.push(this.board[y0 + y].slice(x0, x0 + mx));
        }
        return out;
    };

    public move = (dx: number, dy: number) => {
        if (!is_free(this.board, this.x + dx, this.y + dy)) {
            return false;
        }
        this.board[this.y][this.x] = Tile.Free;
        
        this.x += dx;
        this.y += dy;

        this.board[this.y][this.x] = Tile.Player;
    }
}