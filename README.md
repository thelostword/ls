<!--
 * @Author: losting
 * @Date: 2022-04-01 17:48:54
 * @LastEditTime: 2022-11-11 15:35:35
 * @LastEditors: thelostword
 * @Description: 
 * @FilePath: \ls\README.md
-->
# ls
简单封装的带过期时间的 localStorage 方法

## Usage

### es
``` JavaScript
import * as ls from '@losting/ls';
// import { get, set, remove, clear } from '@losting/ls';

ls.set('name', 'admin');
ls.set('password', '12345678', {
  expires: 1000 * 60 * 60 * 24 * 7,
  encrypt: true,
  type: 'localStorage',
});
ls.get('name');
ls.get('password', { type: 'localStorage' });
ls.remove('name');
ls.clear();
```

### umd
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>example</title>
  <script src="./dist/ls.umd.js"></script>
</head>
<body>
  <div id="app"></div>
  <script>
    $ls.set('name', 'losting');
    ...
  </script>
</body>
</html>
```
