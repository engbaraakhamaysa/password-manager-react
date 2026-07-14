import api from "../api/api";

export const adminService = {
  getUsers: async () => {
    const res = await api.get("/users");

    const users = res.data.data;

    return users.map((user) => ({
      id: user._id,
      name: user.name,
      email: user.email,
    }));
  },
};
