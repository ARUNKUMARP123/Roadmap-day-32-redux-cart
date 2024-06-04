import React, {Children, useState} from 'react'

export const UserContext = React.createContext()

function UserContextComponent({children}) {
    const [product, setProduct] = useState([
        {
          "id": 1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "image": "https://i.pinimg.com/originals/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg",
        },
        {
          "id": 2,
          "title": "iPhone X",
          "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          "price": 899,
          "discountPercentage": 17.94,
          "rating": 4.44,
          "stock": 34,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixRB8jPMAYfZ3aK8r6ylesSKEAbAST0-xcA&s"
      },
      {
          "id": 3,
          "title": "Samsung Universe 9",
          "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
          "price": 1249,
          "discountPercentage": 15.46,
          "rating": 4.09,
          "stock": 36,
          "brand": "Samsung",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
          "image": "data:image/jpeg;base64,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"
      },
      {
          "id": 4,
          "title": "OPPOF19",
          "description": "OPPO F19 is officially announced on April 2021.",
          "price": 280,
          "discountPercentage": 17.91,
          "rating": 4.3,
          "stock": 123,
          "brand": "OPPO",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          "image": "data:image/jpeg;base64,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"
      },
      {
          "id": 5,
          "title": "Huawei P30",
          "description": "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          "price": 499,
          "discountPercentage": 10.58,
          "rating": 4.09,
          "stock": 32,
          "brand": "Huawei",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
          "image": "data:image/jpeg;base64,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"
      }
      ])
    return <>
        <UserContext.Provider value={{product, setProduct}}>
            {children}
        </UserContext.Provider>
    </>
}

export default UserContextComponent