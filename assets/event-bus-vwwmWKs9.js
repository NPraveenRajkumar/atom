class EventBus {
    listeners = new Map();
    on(event, cb) {
        const arr = this.listeners.get(event) || [];
        arr.push(cb);
        this.listeners.set(event, arr);
        return () => this.off(event, cb);
    }
    off(event, cb) {
        const arr = this.listeners.get(event) || [];
        this.listeners.set(event, arr.filter(l => l !== cb));
    }
    emit(event, ...args) {
        const arr = this.listeners.get(event) || [];
        for (const l of arr.slice())
            l(...args);
    }
}
const GlobalEventBus = new EventBus();

export { GlobalEventBus as G };
