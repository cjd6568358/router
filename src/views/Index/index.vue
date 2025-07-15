<template>
  <ul>
    <li class="category" data-title="eeprom">
      <ul>
        <li class="category" data-title="tplink">
          <ul>
            <router-link to="/tplink/eeprom/wdr7300" custom v-slot="{ navigate }">
              <li @click="navigate"><a href="/router/tplink/eeprom/wdr7300">wdr7300</a></li>
            </router-link>
            <router-link to="/tplink/eeprom/wdr8620" custom v-slot="{ navigate }">
              <li @click="navigate"><a href="/router/tplink/eeprom/wdr8620">wdr8620/mac2600r</a></li>
            </router-link>
            <router-link to="/tplink/eeprom/mw300rv6" custom v-slot="{ navigate }">
              <li @click="navigate"><a href="/router/tplink/eeprom/mw300rv6">mw300rv6</a></li>
            </router-link>
            <router-link to="/tplink/eeprom/fwr310v4" custom v-slot="{ navigate }">
              <li @click="navigate"><a href="/router/tplink/eeprom/fwr310v4">fwr310v4</a></li>
            </router-link>
          </ul>
        </li>
        <li class="category" data-title="xiaomi">
          <ul>
            <router-link to="/xiaomi/eeprom/r4a" custom v-slot="{ navigate }">
              <li @click="navigate"><a href="/router/xiaomi/eeprom/r4a">r4a</a></li>
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
        <li class="category" data-title="newifi">
          <ul>
            <router-link to="/newifi/eeprom/y1" custom v-slot="{ navigate }">
              <li @click="navigate"><a href="/router/newifi/eeprom/y1">y1</a></li>
            </router-link>
          </ul>
        </li>
      </ul>
    </li>
    <li class="category" data-title="s9xxx">
      <ul>
        <router-link to="/s9xxx/acs" custom v-slot="{ navigate }">
          <li @click="navigate"><a href="/router/s9xxx/acs">s9xxx_acs</a></li>
        </router-link>
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