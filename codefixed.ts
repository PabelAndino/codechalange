/*Interface of types*/
interface Items {
    name: string
    category: string
    sellIn: number
    quality: number
    forSale: boolean
}

/*Function to manage the logic*/
const productsOperations = (products: Items[], days: number) => {

    let allProducts = []
    if (allProducts.length === 0) {
        allProducts.push(...[products.map(data => data)])
    }
    console.log(`day 1 -----------`)
    console.table(products)

    for (let i = 2; i <= days; i++) {
        products = products.map((data) => {
            if (data.sellIn === 0 && data.name !== 'Instant Ramen' && data.name !== 'Cheddar Cheese') {
                return {
                    ...data,
                    quality: data.quality > 0 && data.quality != 1 ? data.quality - 2 : 0,
                    sellIn: data.sellIn > 0 ? data.sellIn - 1 : 0,
                }
            }

            if (data.name === 'Cheddar Cheese') {
                return {
                    ...data,
                    quality: data.quality < 25 ? data.quality + 1 : 25,
                    sellIn: data.sellIn > 0 ? data.sellIn - 1 : 0,
                }
            }

            if (data.name === 'Instant Ramen') {
                return {
                    ...data,
                    sellIn: data.sellIn > 0 ? data.sellIn - 1 : 0,
                    forSale: false
                }
            }

            if (data.category === 'Organic') {
                return {
                    ...data,
                    quality: data.quality > 0 && data.quality != 1 ? data.quality - 2 : 0,
                    sellIn: data.sellIn > 0 ? data.sellIn - 1 : 0,
                    forSale: i < 5
                }
            }

            return {
                ...data,
                quality: data.quality > 0 ? data.quality - 1 : 0,
                sellIn: data.sellIn > 0 ? data.sellIn - 1 : 0,
            }

        })
        console.log(`day ${i} -----------`)
        console.table(products)
        allProducts.push(...[products.map(data => data)])
    }

    return allProducts


}

/*Unit Test*/
let chai = require('chai')
let expect = chai.expect

try {

    const productsTest: Items[] = [
        {name: 'Apple', category: 'Fruits', sellIn: 3, quality: 20, forSale: true},
        {name: 'Banana', category: 'Fruits', sellIn: 7, quality: 3, forSale: true},
        {name: 'Strawberry', category: 'Fruits', sellIn: 5, quality: 10, forSale: true},
        {name: 'Cheddar Cheese', category: 'Cheese', sellIn: 4, quality: 16, forSale: true},
        {name: 'Instant Ramen', category: 'Instant Food', sellIn: 5, quality: 16, forSale: true},
        {name: 'Organic Avocado', category: 'Organic', sellIn: 5, quality: 16, forSale: true},

    ]

    const apple = 0
    const banana = 1
    const strawberry = 2
    const cheddar_cheese = 3
    const instant_ramen = 4
    const organic_avocado = 5

    const testItems = productsOperations(productsTest, 10)

    /*Test Regular products*/
    expect(testItems[0][apple].quality).to.equal(20);
    expect(testItems[1][apple].quality).to.equal(19);

    /*Cheddar Cheese test*/
    expect(testItems[1][cheddar_cheese].quality).to.equal(17);
    expect(testItems[9][cheddar_cheese].quality).to.equal(25);

    /*Ramen test*/
    expect(testItems[2][instant_ramen].forSale).to.equal(false);

    /*Organic food test afer or before 5  days*/
    expect(testItems[3][organic_avocado].forSale).to.equal(true)
    expect(testItems[6][organic_avocado].forSale).to.equal(false)

    console.log(`✅ Tests passed!`);

} catch (e) {
    console.warn(`❌ Tests failed`);
    console.error(e);
}






