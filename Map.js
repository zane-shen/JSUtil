~function(root){
  root.Map = Map || (function () {
    function Map () {
      this._map = Object.create(null)
    }

    var mp = Map.prototype;

    mp.constructor = Map;

    mp.get = function (key) {
      return this._map[key]
    };

    mp.set = function (key, val) {
      key && val && (this._map[key] = val)
    };

    mp.clear = function () {
      this._map = Object.create(null)
    };

    mp.forEach = function (cb) {
      if (Object.keys(this._map).length === 0) return;
      for (var key in this._map) {
        cb && typeof cb === 'function' && cb(this._map[key], key, this._map)
      }
    };

    mp.has = function (key) {
      return key in this._map
    };

    mp.delete = function (key) {
      return delete this._map[key]
    };

    mp.size = function () {
      return Object.keys(this._map).length
    };

    return Map;
  })();
}(window);
