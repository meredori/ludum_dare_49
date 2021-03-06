const data = [
    {
        "id" : 0,
        "name" : "Glimmering Potion",
        "baseCost" : [
            {
                "herbId" : 0,
                "amount" : 1
            }
        ],
        "baseFailure" : 5,
        "time" : 2,
        "count" : 0,
        "goldGain" : 1,
        "enabled" : true,
        "summary": "Creates gold from green herbs"
    },
    {
        "id" : 1,
        "name" : "Haste Potion",
        "baseCost" : [
            {
                "herbId" : 1,
                "amount" : 2
            }
        ],
        "baseFailure" : 50,
        "time" : 5,
        "count" : 0,
        "enabled" : false,
        "summary": "Increases potion speed by 25% for a short while"
    }
]

export default data;