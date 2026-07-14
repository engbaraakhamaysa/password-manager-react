import api from "../api/api";

export const passwordService = {
  // Get all passwords
  getAll: async () => {
    const res = await api.get("/password");

    return res.data.data;
  },

  // Create password
  create: async (data) => {
    const res = await api.post("/password", data);

    return res.data.data;
  },

  // Update password
  update: async (id, data) => {
    const res = await api.put(`/password/${id}`, data);

    return res.data.data;
  },

  // Delete password
  remove: async (id) => {
    const res = await api.delete(`/password/${id}`);

    return res.data;
  },
};
