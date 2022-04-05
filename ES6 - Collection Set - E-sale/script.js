var itemList = new Set();  // DO NOT CHANGE THIS STATEMENT

var Item= class Item{ // DO NOT CHANGE THIS STATEMENT
    // Define a constructor with item properties
    // When there's a property : itemNumber, refer to the current object's itemNumber property as : this._itemNumber
    // The name of the associated getter method must be : itemNumber()
    // Getter methods for properties
   constructor (itemNumber, itemName, price, quantity)
   {
       this.itemNumber = itemNumber;
       this.itemName = itemName;
       this.price = price;
       this.quantity = quantity;
   }
};
function addItem(itemNumber,itemName,price,quantity){
    var newItem = new Item(itemNumber,itemName,price,quantity);
    itemList.add(newItem);
    // Fill the code to create Item object and add it into itemList

}

function display(){
     var totalprice = 0;
    var itemNu = document.getElementById("itemNumber").value;
    var itemNa = document.getElementById("itemName").value;
    var pri = document.getElementById("price").value;
    var quan = document.getElementById("quantity").value;
    addItem(itemNu,itemNa,pri,quan);
    document.getElementById("result1").innerHTML = `Item Number Item Name Price Quantity`+ "<br>";
    for (let item of itemList)
    {
        document.getElementById("result1").innerHTML += `${item.itemNumber} ${item.itemName} ${item.price} ${item.quantity}`+ "<br>";

        totalprice = totalprice+ (item.price*item.quantity);
    }
    document.getElementById("result2").innerHTML = totalprice;
    return false;
}