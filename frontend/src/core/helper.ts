export function ObjectMap<T>(v: T) {
    const values = (Object.keys(v) as Array<keyof typeof v>).reduce((accumulator, current) => {
        accumulator.push(v[current]);
        return accumulator;
    }, [] as (typeof v[keyof typeof v])[])
    return values
}
