import { Store } from "redux";
import { InMemoryPackageGateway } from "../../../adapters/package/InMemoryPackageGateway";
import { AppState } from "../../../redux/AppState";
import { initStore } from "../../../redux/store";
import { Package } from "../../domain/package";
import { retrieveAllPackagesAction } from "./packageRetrievalSlice";
import { SOME_PACKAGE } from "./test-fixtures/constants";

describe("test retrieve packages use case", () => {
  const criteria = "react";
  let store: Store<AppState>;
  let initialState: AppState;
  let packageGateway: InMemoryPackageGateway;

  beforeEach(() => {
    packageGateway = new InMemoryPackageGateway();
    store = initStore({ packageGateway });
    initialState = store.getState();
  });
  describe("can retrieve packages", () => {
    it("should retrieve an empty list of packages", () => {
      // given
      packageGateway.packages = [];
      // then
      store.dispatch(retrieveAllPackagesAction({ criteria }));
      // when
      expect(store.getState()).toEqual({
        ...initialState,
        packageRetrieval: {
          packages: [],
          fetching: false,
          error: null
        }
      });
      it("should retrieve one package", () => {
        // given
        packageGateway.packages = [SOME_PACKAGE];
      });
    });
  });

  describe("cannot retrieve packages", () => {
    it("should warn user when an unexpected error occurred", () => {
      // given
      const error = new Error("something bad happened");
      packageGateway.error = error;
      // when
      store.dispatch(retrieveAllPackagesAction({ criteria }));
      // then
      expect(store.getState()).toEqual({
        ...initialState,
        packageRetrieval: {
          packages: null,
          fetching: false,
          error: error
        }
      });
    });
  });
});
