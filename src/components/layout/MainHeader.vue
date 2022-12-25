<template>
  <div class="header">
    <div class="header__left-side">
        <!-- <div class="header__left-side-menu-container">
            <div class="header-left-side__menu-button">
            </div>
        </div> -->
        <span class="header-left-side__text">
            CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUY PHÚC
        </span>
        <div class="header__left-side-menu-container">
            <div class="header-left-side__down-button">
            </div>
        </div>
    </div>
    <div class="header__right-side">
        <div class="header__right-side-function">
            <div class="header__right-side-bell">
            </div>
        </div>
        <div class="header__right-side--acount">
            <div class="header__account-pic">
            </div>
            <span class="header__account-username">Nguyễn Văn Mạnh</span>
            <div class="header__account-down-button"></div>
        </div>
    </div>
  </div> 
</template>
<script>
export default {
  name: "MainHeader",

}
</script>

<style scoped>
  .header {
  width: 100%;
  height: 56px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/* --left side */
.header__left-side-menu-container {
  height: 56px;
  min-width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
#menu-btn {
  position: absolute;
  left: 100%;
}
.menu-btn--scale-down {
  left: 0;
  right: 0;
  background-color: transparent;
}
.header__left-side {
  display: flex;
  margin-left: 44px;
  align-items: center;
}
.header-left-side__menu-button {
  width: 24px;
  height: 24px;
  margin: 0 10px;
  background: url(../../assets/images/icon.svg) no-repeat -843px -30px;
}
.header-left-side__text {
  font-weight: 600;
  margin-left: 10px;
}
.header-left-side__down-button {
  width: 24px;
  height: 24px;
  transform: rotate(90deg);
  background: url(../../assets/images/icon.svg) no-repeat -76px -357px;
}
/* --right size */
.header__right-side {
  padding-right: 20px;
  display: flex;
  align-items: center;
}

.header__right-side-function {
  width: 44px;
  height: 48px;
  display: flex;
  align-items: center;
}

.header__right-side-bell {
  background: url(../../assets/images/icon.svg) no-repeat -256px -29px;
  width: 24px;
  height: 24px;
}
.header__right-side--acount {
  display: flex;
  align-items: center;
}
.header__account-pic {
  background: url(../../assets/images/icon.svg) no-repeat -352px -894px;
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 50%;
  border-radius: 1px solid #e0e0e0;
  margin-right: 6px;
}
.header__account-username {
}
.header__account-down-button {
  width: 24px;
  height: 24px;
  background: url(../../assets/images/icon.svg) no-repeat -1071px -28px;
}

</style>