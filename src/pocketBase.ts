import { TypedPocketBase } from "./pocketbase-types";
import PocketBase from "pocketbase";

export const POCKETBASE_BASE_URL = "https://insights-navigation.pockethost.io/";

export const pb: TypedPocketBase = new PocketBase(POCKETBASE_BASE_URL)


type ValidValueTypes = string | number | Date | boolean

export class Query<T>{
    query: string = "";

    /** attribute != "value" */
    notEqual(attribute: keyof T, values: ValidValueTypes[]){
        this.query += pbQuerryAttributeNotEquals(String(attribute), values);
        return this;
    }
    
    /** attribute == "value" */
    equal(attribute: keyof T, value: ValidValueTypes[]){
        this.query += pbQuerryAttributeEquals(String(attribute), value);
        return this;
    }

    /** attribute > "value" */
    biggerThan(attribute: keyof T, value: ValidValueTypes){
        this.query += ` && ${String(attribute)} > "${value}"`;
        return this;
    }

    /** attribute < "value" */
    smallerThan(attribute: keyof T, value: ValidValueTypes){
        this.query += ` && ${String(attribute)} < "${value}"`;
        return this;
    }

    /** attribute >= "value" */
    biggerOrEqualThan(attribute: keyof T, value: ValidValueTypes){
        this.query += ` && ${String(attribute)} >= "${value}"`;
        return this;
    }

    /** attribute <= "value" */
    smallerOrEqualThan(attribute: keyof T, value: ValidValueTypes){
        this.query += ` && ${String(attribute)} <= "${value}"`;
        return this;
    }

    addCustomeQuerry(querry: string){
        this.query += ` && ${querry}`;
        return this;
    }

    build(){
        this.query = this.query.startsWith(" && ") ? this.query.substring(4) : this.query;
        return this.query;
    }

}


/** Create Query to exclude -> ${attribute} != "${value} */
export function pbQuerryAttributeNotEquals(attribute: string, values: any[]){
    return values.reduce((query, value) => {
        return `${query} && ${attribute} != "${String(value)}"`
    }, "")
}

/** Create Query to include -> ${attribute} == "${value}" */
export function pbQuerryAttributeEquals(attribute: string, values: any[]){
    return values.reduce((query, value) => {
        return `${query} && ${attribute} == "${String(value)}"`
    }, "")
}
