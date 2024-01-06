const { InventoryItem } = require("../mongo_connection/imsSchema");


exports.totalItems = async (req, res) => {
    try {
        const totalItems = await InventoryItem.countDocuments();
        res.send({ status: 200, mssg: totalItems })
    } catch (error) {
        console.error(error.message);
        res.send({ status: 500, mssg: "Server Error" })
    }
}

exports.averagePrice = async (req, res) => {
    try {
        const result = await InventoryItem.aggregate([
            {
                $group: {
                    _id: null,
                    averagePrice: { $avg: '$price' },
                },
            },
        ]);
        const averagePrice = result.length > 0 ? result[0].averagePrice : 0;
        res.send({ status: 200, mssg: averagePrice })
    } catch (error) {
        console.error(error.message);
        res.send({ status: 500, mssg: "Server Error" })
    }

}

exports.categoriesDistribution = async (req, res) => {
    try {
        const result = await InventoryItem.aggregate([
            {
                $group: {
                    _id: '$category',
                    count: { $sum: 1 },
                },
            },
            {
                $project: {
                    category: '$_id',
                    count: 1,
                    _id: 0,
                },
            },
        ]);
        res.send({ status: 200, mssg: result })
    } catch (error) {
        console.error(error.message);
        res.send({ status: 500, mssg: "Server Error" })
    }

}