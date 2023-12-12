import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
type FavoritoState = {
  favoritos: Produto[]
}

const initialState: FavoritoState = {
  favoritos: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFavoritos: (state, action: PayloadAction<Produto>) => {
      const produtoFavorito = action.payload
      const indiceProdutoExistente = state.favoritos.findIndex(
        (favoritos) => favoritos.id === produtoFavorito.id
      )

      if (indiceProdutoExistente !== -1) {
        state.favoritos.splice(indiceProdutoExistente, 1)
      } else {
        state.favoritos.push(produtoFavorito)
      }
    }
  }
})

export const { adicionarFavoritos } = favoritoSlice.actions
export default favoritoSlice.reducer
// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }
