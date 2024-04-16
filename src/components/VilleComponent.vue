<template>
    <li>
        <input type="text" :value="ville" @input="$emit('update:ville', $event.target.value)">
    </li>
</template>

<script>
export default {
    props: ['ville'],
    emits: ['update:ville']
}
</script>