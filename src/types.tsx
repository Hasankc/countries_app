
export type  Country = {
name: {
    common: string

}
    Language: {
        [key: string]: string
    }
    flags: {
        png: string

    }
    region: string
    population: number
    capital: string[]
}