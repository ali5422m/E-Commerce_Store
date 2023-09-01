"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "@/app/(routes)/cart/components/cart-item";
import Summary from "@/app/(routes)/cart/components/summary";

const Page = () => {
    const cart = useCart();


    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">
                        Shopping cart
                    </h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </ul>
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Page;