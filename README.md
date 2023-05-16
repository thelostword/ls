# ls
易用的localStorage

## Usage
```sh
npm install @losting/ls

```

### ES Module
``` JavaScript
import * as ls from '@losting/ls';

// 直接设置
set('name', 'admin');

...
// json对象格式
const data = {
  name: '张三',
  password: '12345678',
}
set('data', data);

// 设置过期时间和简单加密
set('password', '12345678', {
  expires: 1000 * 60 * 60 * 24 * 7,
  encrypt: true,
});

```

### CDN
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>example page</title>
  <script src="https://unpkg.com/@losting/ls@3.0.0/dist/ls.iife.js"></script>
</head>
<body>
  <div id="app"></div>
  <script>
    window.$ls.set('key', 'value');
    // ...
  </script>
</body>
</html>
```


### 设置key前缀
``` JavaScript
import { setPrefix } from '@losting/ls';

// setPrefix(prefix: string)
setPrefix('__EXAMPLE_');

```

### set
``` JavaScript
import { set } from '@losting/ls';

// set(key: string, value: any, option?: { expires?: number, encrypt?: boolean })
set('key', 'value');
// or
set('key', 'value', {
  expires: 0, // 过期时间， 0或undefined表示不过期。3000表示3秒后过期
  encrypt: false, // 是否加密
});

```

### get
``` JavaScript
import { get } from '@losting/ls';

// get(key: string, isRaw: boolean)
const value = get('key');

// 过期前5分钟做些事情
const getStoreData = () => {
  const store = get('store', true);
  if (store.expires - Date.now() <= 1000 * 60 * 5) {
    // do something
  }
  return store.value;
}

```

### remove
``` JavaScript
import { remove } from '@losting/ls';

// remove(key: string)
remove('key');

```

### clear
``` JavaScript
import { clear } from '@losting/ls';

clear();
```
