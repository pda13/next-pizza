import React from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";

interface ProductCardProps {
    id: number,
    name: string,
    price: number,
    imageUrl: string
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({id, name, price, imageUrl, className}) => {
    return (
        <div className={cn('', className)}>
            <Link href={`/products/${id}`} passHref>
                <div className={'flex justify-center p-6 bg-secondary rounded-lg h-[260px]'}>
                    <Image src={imageUrl} alt={name} width={215} height={215}/>
                </div>
            </Link>

            <Title text={name} size="sm" className={'mb-1 mt-3 font-bold'}/>

            <p className="text-sm text-gray-400">
                Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
            </p>

            <div className={'flex justify-between items-center mt-4'}>
                <span className="text-[20px]">
                  от <b>{price} ₽</b>
                </span>

                <Button variant={"secondary"} className={'text-base font-bold'}>
                    <Plus size={20} className={'mr-1'} />
                    Добавить
                </Button>
            </div>
        </div>
    )
}
