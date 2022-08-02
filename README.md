<!--
 * @Author: losting
 * @Date: 2022-04-01 17:48:54
 * @LastEditTime: 2022-08-02 12:39:48
 * @LastEditors: thelostword
 * @Description: 
 * @FilePath: \ls\README.md
-->
# ls
简单封装的带过期时间的 localStorage 方法

### Usage
``` JavaScript
import { get, set, remove, clear } from '@losting/ls';

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
