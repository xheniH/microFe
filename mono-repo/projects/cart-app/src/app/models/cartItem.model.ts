import {ProductModel} from 'shared-lib';

export interface CartItemModel {
    product: ProductModel;
    quantity: number;
}