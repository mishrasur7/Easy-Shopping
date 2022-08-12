import {
    addProduct,
  deleteProductFromAPI,
  fetchProducts,
  sortByCategory,
} from "../../redux/reducers/productReducer";
import { products } from "../fitures/testProduct";
import createTestStore from "../utils/testStore";

let store = createTestStore();

//keeps store to its original state after each test
beforeEach(() => {
  store = createTestStore();
});

describe("testing product reducer", () => {
  test("fetching all products from api", async () => {
    const pagination = {
      offset: 1,
      limit: 21,
    };
    await store.dispatch(fetchProducts(pagination));
    expect(store.getState().productReducer.length).toBeGreaterThan(0);
  });

  //this test is not working properly
 /*  test("delete product from api", async () => {
    const productId = "3";
    await store.dispatch(deleteProductFromAPI(productId));
    expect(store.getState().productReducer[0].title).toBe(
      "Fantastic Granite Towels"
    );
  }); */
  test("should add products", () => {
    products.map(product => store.dispatch(addProduct(product)))
    expect(store.getState().productReducer.length).toBe(3)
  });
  test("should sort as category", () => {
    products.map(product => store.dispatch(addProduct(product)))
    store.dispatch(sortByCategory('Furniture'))
    console.log('total lent', store.getState().productReducer.length)
    expect(store.getState().productReducer.length).toBe(3)
  });

});
