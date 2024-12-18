import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface moviestate{
    movies: string[]
    addMovie:(movie: string) => void
    removeMovie:(movie: string)=>void
    removeAllMovies:()=> void
}
export const useStoreMovie = create<moviestate>()(persist((set) => ({
    movies: [],
    addMovie: (movie) => set((state) => ({movies: [...state.movies, movie]})),
    removeMovie: (movie) => set((state) => ({movies: [...state.movies.filter((el) => el != movie)]})),
    removeAllMovies: () => set({movies: []}),
}),
{
    name: 'movie-storage', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
},))
