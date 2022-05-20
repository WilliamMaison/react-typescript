import { Package } from "../corelogic/domain/package";

export interface AppState {
  packageRetrieval: {
    packages: Package[] | null;
    fetching: boolean;
    error: Error | null;
  };
}
