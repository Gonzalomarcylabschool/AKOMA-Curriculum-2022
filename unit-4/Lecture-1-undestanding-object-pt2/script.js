const amazonCart = {
    shopper: "Gonzalo",
    items: [],
    addItem(itemName, price) {
        amazonCart.items.push({itemName, price})
        console.log(`${itemName} was added to your cart.`)
    },
    getTotal(){
        return this.items.reduce((total, item)=> total + item.price, 0)
    },
    removeItem(itemName) {
        const indexToRemove = this.items.findIndex(item => item.itemName === itemName);
        if (indexToRemove !== -1) {
            this.items.splice(indexToRemove, 1)
            return `${itemName} has been removed.`
        }
    },
    changeShopper(shopper){
        this.shopper = shopper;
        return `shopper have been updated to ${shopper}`
    }
}
amazonCart.addItem('chair', 180);
amazonCart.addItem("Mechanical Keyboard", 26.99);
amazonCart.addItem("Large Mouse Pad", 10);
amazonCart.addItem("Gaming Mouse", 8.5);
amazonCart.addItem("Office chair", 160);

console.log(amazonCart);
