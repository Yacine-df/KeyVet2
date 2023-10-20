import {reactive, watch} from 'vue';
export let shoppingCard  = reactive({

//state(data)
    order:{
        products: [],
        total: 0,
        discount :10
    },
//Actions(methods)
    addToCard(product){
        //check whether a product is added to the list or not
        if (! this.order.products.includes(product)) {

            product.qty = 1;

            this.order.products.push(product);
            alert('Product added successfully');
        }else{

            alert("already added");

        }
    },
    //remove a product from the card
    removeFromCard(index){
        this.order.products.splice(index, 1);
    },
   
})
//this funtion watch any changes in products array (adding or deleting , new qty)
// it will calcultate the sum of the total products
    const order = shoppingCard.order;

    watch(order,()=>{
  
        let sum = 0;

        order.products.forEach(product=>{

            sum += parseInt(product.qty) * product.price;
            
        });

        if(order.discount){

            sum = (sum * order.discount)/100;

        }

        order.total = sum;

    },{deep:true});