<script lang="ts">
    import "./app.css";
    import { Player } from "$lib/components/player";
    import { Tile } from "$lib/components/world";

    const player = new Player();
    let board: Tile[][];

    const get_board = () => {
        board = player.get_board_display();
    }

    const DIR = {
        UP: [0, -1] as const,
        DOWN: [0, 1] as const,
        LEFT: [-1, 0] as const,
        RIGHT: [1, 0] as const
    };

    const move_player = ([dx, dy]: readonly [number, number]) => {
        player.move(dx, dy);
        get_board();
    }

    get_board();
</script>

<div class="game">
    <div class="game-mid">
        <div class="game-mid-left">
            <div class="game-header">
                <h1>Stage </h1>
                <span>hp: </span>
                <span>def: </span>
                <span>att: </span>
            </div>
            <div class="game-card">
                <div class="game-board">
                    {#each board as x}
                        <div class="board-row">
                            {#each x as y}
                                <div class="board-col">
                                    {y}
                                </div>
                            {/each}
                        </div>
                    {/each}
                    <div class="game-controls">
                        <button on:click={_ => move_player(DIR.LEFT)}>left</button>
                        <button on:click={_ => move_player(DIR.UP)}>up</button>
                        <button on:click={_ => move_player(DIR.DOWN)}>down</button>
                        <button on:click={_ => move_player(DIR.RIGHT)}>right</button>
                    </div>
                </div>
            </div>
            <div class="game-top">
                <span>Hello :)</span>
            </div>
        </div>

        <div class="game-mid-right">
            <div class="game-equip">
                <div class="game-player">
                    <div class="game-player-section">
                        <button class="tile" aria-label="player-secondary"></button>
                    </div>
                    <div class="game-player-section">
                        <button class="tile" aria-label="player-head"></button>
                        <button class="tile" aria-label="player-body"></button>
                        <button class="tile" aria-label="player-legs"></button>
                    </div>
                    <div class="game-player-section">
                        <button class="tile" aria-label="player-primary"></button>
                    </div>
                </div>
                <div class="game-curios">
                    <div class="player-curios">
                        <button class="tile" aria-label="player-ring-1"></button>
                        <button class="tile" aria-label="player-ring-2"></button>
                        <button class="tile" aria-label="player-ring-3"></button>
                        <button class="tile" aria-label="player-ring-4"></button>
                    </div>
                </div>
            </div>
            <div class="game-inventory">

            </div>
        </div>
    </div>
</div>
