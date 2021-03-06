export class RouterMap {
	static __DecoratedRouters: Map<{ target: any, method: string, path: string }, Function | Function[]> = new Map()
}
export function router(config: { path: string, method: string }) {
	return (target: any, name: string, value: PropertyDescriptor) => {
		RouterMap.__DecoratedRouters.set({
			target: target,
			path: config.path,
			method: config.method
		}, target[name])
	}
}