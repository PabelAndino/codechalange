/*Interface of types that should be in separate directory*/
interface Items {
    name: string
    category: string
    sellIn: number
    quality: number
    outdated?: boolean
}


const products: Items[] = [
    {name: 'Apple', category: 'Fruits', sellIn: 10, quality: 10, outdated:false},
    {name: 'Banana', category: 'Fruits', sellIn: 7, quality: 3, outdated:false},
    {name: 'Strawberry', category: 'Fruits', sellIn: 5, quality: 10, outdated:false},
    {name: 'Cheddar Cheese', category: 'Cheese', sellIn: 10, quality: 16, outdated:false},
    {name: 'Instant Ramen', category: 'Instant Food', sellIn: 5, quality: 16, outdated:false},
    {name: 'Organic Avocado', category: 'Organic', sellIn: 5, quality: 16, outdated:false},

]

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

const calculate = (products: any) => { //set tiene que agregar la interface que tiene todos los array de las categorias
    const {fruits, cheese, instantFood, organic} = products
    let newFruits = []
    if(newFruits.length === 0){
        newFruits.push(...fruits.map((data:any) => data))
    }

    for(let i =1; i<=4; i++){
        newFruits =  newFruits.map((data)=>{
            if(data.quality > 0){
                return  {
                    ...data,
                    quality: data.quality - 1,
                    sellIn: data.sellIn - 1,
                }
            }
            if(data.quality <= 0){
                return  {
                    ...data,
                    quality: 0,
                    outdated:true
                }
            }
    })

        console.log(`day ${i} -----------`)
        console.table(newFruits)

    }
}

const newTest = (products: Items[]) => {

    const newarr = []
    if(newarr.length === 0){
        newarr.push(...products.map(data => data))
    }

    for(let i = 1; i <= 7; i ++){
       const outro = newarr.map((data)=> {
           if(data.quality > 0){
               if( i >= 5){
                   return {
                       ...data,
                       outdated: true
                   }

                   //newarr.push(...newData)

               }
               return {
                   ...data,
                   quality : data.quality - 1
               }
           }

        })

        console.log(outro)
    }



    //console.log(newarr)

}

//newTest(products)

calculate(getGroceryCategory(products))






