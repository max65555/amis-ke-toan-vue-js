<template>
      <div class="radio__container">
          <div class="radio__label">
              <span class="radio__label-text">
                  {{label}}
              </span>
          </div>
          <div class="radio__input">
              <div class="radio__item" v-for="(item,key) in radioItem" :key="key">
                  <input type="radio" name="gender" id=""
                      class=radio__item__check-box :value="item.value">
                  <span class="radio__item__text">{{ item.key }}</span>
              </div>
          </div>
      </div>
</template>

<script>
export default {
  name: "MainRadio",
  props: {
    label: {
      type: String,
      default:'label Name',
      required:true
    },
    radioID: {
      type: String,
      default: "",
      required:true
    },
    radioItem: {
      type: Array,
      default:() => [],
      required:true
    }

  }
}
</script>

<style scoped>
.radio__container{
  width:fit-content;
}
.radio__label-text{
  color:#1F1F1F;
  font-weight:500;
  width:fit-content;

}
.radio__input {
  padding-top:16px;
  display: flex;
  align-items: center;
  width:fit-content;

}
.addition__header--select-position {
  padding: 0 13px;
  display: flex;
  align-items: center;
}
.radio__item {
  display: flex;
  align-items: center;
  margin-right: 40px;
}
.radio__item__text {
  padding-left:8px;
  color:#212121;
}
.radio__item__check-box {
  width: 20px;
  height: 20px;
}
input[radio] {
  color:#666666;
}
</style>