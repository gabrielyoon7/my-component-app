const store = {
  create() {
    this.state = new Proxy({}, {
      set: (obj, prop, value) => {
        obj[prop] = value;
        return true;
      },
    });
  },
  setState(prop, value) {
    this.state[prop] = value;
  }
};

export { store };