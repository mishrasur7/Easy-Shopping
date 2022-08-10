import { login } from "../../redux/reducers/userReducer";
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
})

