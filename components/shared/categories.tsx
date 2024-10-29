import React from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";

interface Props {
    className?: string;
}

const categoriesName = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
const activeCategoryIndex = 0;

export const Categories: React.FC<Props> = ({className}: Props) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {categoriesName.map((categoryName, categoryIndex) => (
                <Link
                    key={categoryName}
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        activeCategoryIndex === categoryIndex && 'bg-white shadow-md shadow-gray-200 text-primary',
                    )}
                    href="">
                    {categoryName}
                </Link>
            ))}
        </div>
    )
};
