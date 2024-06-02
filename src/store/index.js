import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens'

// É aonde vamos ter os reducers, pequenos pedaços do store
const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice
    }
})

export default store;