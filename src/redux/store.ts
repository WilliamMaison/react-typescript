import { configureStore } from "@reduxjs/toolkit";
import {
  combineEpics,
  createEpicMiddleware,
  EpicMiddleware
} from "redux-observable";
import { AppState } from "./AppState";
import { PackageGateway } from "../corelogic/ports/PackageGateway";
import { packageRetrieval } from "../corelogic/usecases/package/packageRetrievalSlice";
import { retrievePackagesEpic } from "../corelogic/usecases/package/retrieve-packages.epic";

export interface Dependencies {
  packageGateway: PackageGateway;
}

export const initStore = (dependencies: Partial<Dependencies>) => {
  const epicMiddleware: EpicMiddleware<
    any,
    any,
    AppState,
    Partial<Dependencies>
  > = createEpicMiddleware({ dependencies });

  const rootEpic = combineEpics<any, any, AppState, Partial<Dependencies>>(
    retrievePackagesEpic
  );

  const store = configureStore<AppState>({
    reducer: { packageRetrieval },
    middleware: [epicMiddleware]
  });
  epicMiddleware.run(rootEpic);
  return store;
};
