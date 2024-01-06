const {InventoryItem,User} = require("../mongo_connection/imsSchema");


exports.createInventory = async (req, res) => {
    try {
        let newItem = new InventoryItem(req.body);
        await newItem.save();
        res.send({ status: 200, mssg: "Inventory item created successfully.3" })
    } catch (error) {
        console.error(error.message);
        res.send({ status: 500, mssg: "Server Error" })
    }
}

exports.readInventory = async (req, res) => {
    try {
        let inventoryItems = await InventoryItem.find()
        res.send({ status: 200, mssg: inventoryItems })
    } catch (error) {
        console.error(error.message);
        res.send({ status: 500, mssg: "Server Error" })
    }
}

exports.updateInventory = async (req, res) => {
    try {
        const id = req.params.id;
        await InventoryItem.findByIdAndUpdate(id, req.body, { new: true });
        res.send({ status: 200, mssg: "Inventory item updated successfully." })
    } catch (error) {
        console.error(error.message);
        res.send({ status: 500, mssg: "Server Error" })
    }
}

exports.deleteInventory = async (req, res) => {
    try {
        const id = req.params.id
        const delInv = await InventoryItem.findByIdAndDelete(id);
        if (delInv) {
            res.send({ status: 200, mssg: "Inventory deleted successfully." })
        } else {
            res.send({ status: 404, mssg: "Inventory item does not exist." })
        }
    } catch (error) {
        console.error(error.message);
        res.send({ status: 500, mssg: "Server Error" })
    }
}

exports.inventoryItemSearch = async (req, res) => {
    const { name, category } = req.query;

    try {
        let query = {};
        if (name) {
            query.name = { $regex: new RegExp(name, 'i') }; // Case-insensitive search
        }
        if (category) {
            query.category = { $regex: new RegExp(category, 'i') };
        }
        // Perform the search based on the constructed query
        const items = await InventoryItem.find(query);
        if (items.length) {
            res.send({ status: 200, mssg: items })
        }else{
            res.send({ status: 404, mssg: "Inventory item not found." })
        }
    } catch (error) {
        console.error(error.message);
        res.send({ status: 500, mssg: "Server Error" })
    }
}