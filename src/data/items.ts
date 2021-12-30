import { Item } from '../types/Item';

{/* Devido ao uso de TS, todo objeto deve conter todos os tipos */}
export const items: Item[] = [
    {date: new Date(2021, 11, 6), category: 'food', title: 'McDonalds', value: 32.12 },
    {date: new Date(2021, 11, 15), category: 'food', title: 'Burger King', value: 28.00 },
    {date: new Date(2021, 11, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
    {date: new Date(2021, 10, 18), category: 'salary', title: 'Salário', value: 4500 }
];