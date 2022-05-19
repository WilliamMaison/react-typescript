import axios from "axios-observable";
import { Observable, of, switchMap } from "rxjs";

export const getQuery = <T>(url: string): Observable<T> => {
  return axios
    .get(`${process.env.REACT_APP_BASE_API_URL}/${url}`, {
      responseType: "json"
    })
    .pipe(switchMap((response) => of(response.data)));
};
