class IDCounter {
    #counter: number

    getCounter(): number {
        return this.#counter
    }

    incrementCounter(): number {
        this.#counter++
        return this.getCounter()
    }

    decrementCounter(): number {
        this.#counter--
        return this.getCounter()
    }

    constructor() {
        this.#counter = 0
    }
}
