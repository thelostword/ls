<!--
 * @Author: losting
 * @Date: 2022-04-01 17:48:54
 * @LastEditTime: 2022-05-27 17:36:19
 * @LastEditors: losting
 * @Description: 
 * @FilePath: \ls\README.md
-->
# ls
简单封装的带过期时间的 localStorage 方法

### Usage
``` JavaScript
import ls, { get, set, remove, clear } from '@losting/ls';

ls.set('name', 'admin');
ls.set('token', 'iiuru3r-3qfa832-3238feaoi', 7 * 24 * 60 * 60 * 1000);
ls.get('name');
ls.remove('name');
ls.clear();
```
