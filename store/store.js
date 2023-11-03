import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        token : "",
        role: "user"
    }),
});