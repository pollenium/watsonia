export class Emitter<T> {
  private callbacks: Array<(T) => void> = []

  on(callback: (data: T) => void) {
    this.callbacks.push(callback)
  }

  once(callback: (data: T) => void) {
    this.on((data: T) => {
      this.callbacks.splice(this.callbacks.indexOf(callback), 1)
      callback(data)
    })
  }

  emit(data: T) {
    if (this.callbacks.length === 0) {
      throw new Error('No Callbacks')
    }
    setTimeout(() => {
      this.callbacks.forEach((callback) => {
        callback(data)
      })
    }, 1)
  }

  emitIfCallbacks(data: T) {
    if (this.callbacks.length > 0) {
      this.emit(data)
    }
  }
}
