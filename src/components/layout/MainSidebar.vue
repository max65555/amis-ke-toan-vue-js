<template>
     <div class="sidebar">
        <a href="">
          <div id="menu-btn" class="header__left-side-menu-container">
            <div class="header-left-side__menu-button">
            </div>
          </div>
        </a>
        <div class="sidebar__header">
          <div class="sidebar__header--icon">
          </div>
          <div class="sidebar__header--logo">
            <img data-v-e206d9c0=""
            src="https://actappg1.misacdn.net/img/Logo_Module_TiengViet_White.66947422.svg"
            class="sidebar__header--logo-image">
          </div>
        </div>
        <div class="sidebar__menu">
          <!-- TODO: delete it -->
          <!-- <div class="sidebar__menu-list">
              <sidebar-menu-item menuName="Tổng quát" backgroundPosition="background-position:-30px -1628px" :ChangeBack="ChangeBack"></sidebar-menu-item>
              <sidebar-menu-item menuName="Tiền mặt" backgroundPosition="background-position:-73px -1628px;"></sidebar-menu-item>
              <sidebar-menu-item menuName="Tiền gửi" backgroundPosition="background-position:-117px -1628px;"></sidebar-menu-item>
              <sidebar-menu-item menuName=" mua hàng" backgroundPosition="background-position:-161px -1628px;"></sidebar-menu-item>
              <sidebar-menu-item menuName="Bán hàng" backgroundPosition="background-position:-204px -1628px"></sidebar-menu-item>
              <sidebar-menu-item menuName=" Quản lý đơn hàng" backgroundPosition="background-position:-249px -1628px"></sidebar-menu-item>
              <sidebar-menu-item menuName="Kho" backgroundPosition="background-position:-291px -1628px"></sidebar-menu-item> 
              <sidebar-menu-item menuName="Công cụ dụng cụ" backgroundPosition="background-position:-336px -1628px"></sidebar-menu-item> 
              <sidebar-menu-item menuName=" Tài sản cố định" backgroundPosition="background-position:-378px -1630px"></sidebar-menu-item> 
              <sidebar-menu-item menuName="Tiền lương" backgroundPosition="background-position:-467px -1628px"></sidebar-menu-item> 
              <sidebar-menu-item menuName="Thuế" backgroundPosition="background-position:-423px -1630px"></sidebar-menu-item> 
              <sidebar-menu-item menuName="Giá Thành" backgroundPosition="background-position:-467px -1628px"></sidebar-menu-item> 
              <sidebar-menu-item menuName="Ngân sách" backgroundPosition="background-position:-378px -1659px"></sidebar-menu-item> 
              <sidebar-menu-item menuName="Báo cáo" backgroundPosition="background-position:-547px -1628px"></sidebar-menu-item> 
              <sidebar-menu-item menuName=" Phân tích tài chính" backgroundPosition="background-position:-204px -1664px"></sidebar-menu-item> 
              <sidebar-menu-item menuName=" Giá Thành" backgroundPosition="background-position:-467px -1628px"></sidebar-menu-item>
          </div> -->
            <button class="sidebar__menu--item" v-for="(item,key) in this.menuItems" :key="key">
              <div class="sidebar__item--icon" :style="item.menuItemBackgroundPos" >
              </div>
              <div class="sidebar__item--label">
                  <span class="sidebar__item--label-text">
              {{ item.menuItemName }} 
                  </span>
              </div>
              <div class="sidebar__item-tool-tip display_none"> {{ item.menuItemName }} 
              </div>
          </button>
      </div>
    </div>
</template>

<script>
export default {
    name: "MainSideBar",
    components: {
    },
    props: {  
      
    },
    methods: {
    },
    data() {
      return { 
        menuItems: [
          {
            menuItemName: "Tổng quát",
            menuItemBackgroundPos: "background-position: -30px -1628px;",
          },
          {
            menuItemName: "Tiền mặt",
            menuItemBackgroundPos: "background-position: -73px -1628px;",
          },{
            menuItemName: "Tiền gửi",
            menuItemBackgroundPos: "background-position: -117px -1628px;",
          },{
            menuItemName: "Mua hàng",
            menuItemBackgroundPos: "background-position: -161px -1628px;",
          },{
            menuItemName: "Bán hàng",
            menuItemBackgroundPos: "background-position: -204px -1628px;",
          },{
            menuItemName: "Quản lý đơn hàng",
            menuItemBackgroundPos: "background-position: -249px -1628px;",
          },{
            menuItemName: "Kho",
            menuItemBackgroundPos: "background-position: -291px -1628px;",
          },{
            menuItemName: "Công cụ tìm kiếm",
            menuItemBackgroundPos: "background-position: -336px -1628px;",
          },{
            menuItemName: "Tài sản cố định",
            menuItemBackgroundPos: "background-position: -378px -1630px;",
          },{
            menuItemName: "Tiền lương",
            menuItemBackgroundPos: "background-position: -467px -1628px;",
          },{
            menuItemName: "Thuế",
            menuItemBackgroundPos: "background-position: -423px -1630px;",
          }
          ,{
            menuItemName: "Giá thành",
            menuItemBackgroundPos: "background-position: -467px -1628px;",
          },{
            menuItemName: "Ngân sách",
            menuItemBackgroundPos: "background-position: -378px -1659px;",
          },{
            menuItemName: "Báo cáo",
            menuItemBackgroundPos: "background-position: -547px -1628px;",
          },{
            menuItemName: " Phân tích tài chính",
            menuItemBackgroundPos: "background-position: -204px -1664px;",
          },{
            menuItemName: " Giá Thành",
            menuItemBackgroundPos: "background-position: -467px -1628px;",
          }
        ]  
      }
    }
}
</script>

<style scoped>
.sidebar {
  background-color: #393a3d;
  width: 200px;
  /* min-height: 100vh; */
  height: 100vh;
  /* max-height: 100vh; */
  /* overflow: auto; */
  position: relative;
  /* overflow-y: auto;
	overflow-x:hidden; */
}
.sidebar__header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  background-color: #393a3d;
  /* position:sticky;
	top:0; */
}
.sidebar__header--icon {
  width: 24px;
  height: 24px;
  background: url(../../assets/images/icon.svg) no-repeat -424px -86px;
  margin-right: 10px;
}
.sidebar__header--logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar__header--logo-image {
  height: 32px;
}
/* --sidebar menu */
.sidebar__menu {
  padding-top: 24px;
  overflow-y: visible;
  height: calc(100vh - 80px);
  overflow-x: visible;
}
.sidebar__menu-list{
  
/* min-height: 100vh; */
  
/* height: 100%; */
  
/* overflow-y: auto; */
}
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