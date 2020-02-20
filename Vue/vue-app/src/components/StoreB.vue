<template>
    <div>
        <h2>StoreB组件</h2>
        <p>用this.$store. commit/dispatch</p>
        <p>{{this.$store.state.name}} {{this.$store.state.age}}</p>
        <p>{{this.$store.getters.person}}</p>
    </div>
</template>