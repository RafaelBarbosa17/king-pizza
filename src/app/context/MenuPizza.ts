export interface MenuStorage {
  id: number
  sabor: string
  ingredients: string
  price: {
    md: number
    lg: number
  }
}

export const menuStorage: MenuStorage[] = [
  {
    id: 1,
    sabor: 'calabresa',
    ingredients:
      'Massa artesanal, Molho de Tomate Artesanal, Muçarela, Muita Calabresa e Orégano (Cebola opcional).',
    price: {
      md: 34.9,
      lg: 39.9
    }
  },
  {
    id: 2,
    sabor: 'frango c/ caturpiry',
    ingredients:
      'Massa artesanal, Molho de Tomate Artesanal, Muçarela, Frango, Catupiry e Orégano.',
    price: {
      md: 36.9,
      lg: 42.9
    }
  },
  {
    id: 3,
    sabor: 'king pizza',
    ingredients:
      'Massa artesanal, Molho de Tomate Artesanal, Milho, Bacon, Muçarela, Presunto e Orégano (Pimentão e Cebola opicional).',
    price: {
      md: 36.9,
      lg: 42.9
    }
  }
]

export const getPizzaMenu = () => {
  return menuStorage
}
