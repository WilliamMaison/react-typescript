import { Package } from "../corelogic/domain/package";

export interface AppState {
  packageRetrieval: {
    packages: Package[];
    fetching: boolean;
    error: Error | null;
  };
}
