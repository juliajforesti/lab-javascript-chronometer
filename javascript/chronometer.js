class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1,
      callback();
    }, 10)
  
  }
  getMinutes() {
    return Math.floor((this.currentTime / (60 * 100)));
  }
  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }
  getMiliseconds(){
    return this.currentTime % 100
  }
  twoDigitsNumber(value) {
    return value < 10 ? `0${value}` : `${value}`; 
    // ou return value < 10 ?  "0" + value.toString() : value.toString()
    
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0;

  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + 
    this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getMiliseconds())
    
  }
}
