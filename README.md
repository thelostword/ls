# ls
Easy localStorage

## Usage
```sh
npm install @losting/ls

```

### ES Module
``` JavaScript
import * as ls from '@losting/ls';

set('name', 'admin');

// json data
set('data', {
  name: '张三',
  password: '12345678',
});

// Set expiration time and enable simple encryption.
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


### setPrefix
``` JavaScript
import { setPrefix } from '@losting/ls';

// setPrefix(prefix: string)
setPrefix('__EXAMPLE_');

```

### set
``` JavaScript
import { set } from '@losting/ls';

// set(key: string, value: unknown, option?: { expires?: number, encrypt?: boolean })
set('key', 'value');
// or
set('key', 'value', {
  expires: 0, // 0 or undefined mean never expire. 3000 means expire after 3 seconds
  encrypt: false, // Whether to encrypt
});

```

### get
``` JavaScript
import { get } from '@losting/ls';

const value = get('key');

// use callback
const value = get('token', ({value, expires}) => {
  if (expires - Date.now() <= 1000 * 60 * 5) {
    // do something
    // return custom value
  }
  return value;
});

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
