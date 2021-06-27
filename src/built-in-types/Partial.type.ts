/**
 * Author: Amir Saleem
 * Topic: Partial type in Typescript
 * Syntax: Partial<T>
 * Description: Makes all properties in T optional
 */

/** Person Interface */
interface Person {
    personId: number;
    firstname: string;
    lastname: string;
    age: number;
    mobile: string;
}

/**
 * The PersonSearchFilters type partially applies Person interface
 * All values of Person interface have become optional
 */
type PersonSearchFilters = Partial<Person>;

/* Dummy method to search a person */
const SearchPerson = (filters: PersonSearchFilters) => {
    // ... search logic code goes here
    return true;
};

/**
 * The SearchPerson method partially applies Person interface
 * this means that all values of Person are optional for SearchPerson
 */

/* get all persons where personId is 1 */
SearchPerson({ personId: 1 });
/* get all persons where firstname is John */
SearchPerson({ firstname: "John" });
