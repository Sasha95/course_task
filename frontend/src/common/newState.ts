export function newState<T>(obj: T, setter: Partial<T>): T {
    const newObj = {...obj};

    return Object.assign(newObj, setter);
}
