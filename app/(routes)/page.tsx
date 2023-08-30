import React from 'react';
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("4b7d5af1-a693-4c34-8462-d21dd11ba9a3");
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    );
};

export default HomePage;