<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinginputtext">Input Text</router-link> |
    <router-link to="/databindinginputnumber">Input Number</router-link> |
    <router-link to="/databindingtextarea">Textarea</router-link> |
    <router-link to="/databindingselect">Select</router-link> |
    <router-link to="/databindingcheckbox">CheckBox</router-link> |
    <router-link to="/databindingcheckbox2">CheckBox2</router-link> |
    <router-link to="/databindingtset">Test</router-link> |
    <router-link to="/databindingattribue">Img</router-link> |
    <router-link to="/databindingbutton">Button</router-link> |
    <router-link to="/databindingclass">Class</router-link> |
    <router-link to="/databindingclass2">Class2</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
