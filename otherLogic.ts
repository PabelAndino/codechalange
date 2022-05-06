interface Items {
    name: string
    category: string
    sellIn: number
    quality: number
    forSale: boolean
}
const getGroceryCategory = (products: Items[]) => {
    const fruits = products.filter(data => data.category === 'Fruits')
    const cheese = products.filter(data => data.category === 'Cheese')
    const instantFood = products.filter(data => data.category === 'Instant Food')
    const organic = products.filter(data => data.category === 'Organic')
    return {
        fruits,
        cheese,
        instantFood,
        organic
    }
}

const productsOperations = (products: any) => {
    const {fruits, cheese, instantFood, organic} = products

    let newFruits = []
    if(newFruits.length === 0){
        newFruits.push(...fruits.map((data:any) => data))
    }
    console.table(newFruits)

    for(let i =1; i<=5; i++){
        newFruits =  newFruits.map((data)=>{
            if(data.sellIn === 0){
                return  {
                    ...data,
                    quality: data.quality > 0 ? data.quality - 2 : 0 ,
                    sellIn: data.sellIn > 0 ? data.sellIn - 1 : 0,
                }
            }
            return  {
                ...data,
                quality: data.quality > 0 ? data.quality - 1 : 0 ,
                sellIn: data.sellIn > 0 ? data.sellIn - 1 : 0,
            }

        })

        console.log(`day ${i} -----------`)

        console.table(newFruits)

    }

}


