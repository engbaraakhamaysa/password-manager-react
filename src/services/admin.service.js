// import api from "../api/api";

// export const adminService = {
//   getUsers: async () => {
//     const res = await api.get("/users");

//     const users = res.data.data;

//     return users.map((user) => ({
//       id: user._id,
//       name: user.name,
//       email: user.email,
//     }));
//   },
// };

import api from "../api/api";

export const adminService = {
  // Get all users
  getUsers: async () => {
    const res = await api.get("/users");

    return res.data.data;
  },

  // Get user by id
  getUserById: async (id) => {
    const res = await api.get(`/users/${id}`);

    return res.data.data;
  },

  // Update user
  updateUser: async (id, data) => {
    const res = await api.put(`/users/${id}`, data);

    return res.data.data;
  },

  // Delete user
  deleteUser: async (id) => {
    const res = await api.delete(`/users/${id}`);

    return res.data;
  },
};
