Удобная обертка для работы с библиотекой Битрикс js без колбеков

## Установка библиотеки

```nodejs
npm i @despane/bx24-nuxt
```

## Использование

### 1. Создаем плагин в Nuxt
```ts
// plugins/bitrix.ts

import {initBX24} from "@despane/bx24-nuxt";
export default defineNuxtPlugin({
	name: 'bitrix',
	async setup(){
		const BX24 = await initBX24()
		return {
			provide: {
				BX24
			}
		}
	}
})
```
### 2. Используем в приложении

```ts
// app.vue

<script setup lang="ts">
import {BitrixWrapper} from "@despane/bx24-nuxt";

const {$BX24} = useNuxtApp()
const bx = new BitrixWrapper($BX24)

onMounted(async() => {
  const userId = await bx.callMethod('user.current')
  console.log(userId)
})
</script>
```
### 3. Добавить для удобства

```ts
// nuxt.config.ts
export default defineNuxtConfig({
	ssr: false,
	nitro: {
		preset: 'static',
	},
	app: {
		cdnURL: './',
	},
})
```
```js
// package.json
"scripts": {
	"bitrix": "nuxt generate && rm bitrix.zip && cd .output/public && zip -r ../../bitrix.zip ./* && cd ../../"
}
```


