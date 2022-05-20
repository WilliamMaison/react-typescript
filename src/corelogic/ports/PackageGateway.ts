import { Observable } from "rxjs";
import { Package } from "../domain/package";

export interface PackageGateway {
  search(criteria: string): Observable<Package[]>;
}
