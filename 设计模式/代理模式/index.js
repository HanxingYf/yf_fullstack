var proxyAdd = (function() {
    var cache = [];

    return function() {
        var arg = [].slice.call(arguments).join(',');
        
        // 如果有，则直接从缓存返回
        if (cache[arg]) {
            return cache[arg];
        } else {
            var ret = add.apply(this, arguments);
            return ret; 
        }
    };
})();