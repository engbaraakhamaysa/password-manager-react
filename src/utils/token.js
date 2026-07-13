const TOKEN_KEY = "token";

export const tokenService = {
  get: () => {
    return localStorage.getItem(TOKEN_KEY);
  },

  set: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  remove: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};
