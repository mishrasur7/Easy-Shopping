import { deleteProductFromAPI, fetchProducts } from "../../redux/reducers/productReducer";
import createTestStore from "../utils/testStore";

let store = createTestStore()

//keeps store to its original state after each test
beforeEach(() => {
    store = createTestStore()
})

describe('testing product reducer', () => {
    test('fetching all products from api', async() => {
        const pagination = {
            offset: 1, 
            limit: 21
        }
        await store.dispatch(fetchProducts(pagination))
        expect(store.getState().productReducer.length).toBeGreaterThan(0)
    })

    //this test is not working properly
    test('delete product from api', async () => {
        const productId = '3'
        await store.dispatch(deleteProductFromAPI(productId))
        expect(store.getState().productReducer[0].title).toBe('Fantastic Granite Towels')
    })
})

