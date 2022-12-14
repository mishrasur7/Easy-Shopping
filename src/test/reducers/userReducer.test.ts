import { login, loginByToken } from "../../redux/reducers/userReducer";
import createTestStore from "../utils/testStore";

let store = createTestStore()

//keeps store to its original state after each test
beforeEach(() => {
    store = createTestStore()
})

describe('testing user reducer', () => {
    test('user should login successfully', async () => {
        await store.dispatch(login({
            email: 'john@mail.com',
            password: 'changeme'
        }))
        expect(store.getState().userReducer.currentUser).toBeDefined()
    })
    test('user should not login with wrong credentials', async() => {
        await store.dispatch(login({
            email: 'surajmishra@gmail.com', 
            password: '1234abcd'
        }))
        expect(store.getState().userReducer.currentUser).toBeUndefined()
    })
})

