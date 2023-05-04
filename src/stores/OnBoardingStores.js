import {create} from 'zustand';

const BASE_URL= "https://buga-api.onrender.com"

export const OnBoardingData = create((set) => ({
  email: "" , // default selected option
  name: "" , // default selected option
  phone_number: "" , // default selected option
  password: "" , // default selected option
  confirmPassword: "" , // default selected option
  handle: "" , // default selected option
  one: "" , // default selected option
  two: "" , // default selected option
  three: "" , // default selected option
  setEmail: (newValue) => set({ email: newValue }),
  setName: (newValue) => set({ name: newValue }),
  setPhone_number: (newValue) => set({ phone_number: newValue }),
  setPassword: (newValue) => set({ password: newValue }),
  setConfirmPassword: (newValue) => set({ confirmPassword: newValue }),
  setHandle: (newValue) => set({ handle: newValue }),
  setOne: (newValue) => set({ one: newValue }),
  setTwo: (newValue) => set({ two: newValue }),
  setThree: (newValue) => set({ three: newValue }),
}));

export const loginStore = create((set) => ({
  
    user: null,
    isLoading: false,
    error: null,
    login: async (email, password) => {
    set({isLoading: true, error: null});
    const response = await fetch(`${BASE_URL}/api/ambassador/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });
    const json = await response.json();
    
    if (!response.ok) {
      set({error: json.error, isLoading: false});
    }
    if (response.ok) {
      set({user: json, isLoading: false});
      localStorage.setItem('user', JSON.stringify(json))
      window.location.href = "/"
    }
  },

  logout: () => {
    set({user: null});
    localStorage.removeItem('user')
  },

  signup: async (
    name,
    password,
    email,
    phone_number,
    handle,
    {one, two, three }) => {

    set({isLoading: true, error: null});

const response = await fetch(`${BASE_URL}/api/ambassador/signup`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    name,
        password,
        email,
        phone_number,
        handle,
        questions: { one, two, three },
  }),
});
const json = await response.json();

if (!response.ok) {
  set({error: json.error, isLoading: false});
}
if (response.ok) {
  localStorage.setItem('user', JSON.stringify(json))
  set({user: json, isLoading: false});
  window.location.href = "/"
}
},
setUser: (newValue) => set({ user: newValue }),

}));