import { map, Observable } from "rxjs";
import { Package } from "../../corelogic/domain/package";
import { PackageGateway } from "../../corelogic/ports/PackageGateway";
import { getQuery } from "../httpUtils";

interface PackageResponseFromApi {
  results: PackageResultFromApi[];
}

interface PackageResultFromApi {
  package: PackageFromApi;
}

interface PackageFromApi {
  name: string;
}

export class HttpAxiosPackageGateway implements PackageGateway {
  search(criteria: string): Observable<Package[]> {
    return getQuery<PackageResponseFromApi>(`search?q=${criteria}`).pipe(
      map((response) =>
        HttpAxiosPackageGateway.fromPackageFromApi(response.results)
      )
    );
  }

  private static fromPackageFromApi(
    packageResultsFromApi: PackageResultFromApi[]
  ): Package[] {
    return packageResultsFromApi.map(({ package: npmPackage }) => ({
      name: npmPackage.name
    }));
  }
}
