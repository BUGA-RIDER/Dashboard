import {create} from 'zustand';

const BASE_URL= "https://buga-api.onrender.com"

export const AdminStore = create((set) => ({
  email: "" , // default selected option
  name: "" , // default selected option
  password: "" , // default selected option
  setEmail: (newValue) => set({ email: newValue }),
  setName: (newValue) => set({ name: newValue }),
  setPassword: (newValue) => set({ password: newValue }),
}));

export const AdminLogin = create((set) => ({
    admin: null,
    isLoading: false,
    error: null,
    login: async (email, password) => {
    set({isLoading: true, error: null});
    const response = await fetch(`${BASE_URL}/api/admin/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });
    const json = await response.json();
    
    if (!response.ok) {
      set({error: json.error, isLoading: false});
    }
    if (response.ok) {
      set({admin: json, isLoading: false});
      localStorage.setItem('admin', JSON.stringify(json))
      window.location.href = "/"
    }
  },

  logout: () => {
    set({admin: null});
    localStorage.removeItem('admin')
    window.location.href = "/"
  },

  signup: async (
    name,
    password,
    email,
  ) => {

  set({isLoading: true, error: null});

  const response = await fetch(`${BASE_URL}/api/admin/signup`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name,
          password,
          email,
        }),
});
const json = await response.json();

if (!response.ok) {
  set({error: json.error, isLoading: false});
}
if (response.ok) {
  localStorage.setItem('admin', JSON.stringify(json))
  set({admin: json, isLoading: false});
  window.location.href = "/"
}
},
setAdmin: (newValue) => set({ admin: newValue }),

}));