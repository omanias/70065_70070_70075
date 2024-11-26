import { faker } from "@faker-js/faker"

export const generateUser = () => {

    let products = []

    for (let i = 0; i < 10; i++) {
        products.push(generateProduct())
    }

    console.log(products)

    return {
        name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        sex: faker.person.sex(),
        email: faker.internet.email(),
        job: faker.person.jobTitle()
    }
}


export const generateProduct = () => {
    return {
        title: faker.commerce.product(),
        description: faker.commerce.productDescription()
    }
}


export default generateUser