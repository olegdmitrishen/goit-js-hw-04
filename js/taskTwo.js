'use strict';

const inventory = {
	items: ['Knife', 'Gas mask bind', 'Gas mask call', 'Gas mask apply'],
	add(itemName) {
		console.log(`Adding ${itemName} to inventory`);
		this.items.push(itemName);
	},
	remove(itemName) {
		console.log(`Removing ${itemName} from inventory`);
		this.items = this.items.filter(item => item !== itemName);
	}
};

const invokeInventoryActionBind = function (itemName, action) {
	console.log(`Invoking action on ${itemName}`);
	const makeAction = action.bind(inventory);
	makeAction(itemName);
};

const invokeInventoryActionCall = function (itemName, action) {
	console.log(`Invoking action on ${itemName}`);
	action.call(inventory, itemName);
};

const invokeInventoryActionApply = function (itemName, action) {
	console.log(`Invoking action on ${itemName}`);
	action.apply(inventory, [itemName]);
};

console.log(inventory.items);
invokeInventoryActionBind('Medkit bind', inventory.add);
invokeInventoryActionCall('Medkit call', inventory.add);
invokeInventoryActionApply('Medkit apply', inventory.add);

console.log(inventory.items);
invokeInventoryActionBind('Gas mask bind', inventory.remove);
invokeInventoryActionCall('Gas mask call', inventory.remove);
invokeInventoryActionApply('Gas mask apply', inventory.remove);

console.log(inventory.items);
