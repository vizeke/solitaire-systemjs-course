var normalize = System.normalize;
System.normalize = function(name, parentName, parentAddress){
    
    console.log('normalize: ', JSON.stringify({
        name: name,
        parentName: parentName,
        parentAddress: parentAddress
        }));
    
    return normalize.call(this, name, parentName, parentAddress);
};

var systemLocate = System.locate;
System.locate = function (load) {
     console.log('locating: ', JSON.stringify({load: load}));
    
    return systemLocate.call(this, load);
};

/*
 * load.name: the canonical module name
 * load.address: the URL returned from locate
 * load.metadata: the same metadata object by reference, which
 *   can be modified
 */
var systemFetch = System.fetch;
System.fetch = function (load) {
    console.log('fecthing: ', JSON.stringify({load: load}));
    
    return systemFetch.call(this, load);
};

/*
 * load.name
 * load.address
 * load.metadata
 * load.source: the fetched source
 */
var systemTranslate = System.translate;
System.translate = function (load) {
    console.log('translating: ', JSON.stringify({load: load}));
    
    return systemTranslate.call(this, load);
};

/*
 * load identical to previous hooks, but load.source
 * is now the translated source
 */
var systemInstantiate = System.instantiate;
System.instantiate = function (load) {
    console.log('instantiating: ', JSON.stringify({load: load}));
    
    return systemInstantiate.call(this, load);
};