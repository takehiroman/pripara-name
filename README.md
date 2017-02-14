# pripara-name
* プリパラのキャラ名のjson
* 自作npm作成の練習
# Usage

* キャラ名を全取得
```
var priparaName = require('pripara-name');

var all = priparaName.all

//全キャラをリストで取得
console.log(all);
```

* キャラ名をランダムで取得
```
var priparaName = require('pripara-name');

var rand = priparaName.random()

//キャラ名をランダムで取得
console.log(rand);
```
