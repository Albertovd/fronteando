// import media files
import Product1 from 'assets/images/ecommerce/product-shoe-01.jpg';
import Product2 from 'assets/images/ecommerce/product-shoe-02.jpg';
import Product3 from 'assets/images/ecommerce/product-shoe-03.jpg';
import Product4 from 'assets/images/ecommerce/product-shoe-04.jpg';
import Product5 from 'assets/images/ecommerce/product-shoe-05.jpg';
import Product6 from 'assets/images/ecommerce/product-shoe-06.jpg';
import Product7 from 'assets/images/ecommerce/product-shoe-07.jpg';
import Product8 from 'assets/images/ecommerce/product-shoe-08.jpg';

import EcommerceImg1 from 'assets/images/ecommerce/ecommerce-img-1.jpg';
import EcommerceImg4 from 'assets/images/ecommerce/ecommerce-img-4.jpg';
import EcommerceImg9 from 'assets/images/ecommerce/ecommerce-img-9.jpg';
export const ProductsData = [
  {
    id: 1,
    name: 'White Adidas Top Sneakers',
    colors: ['danger', 'warning', 'dark'],
    salePrice: 49.00,
    mrp: 49.00,
    sale: false,
    rating: 5.0,
    new: false,
    status: 'active',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product1
      },
      {
        id: 2,
        image: Product2
      },
      {
        id: 3,
        image: Product3
      }
    ],
  },
  {
    id: 2,
    name: 'Red Converse shoe',
    colors: ['danger', 'primary', 'dark'],
    salePrice: 139.00,
    mrp: 139.00,
    sale: false,
    rating: 4.6,
    new: false,
    status: 'draft',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product2
      }
    ],
  },
  {
    id: 3,
    name: 'Unpaired maroon plimsoll',
    colors: ['danger', 'success', 'dark'],
    salePrice: 39.00,
    mrp: 49.00,
    sale: true,
    rating: 3.6,
    new: false,
    status: 'active',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product3
      }
    ],
  },
  {
    id: 4,
    name: 'Nike SuperRep Go',
    colors: ['danger', 'warning', 'info'],
    salePrice: 69.00,
    mrp: 69.00,
    sale: false,
    rating: 3.6,
    new: false,
    status: 'archived',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product4
      }
    ],
  },
  {
    id: 5,
    name: 'Unpaired maroon plimsoll',
    colors: ['danger', 'warning', 'dark'],
    salePrice: 49.00,
    mrp: 49.00,
    sale: false,
    rating: 4.2,
    new: false,
    status: 'active',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product5
      }
    ],
  },
  {
    id: 6,
    name: 'Nike Legend Essential 2',
    colors: ['primary', 'dark'],
    salePrice: 30.00,
    mrp: 39.00,
    sale: true,
    rating: 3.8,
    new: true,
    status: 'active',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product6
      }
    ],
  },
  {
    id: 7,
    name: 'Nike Black and White',
    colors: ['danger', 'info', 'dark'],
    salePrice: 239.00,
    mrp: 239.00,
    sale: false,
    rating: 3.9,
    new: false,
    status: 'archived',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product7
      }
    ],
  },
  {
    id: 8,
    name: 'Nike shoes Dark Brown',
    colors: ['danger', 'warning', 'dark'],
    salePrice: 29.00,
    mrp: 29.00,
    sale: false,
    rating: 2.9,
    new: false,
    status: 'archived',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product8
      }
    ],
  },
  {
    salePrice: 39.00,
    id: 9,
    name: 'Henry Saxton',
    colors: ['danger', 'primary', 'dark'],
    mrp: 39.00,
    sale: false,
    rating: 3.9,
    new: false,
    status: 'draft',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product2
      }
    ],
  },
  {
    id: 10,
    name: 'Juanita Diener',
    colors: ['primary', 'dark'],
    salePrice: 29.00,
    mrp: 29.00,
    sale: false,
    rating: 2.9,
    new: false,
    status: 'active',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product4
      }
    ],
  },
  {
    id: 11,
    name: 'Boris Ortiz',
    colors: ['danger', 'warning', 'info'],
    salePrice: 39.00,
    mrp: 39.00,
    sale: false,
    rating: 4.9,
    new: false,
    status: 'draft',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product6
      }
    ],
  },
  {
    id: 12,
    name: 'Mr. Stefan Jenkins',
    colors: ['danger', 'success', 'dark'],
    salePrice: 129.00,
    mrp: 129.00,
    sale: false,
    rating: 3.8,
    new: false,
    status: 'archived',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: Product8
      }
    ],
  },
  {
    id: 13,
    name: 'Wayfarer Styled Sunglasses',
    colors: ['danger', 'success', 'dark'],
    salePrice: 39.00,
    mrp: 39.00,
    sale: false,
    rating: 3.8,
    new: false,
    status: 'archived',
    inventory: 5,
    category: 'Glasses',
    images: [
      {
        id: 1,
        image: EcommerceImg4
      }
    ],
  },
  {
    id: 14,
    name: 'Nike Black and White',
    colors: ['danger', 'warning', 'dark'],
    salePrice: 79.00,
    mrp: 79.00,
    sale: false,
    rating: 5.0,
    new: false,
    status: 'active',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: EcommerceImg9
      }
    ],
  },
  ,
  {
    id: 15,
    name: 'White & Red Nike Athletic Shoe',
    colors: ['danger', 'warning', 'dark'],
    salePrice: 49.00,
    mrp: 49.00,
    sale: false,
    rating: 5.0,
    new: false,
    status: 'active',
    inventory: 5,
    category: 'Shoe',
    images: [
      {
        id: 1,
        image: EcommerceImg1
      }
    ],
  },

];

export default ProductsData;