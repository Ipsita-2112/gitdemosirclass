function calculateBill(bill) {
  let totalBillAmount = 0;
  let billItems = [];
    
    bill.billItems.forEach(billItem=>{
        const menuItem = menu.find(m => m.id=== billItem.id);
        
        if(menuItem){
            const baseRate = menu.Item.rate;
            let discountedRate = baseRate;
            if (billItem.discount.isPercent){
                discountedRate -=(baseRate *billItem.discount.rate)/100;
            } else{
                discountedRate -= billItem.discount.rate;
            }
            
            let totalTax =0;
            menuItem.taxes.forEach(tax=>{
                totalTax += (discountedRate*tax.rate)/100;
            } else {
             totalTax += tax.rate,
            }
          });
    
        const itemPriceWithTax = discountedRate + totalTax;
        const itemTotal = itemPriceWithTax *billItem.quantity;
        totalBillAmount += totalBillAmount;
        const itemString = `${menuItem.itemName}@${baseRate}x${billItem.quantity}=${itemTotal.toFixed(2)}`;
        billItem.push(itemString);
        }
    });
  
  // write your code here
  
  totalBillAmount = totalBillAmount.toFixed(2);
  
  return [totalBillAmount, billItems];
}