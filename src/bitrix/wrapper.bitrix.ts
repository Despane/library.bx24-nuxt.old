import {BitrixBase} from "./base.bitrix"
import type {IBitrixBatch, IBitrixWrapper, IHandlerList} from "../types/index"
import {BitrixBatch} from "./batch.bitrix"

export class BitrixWrapper extends BitrixBase implements IBitrixWrapper {
	createBatch(handlerList: IHandlerList = {}, BatchClass: any = BitrixBatch): IBitrixBatch {
		return new BatchClass(this.BX24.callBatch, handlerList)
	}
	// если будешь определять мобильное приложение
	// isMobile(opts?: IsMobileOptions) {
	// 	return isMobile(opts);
	// }
}