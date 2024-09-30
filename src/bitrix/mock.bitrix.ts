import {
	type BatchRequestType,
	type EventTargetType,
	type IAccessPayload,
	type IAuth,
	type BX24,
	type IPlacementInfo,
	type ISelectCRMPayload,
	type IUser,
} from "../types/index"

export class MockBX24 implements BX24 {
	init(callback?: Function): void {
		if(callback) {
			callback()
		} else {
			console.log("Init")
		}
	}
	install(callback?: Function | string): void {
		console.log('Install')
	}

	installFinish(): void {
		console.log('InstallFinish')
	}

	getAuth(): IAuth {
		console.log('GetAuth')
		return {
			access_token: '',
			expires_in: 0,
			refresh_token: '',
			domain: '',
			member_id: '',
		}
	}
	refreshAuth(callback?: Function): IAuth {
		console.log('Refresh Auth')
		return {
			access_token: '',
			expires_in: 0,
			refresh_token: '',
			domain: '',
			member_id: '',
		}
	}
	callMethod(method: string, params: any, callback?: Function): void {
		console.log('Call Method')
	}
	callBatch(calls: BatchRequestType, callback?: Function, bHaltOnError?: boolean): void {
		console.log('CallBatch')
	}

	callBind(event: string, handler: string, auth_type?: number, callback?: Function): void {
		console.log('CallBind')
	}

	callUnbind(event: string, handler: string, auth_type?: number, callback?: Function): void {
		console.log('CallBind')
	}
	userOption = {
		set: (name: string, value: any): void => {
			console.log(`User Option: set`)
		},
		get: (name: string): any => {
			console.log(`User Option: get`)
		},
	}
	appOption = {
		set: (name: string, value: any, callback?: Function): void => {
			console.log(`App Option: set`)
		},
		get: (name: string): any => {
			console.log(`App Option: get`)
		},
	}

	selectUser(callback: (res: IUser) => void): void {
		console.log('SelectUser')
	}
	selectUsers(callback: (res: IUser[]) => void): void {
		console.log('SelectUser')
	}
	selectAccess = {} as IAccessPayload
	selectCRM = {} as ISelectCRMPayload

	placement = {
		bindEvent: (event: any, callback: Function): void => {
			console.log(`placement: bindEvent`)
		},
		call: (command: any, params: any, callback: Function): void => {
			console.log('placement: call')
		},
		getInterface: (callback: Function): void => {
			callback({ interface: 'placement: getInterface' })
		},
		info: (): IPlacementInfo => {
			console.log('placement: info')
			return {
				placement: '',
				options: '',
			}
		},
	}
	isAdmin(): boolean {
		console.log('isAdmin')
		return true
	}

	getLang(): string {
		console.log('getLang')
		return ''
	}

	resizeWindow(width: number, height: number, callback?: Function): void {
		console.log('resizeWindow')
	}

	fitWindow(callback?: Function): void {
		console.log('fitWindow')
	}

	reloadWindow(): void {
		console.log('reloadWindow')
	}

	setTitle(title: string, callback?: Function): void {
		console.log('setTitle')
	}

	ready(handler: Function): void {
		console.log('ready')
	}

	isReady(): boolean {
		console.log('isReady')
		return true
	}

	proxy(func: Function, thisObject: any): any {
		console.log('proxy')
	}

	closeApplication(): void {
		console.log('closeApplication')
	}

	getDomain(): string {
		console.log('getDomain')
		return ''
	}

	openApplication(params?: any, closeCallback?: Function): void {
		console.log('openApplication')
	}

	openPath(path: string, callback?: Function): void {
		console.log('openPath')
	}
	proxyContext(): any {
		console.log('proxyContext')
	}
	scrollParentWindow(scroll: number, callback?: Function): void {
		console.log('scrollParentWindow')
	}

	bind(element: EventTargetType, event: string, handler: any): void {
		console.log('bind')
	}
	unbind(element: EventTargetType, event: string, handler: any): void {
		console.log('unbind')
	}

	getScrollSize() {
		console.log('getScrollSize')
		return { scrollWidth: 0, scrollHeight: 0 }
	}
	loadScript(script: string | string[], callback?: Function): void {
		console.log('loadScript')
	}
	im = {
		callTo: (userId: string | number, video?: boolean): void => {
			console.log('im: callTo')
		},
		phoneTo: (phone: string): void => {
			console.log('im: phoneTo')
		},
		openMessenger: (dialogId?: string): void => {
			console.log('im: openMessenger')
		},
		openHistory: (dialogId: string): void => {
			console.log('im: openHistory')
		},
	}
}
