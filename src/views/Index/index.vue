<template>
  <ul>
    <li class="category" data-title="eeprom">
      <ul>
        <li class="category" data-title="tplink">
          <ul>
            <router-link to="/tplink/eeprom/wdr7300" custom v-slot="{ navigate }">
              <li @click="navigate"><a href="/router/tplink/eeprom/wdr7300">wdr7300</a></li>
            </router-link>
          </ul>
        </li>
        <li class="category" data-title="zte">
          <ul>
            <router-link to="/zte/eeprom/e8820v2" custom v-slot="{ navigate }">
              <li @click="navigate"><a href="/router/zte/eeprom/e8820v2">e8820v2</a></li>
            </router-link>
            <router-link to="/zte/eeprom/e8820s" custom v-slot="{ navigate }">
              <li @click="navigate"><a href="/router/zte/eeprom/e8820s">e8820s</a></li>
            </router-link>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>
<style lang="css" scoped>
ul {
  text-align: left;
}
.category {
  position: relative;
}
.category::before {
  content: attr(data-title);
}
</style>