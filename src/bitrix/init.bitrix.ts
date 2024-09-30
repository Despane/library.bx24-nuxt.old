import type {BX24} from "../types/index"
import {MockBX24} from "./mock.bitrix"

export function initBX24(): Promise<BX24>{
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = '//api.bitrix24.com/api/v1/'
		script.async = true
		script.onload = () => {
			if (typeof window !== 'undefined' && window.BX24) {
				const BX24 = window.BX24
				BX24.init(() => {
					console.log('Библиотека Bitrix24 загружена')
				})
				resolve(BX24)
			} else {
				const BX24: BX24 = new MockBX24()
				BX24.init(() => {
					console.log('Замокано!!! Приложение работает без библиотеки Bitrix24')
				})
				resolve(BX24)
			}
		}
		document.head.appendChild(script)
	})
}