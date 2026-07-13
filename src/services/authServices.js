import api from "./api";

// ==========================================================
// Save JWT token and return decoded user
// ==========================================================

export const authService = {
  // ==========================================================
  // Register User
  // ==========================================================
  register: async (data) => {
    const res = await api.post("/auth/register", data);

    return res.data.data;
  },

  // ==========================================================
  // Login User
  // ==========================================================

  login: async (data) => {
    const res = await api.post("/auth/login", data);

    return res.data.data;
  },
};
