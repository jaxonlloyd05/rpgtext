<script lang="ts">
    import "./app.css";
    import { create_floor } from "$lib/components/world";
    
    const board = create_floor(1);

</script>

<div class="game">
    <div class="game-mid">
        <div class="game-mid-left">
            <div class="game-header">
                <h1>Stage 3: For the realm of kings and men</h1>
                <span>hp: 100</span>
                <span>def: 2</span>
                <span>att: 3</span>
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
                </div>
            </div>
            <div class="game-top">
                <span>- cooked (-1hp)</span>
                <span>- cooked (but winning +1hp)</span>
                                <span>- cooked (-1hp)</span>
                <span>- cooked (but winning +1hp)</span>
                                <span>- cooked (-1hp)</span>
                <span>- cooked (but winning +1hp)</span>
                                <span>- cooked (-1hp)</span>
                <span>- cooked (but winning +1hp)</span>
                                <span>- cooked (-1hp)</span>
                <span>- cooked (but winning +1hp)</span>
                                <span>- cooked (-1hp)</span>
                <span>- cooked (but winning +1hp)</span>
                                <span>- cooked (-1hp)</span>
                <span>- cooked (but winning +1hp)</span>
                                <span>- cooked (-1hp)</span>
                <span>- cooked (but winning +1hp)</span>
                                <span>- cooked (-1hp)</span>
                <span>- cooked (but winning +1hp)</span>
                                <span>- cooked (-1hp)</span>
                <span>- cooked (but winning +1hp)</span>
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
