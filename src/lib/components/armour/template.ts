class Armour {
    private defence: number;
    private substats = []

    constructor(defence:number, ) {
        this.defence = defence;
    }

    public get_defence = () => {
        return this.defence;
    }
}


export default Armour;