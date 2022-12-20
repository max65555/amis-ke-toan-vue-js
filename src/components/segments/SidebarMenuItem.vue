<template>
  <button class="sidebar__menu--item" :class="{'sidebar__menu-item-selected':isSelected}" @click="SelectThisMenuItem">
      <div class="sidebar__item--icon" :style="backgroundPosition">
      </div>
      <div class="sidebar__item--label">
          <span class="sidebar__item--label-text">
              {{ menuName }}
          </span>
      </div>
      <div class="sidebar__item-tool-tip display_none">{{ menuName }}
      </div>
  </button>
</template>

<script>
export default {
  name: "SidebarMenuItem",
  props: {
    menuName: {
      type:String,
      require:true
    },
    backgroundPosition: {
        type: String,
        require:true,
    },
    ChangeBack: {
      type:Function
    }
  },
  data() {
    return {
      isSelected: false
    } 
  },
  methods: {
    /**
     * add class to  selected component
     * Author: Toanlk (20/12/2022)
     */
    SelectThisMenuItem: function () { 
      // this.ChangeBack();
      // console.log(this.menuName);
      this.setFalseToIsSelectedAllSideBarMenu();
      this.isSelected = true; 
      https://github.com/akahon/vue-sidebar-menu-akahon?ref=vuejsexamples.com
    },
    /**
     * set false to isSelected of all sidebar menu
     * Author: Toanlk (20/12/2022)
     */
    setFalseToIsSelectedAllSideBarMenu() { 
      console.log(isSelected);
    }
  }
}
</script>

<style scoped>
  .sidebar__menu--item { 
    height: 42px;
    display: flex;
    align-items: center;
    padding: 0 14px;
    cursor: pointer;
    position: relative;
  }
  .sidebar__menu-item-selected{
    box-sizing: border-box;
    padding-left:calc(14px - 6px) !important;
    border-left:6px solid #2ca01c;
  }
  .sidebar__menu-item-selected .sidebar__item--label-text{
    font-weight: 600;
  }

  .sidebar__item--icon {
    width: 24px;
    height: 24px;
    background: url(../../assets/images/icon.svg) no-repeat;
    /* background-position: -30px -1628px; */
    margin-right: 8px;
  }
  .sidebar__item--label {
  }
  .sidebar__item--label-text {
    user-select: none;
    color: white;
  }
  .sidebar__item-tool-tip{
    position: absolute;
    left: calc(100% + 8px) ;
    /* width:94px; */
    padding:0 12px;
    height: 40px;
    background-color:var(--sidebar-color) ;
    top: 50%;
    transform: translateY(-50%);
    bottom:0;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 94%;
    color:#FFFFFF;
    text-align: center;
    z-index: 10001;
  }
  .sidebar__item-tool-tip::before{
    content: ""; 
    background-color:var(--sidebar-color);
    width:7px;
    height:7px;
    right:calc(100% - 3.5px);
    transform: rotate(45deg);
    position: absolute;
  }

  .sidebar__menu--item:hover {
    background-color: #58595d;
  }
</style>