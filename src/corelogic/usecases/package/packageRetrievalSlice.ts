import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../../redux/AppState";
import { Package } from "../../domain/package";

const packagesRetrievalSlice = createSlice({
  name: "packageRetrieval",
  initialState: {
    packages: null,
    fetching: false,
    error: null
  } as AppState["packageRetrieval"],
  reducers: {
    retrieveAllPackages: (
      state,
      action: PayloadAction<{ criteria: string }>
    ) => ({ ...state, fetching: true, error: null, packages: null }),
    packagesRetrieved: (
      state,
      action: PayloadAction<{ packages: Package[] }>
    ) => ({
      ...state,
      fetching: false,
      packages: [...action.payload.packages]
    }),
    errorOccurred: (state, action: PayloadAction<{ error: Error }>) => ({
      ...state,
      fetching: false,
      error: action.payload.error
    })
  }
});

export const packageRetrieval = packagesRetrievalSlice.reducer;

export const {
  retrieveAllPackages: retrieveAllPackagesAction,
  packagesRetrieved: packagesRetrievedAction,
  errorOccurred: errorOccurredAction
} = packagesRetrievalSlice.actions;
