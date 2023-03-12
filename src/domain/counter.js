const store = {
  create() {
    this.state = new Proxy({}, {
      set: (obj, prop, value) => {
        obj[prop] = value;
        return true;
      },
    });
  },
};

export { store };