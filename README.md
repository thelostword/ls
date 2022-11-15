<!--
 * @Author: losting
 * @Date: 2022-04-01 17:48:54
 * @LastEditTime: 2022-11-15 12:48:30
 * @LastEditors: thelostword
 * @Description: 
 * @FilePath: \ls\README.md
-->
# ls
简单封装的带过期时间的 localStorage 方法

## Usage
### es module
``` JavaScript
import * as ls from '@losting/ls';

ls.set('name', 'admin');
ls.set('password', '12345678', {
  expires: 1000 * 60 * 60 * 24 * 7,
  encrypt: true,
});

```

### UMD
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>example</title>
  <script src="https://unpkg.com/crypto-js@4.1.1/crypto-js.js"></script>
  <script src="https://unpkg.com/@losting/ls@2.0.1/dist/ls.iife.js"></script>
  <!-- or
  <script src="https://unpkg.com/@losting/ls@2.0.1/dist/ls.umd.js"></script> -->
</head>
<body>
  <div id="app"></div>
  <script>
    $ls.set('key', 'value');
    // ...
  </script>
</body>
</html>
```


### customConfig
``` JavaScript
import { customConfig } from '@losting/ls';

customConfig({
  prefix: 'EXAMPLE_', // 前缀
  secret: '01221ecd' // AES密钥
});

```

### set
``` JavaScript
import { set } from '@losting/ls';

set('key', 'value');
// or
set('key', 'value', {
  type: 'localStorage', // 'localStorage' | 'sessionStorage',
  expires: 0, // number, 保存时间，30min => 1000 * 60 *30
  encrypt: false, // boolean, 是否加密
});
// or
set('key', {
  value: 'value',
  type: 'localStorage', // 'localStorage' | 'sessionStorage',
  expires: 0, // number,
  encrypt: false, // boolean,
});

```

### get
``` JavaScript
import { get } from '@losting/ls';

const value = get('key');
// or
const value = get('key', {
  type: 'localStorage', // 'localStorage' | 'sessionStorage',
  isRaw: false, // boolean, 为true时将返回全部，适用于想要拿过期时间等做自定义处理的场景
});

// 在过期前5分钟时做些事情
const getStoreData = () => {
  const store = get('store', { isRaw: true });
  if (store.expires - Date.now() <= 1000 * 60 * 5) {
    // do something
  }
  return store.value;
}

```

### remove
``` JavaScript
import { remove } from '@losting/ls';

remove('key');

// 指定类型
remove('key', 'localStorage');
// or
remove('key', {
  type: 'localStorage',
});

```

### clear
``` JavaScript
import { clear } from '@losting/ls';

clear();
// 指定类型
clear('localStorage');
```
