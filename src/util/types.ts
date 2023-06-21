export type Method = 'GET';

export type ExtractRouteParams<T extends string> = string extends T
	? Record<string, number | string | undefined>
	: T extends `${string}:${infer Param}/${infer Rest}`
	? { [k in Param | keyof ExtractRouteParams<Rest>]: number | string }
	: T extends `${string}:${infer Param}`
	? { [k in Param]: number | string }
	: {};
