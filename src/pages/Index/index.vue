<template>
    <h1>page {{testPiana.count}}</h1>
    <img src="../../../public/logo.svg" alt="">
</template>
<script>
import { useStore  } from '../../Store/index';
export default {
    setup(){
        const testPiana = useStore();
        return{
            testPiana
        }
    }
}
</script>