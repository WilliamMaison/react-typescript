import { Observable, of, throwError } from "rxjs";
import { Package } from "../../corelogic/domain/package";
import { PackageGateway } from "../../corelogic/ports/PackageGateway";

export class InMemoryPackageGateway implements PackageGateway {
  private _error: Error | null = null;
  private _packages: Package[] = [];

  search(criteria: string): Observable<Package[]> {
    if (this._error) {
      return throwError(() => this._error);
    }
    return of(this._packages);
  }

  set error(error: Error) {
    this._error = error;
  }

  set packages(packages: Package[]) {
    this._packages = packages;
  }
}
