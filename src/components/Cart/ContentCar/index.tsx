import { useState } from "react"
import Image from 'next/image'
import axios from "axios"
import { Spinner } from "../../Spinner"
import { useCart } from "../../../hooks/useCart"
import { ProductCart, ProductCartWrapper, ProductImage, ProductInfo, ProductsResume } from "./styles"

export function ContentCart() {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const { cartItems, removeCart, cartTotalPrice } = useCart()

    const formattedTotalPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(cartTotalPrice / 100)

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout', {
                products: cartItems
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch (err) {
            // Connect with an observability tool (Datadog / Sentry).
            setIsCreatingCheckoutSession(false)

            alert('Failed to redirect to checkout!')
        }
    }

    return (
        <>
            <ProductCartWrapper>
                {cartItems.map((cartItem) => {
                    return (
                        <ProductCart key={cartItem.id}>
                            <ProductImage>
                                <Image src={cartItem.imageUrl} alt='' width={94} height={94} />
                            </ProductImage>
                            <ProductInfo>
                                <span>{cartItem.name}</span>
                                <strong>{cartItem.price}</strong>
                                <button onClick={() => removeCart(cartItem.id)}>Remove</button>
                            </ProductInfo>
                        </ProductCart>
                    )
                })}
            </ProductCartWrapper>

            <ProductsResume>
                <div>
                    <span>Quantity</span>
                    <span>{cartItems.length}</span>
                </div>
                <div>
                    <strong>Total Price</strong>
                    <strong>{formattedTotalPrice}</strong>
                </div>
                <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
                    {isCreatingCheckoutSession ? <Spinner /> : 'Checkout'}
                </button>
            </ProductsResume>
        </>
    )
}