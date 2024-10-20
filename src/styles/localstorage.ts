const storage ='@odisyBooks'

export const setStorage = (name: string) => localStorage.setItem(storage, name)

export const getStorage = () => localStorage.getItem(storage)

