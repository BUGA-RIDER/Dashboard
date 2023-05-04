import {create} from 'zustand';

export const ModalStore = create((set) => ({
  createDriverModal: false , // default selected option
  createRiderModal: false , // default selected option
  tripDetails: false , // default selected option
  menuModal: false , // default selected option
  setCreateDriverModal: (newValue) => set({ createDriverModal: newValue }),
  setCreateRiderModal: (newValue) => set({ createRiderModal: newValue }),
  setTripDetails: (newValue) => set({ tripDetails: newValue }),
  setMenuModal: (newValue) => set({ menuModal: newValue }),
}));