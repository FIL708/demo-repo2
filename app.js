let customerList = []
const addCustomerToList = (customerName) => {
    customerList.push(customerName)
}

const deleteLastCustomer = () => {
    customerList.pop()
}