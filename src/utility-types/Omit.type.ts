/**
 * Author: Amir Saleem
 * Topic: Omit type in Typescript
 * Syntax: Omit<T, K extends string | number | symbol>
 * Description: Construct a type with the properties of T except for those in type K
 * Reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
 */

/** Car Interface */
interface Car {
    modelId: number;
    versionId: number
    name: string;
    type: string;
    colour: string;
    year: string;
}

/** 
 * Filters available to search for a car  
 * Here, we have used Omit type to Remove the modelId
 * and versionId keys from the Car interface. As these
 * will not be handled by the search method. 
 * 
 * You can pass a Union Type as the second argument to Omit
 * multiple keys from the interface
 */
export type CarFilters = Omit<Car, "modelId" | "versionId">;

/**
 * SearchCar method uses CarFilters interface. It applies
 * Partial type to CarFilters to make all values of CarFilters
 * to be optional. We have read about Partial in our previous topic.
 */
const SearchCar = (filters: Partial<CarFilters>) => {
    //... some searching logic
    return true;
}

SearchCar({ name: "Toyota" });
SearchCar({ name: "Hyundai", type: "fuel" });
