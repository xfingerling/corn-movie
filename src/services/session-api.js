export default {
  login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {},
          token: "unique-jwt-token",
        });
      }, 300);
    });
  },
  singup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {},
          token: "unique-jwt-token",
        });
      }, 300);
    });
  },
};
