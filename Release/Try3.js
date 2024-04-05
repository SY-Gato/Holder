class goofyahh {
  constructor(name) {
    this.name = name;
  }
  show() {
    alert("Something: ${this.name}");
  }
}

window.goofyahh = goofyahh;
