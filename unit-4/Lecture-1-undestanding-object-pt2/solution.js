function makeAmazonCart(userAccount) {
    return {
        userAccount,
        items: [],
        addItem(itemName, price) {
            this.items.push({itemName, price});
            return `${itemName} added to the cart`
        },
        removeItem(itemName) {
            const indexToRemove = this.items.findIndex(item => item.itemName === itemName);
            if (indexToRemove >= 0) {
                if(target !== -1){ 
                this.contacts.splice(target,1)
            }
        },
        getTotal() {
            return this.items.reduce((total, item) => total + item.price, 0)
        },
        getItemList() {
            return this.items.map(item => item.itemName)
        },
        removeMostExpensiveItem() {
            this.items.sort((a, b) => a.price < b.price ? -1 : 1)
            this.items.pop();
        }
    }
}

const cart = makeAmazonCart("Gonzalo");
console.log(cart);
cart.addItem("Mechanical Keyboard", 26.99);
cart.addItem("Large Mouse Pad", 10);
cart.addItem("Gaming Mouse", 8.5);
cart.addItem("Office chair", 160);
cart.addItem("Clock", 10);

console.log(cart.items);
console.log(cart.getTotal());

cart.removeItem("Clock")
cart.removeMostExpensiveItem()
console.log(cart);
