const getProduct = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const Add_product = ()=>{
    const productName = getProduct("Name_field");
    const productQuantity = getProduct("Quantity_field")
    console.log(productName,productQuantity);
    AddProductsToDisplayProduct(productName,productQuantity);
    SavedItemInLocalStorage(productName,productQuantity)
    // localStorage.setItem(productName,productQuantity);
}
const getShoppingCartFromLocalStorage = ()=>{
    const SavedCart = localStorage.getItem('cart');
    let cart={};
    if(SavedCart){
        cart = JSON.parse(SavedCart);
    }
    return cart;
}
const SavedItemInLocalStorage =(product,Quantity)=>{
    const Cart = getShoppingCartFromLocalStorage();
    Cart[product] = Quantity;
    const CartStringify = JSON.stringify(Cart);
    localStorage.setItem('cart', CartStringify);
}

const AddProductsToDisplayProduct = (product,Quantity)=>{
    const container = document.getElementById("Product_container");
    const LI = document.createElement('li');
    LI.innerText = `${product} : ${Quantity}`
    container.appendChild(LI);
}
const DisplayAddProduct =()=>{
    const cart = getShoppingCartFromLocalStorage();
    console.log(cart);
    for(const product in cart){
        const Quantity = cart[product];
        AddProductsToDisplayProduct(product,Quantity)
    }
}
DisplayAddProduct();