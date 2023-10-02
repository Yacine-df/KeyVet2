import {ref, watch} from 'vue';
export function useStorage(storageKey, value = 'dark'){

let storedValue = localStorage.getItem(storageKey);

if (storedValue) {
    
    value = ref(storedValue);

}else{

    value = ref(value);

}
watch(value,()=>{

    writeInLocalStorage();

});

function writeInLocalStorage(){

    localStorage.setItem(storageKey, value.value);

}

return value;

}