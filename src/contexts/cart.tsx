import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext<{
    name: string,
    setName: (value: string) => void,
    // addCart: () => void,
}>({
    name: "Cart",
    setName: () => { }
    // addCart: () => {}
})
export const useCart = () => useContext(CartContext)
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState<string>('');
    const value = useMemo(function() {
        return {
            name: name,
            setName: setName
        }
    }, [name, setName])

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
