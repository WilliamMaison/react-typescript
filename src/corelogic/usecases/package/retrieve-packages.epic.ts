import { StateObservable } from "redux-observable";
import { catchError, filter, map, Observable, of, switchMap } from "rxjs";
import { AppState } from "../../../redux/AppState";
import { Dependencies } from "../../../redux/store";
import {
  errorOccurredAction,
  packagesRetrievedAction,
  retrieveAllPackagesAction
} from "./packageRetrievalSlice";

export const retrievePackagesEpic = (
  action$: Observable<
    | ReturnType<typeof retrieveAllPackagesAction>
    | ReturnType<typeof packagesRetrievedAction>
    | ReturnType<typeof errorOccurredAction>
  >,
  state$: StateObservable<AppState>,
  { packageGateway }: Partial<Dependencies>
) => {
  return action$.pipe(
    filter(retrieveAllPackagesAction.match),
    switchMap((action) =>
      packageGateway!.search(action.payload.criteria).pipe(
        map((packages) => packagesRetrievedAction({ packages })),
        catchError((error) => of(errorOccurredAction({ error })))
      )
    )
  );
};
