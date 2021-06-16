var outJSON = [
    {"no":1,"locationTransaction": "FIT HUB SUNTER ALTIRA","totalAmount": 3000},
    {"no":2,"locationTransaction": "FIT HUB SUNTER ALTIRA","totalAmount": 3000},
    {"no":3,"locationTransaction": "FIT HUB PANCORAN","totalAmount": 3000},
    {"no":4,"locationTransaction": "FIT HUB BENHIL","totalAmount": 3000},
    {"no":5,"locationTransaction": "FIT HUB SUNTER ALTIRA","totalAmount": 3000},
    {"no":6,"locationTransaction": "FIT HUB ARTERI PONDOK INDAH","totalAmount": 3000},
    {"no":7,"locationTransaction": "FIT HUB BENHIL","totalAmount": 3000},
    {"no":8,"locationTransaction": "FIT HUB PANCORAN","totalAmount": 3000},
    {"no":9,"locationTransaction": "FIT HUB BENHIL","totalAmount": 3000},
    {"no":10,"locationTransaction": "FIT HUB BENHIL","totalAmount": 3000} 
]


var result = outJSON.reduce(function(res, obj) {
    if (!(obj.locationTransaction in res))
        res.__array.push(res[obj.locationTransaction] = obj);
    else {
        res[obj.locationTransaction].totalAmount += obj.totalAmount;
    }
    return res;
}, {__array:[]}).__array.sort(function(a,b) { return b.totalAmount });

    console.log(result)