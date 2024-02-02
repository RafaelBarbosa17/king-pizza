
export interface MenuStorage {
        sabor: string
        ingredients: string
        price: {
            md: number
            lg: number
        }
    }

export const menuStorage: MenuStorage[] = [
    {
        sabor: "calabresa",
        ingredients: "Massa artesanal, Molho de Tomate Artesanal, Muçarela, Muita Calabresa e Orégano (Cebola opcional).",
        price: {
            md: 34.90,
            lg: 39.90
        }
    },
    {
        sabor: "frango c/ caturpiry",
        ingredients: "Massa artesanal, Molho de Tomate Artesanal, Muçarela, Frango, Catupiry e Orégano.",
        price: {
            md: 36.90,
            lg: 42.90
        }
    },
    {
        sabor: "king pizza",
        ingredients: "Massa artesanal, Molho de Tomate Artesanal, Milho, Bacon, Muçarela, Presunto e Orégano (Pimentão e Cebola opicional).",
        price: {
            md: 36.90,
            lg: 42.90
        }
    },
]

export const getPizzaMenu = () => {
    return menuStorage
}
