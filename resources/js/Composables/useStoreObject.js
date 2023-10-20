import {ref, watch} from 'vue';
import { shoppingCard } from '../Stores/ShoppingCardStore';
export function useStoreObject(storageKey, value = null){

let storedValue = JSON.parse(localStorage.getItem(storageKey));

if (storedValue) {

    value = ref(storedValue);

}else{

    value = ref(value)

    writeInLocalStorage(value);
    
}
watch(shoppingCard.order,()=>{
    
    writeInLocalStorage(shoppingCard.order);
    

},{ deep:true });

function writeInLocalStorage(value){

    localStorage.setItem(storageKey, JSON.stringify(value.value));

}

return value.value;

}