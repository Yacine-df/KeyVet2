import { sum } from 'lodash';
import {reactive, watch} from 'vue';

export let shoppingCard  = reactive({

    //state
    products: [],
    total: 0,
    discount :10,

    //action
    addToCard(product){
        //check whether a product is added to the list or not
        if (! this.products.includes(product)) {

            product.qty = 1;

            this.products.push(product);
        }else{

            alert("already added");

        }
    },
    removeFromCard(index){
        this.products.splice(index, 1);
    }
   
})
watch(shoppingCard.products,()=>{

    let sum = 0;

    shoppingCard.products.forEach(product=>{

        sum += product.qty * product.price
        
    });

    shoppingCard.total = sum;
    console.log(shoppingCard.total);
    
});