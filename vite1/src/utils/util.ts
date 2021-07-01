export function stringify<T>(value: T): string {
    try {
        return JSON.stringify(value)
    } catch (e) {
        return ""
    }
}

export function parse<T>(value: string | null): T | null {
    try {
        return value ? JSON.parse(value) : null
    } catch (e) {
        return null
    }
}