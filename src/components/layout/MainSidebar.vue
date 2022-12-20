<template>
     <div class="sidebar">
        <div id="menu-btn" class="header__left-side-menu-container">
            <div class="header-left-side__menu-button">
            </div>
        </div>
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
            <div class="sidebar__menu-list">
                <sidebar-menu-item menuName="Tổng quát" backgroundPosition="background-position: -30px -1628px" :ChangeBack="ChangeBack"></sidebar-menu-item>
                <sidebar-menu-item menuName="Tiền mặt" backgroundPosition="background-position:-73px -1628px;"></sidebar-menu-item>
                <sidebar-menu-item menuName="Tiền gửi" backgroundPosition="background-position:-117px -1628px;"></sidebar-menu-item>
                <sidebar-menu-item menuName=" Mua hàng" backgroundPosition="background-position:-161px -1628px;"></sidebar-menu-item> <sidebar-menu-item menuName="Bán hàng" backgroundPosition="background-position:-204px -1628px"></sidebar-menu-item> <sidebar-menu-item menuName=" Quản lý đơn hàng" backgroundPosition="background-position:-249px -1628px"></sidebar-menu-item> <sidebar-menu-item menuName="Kho" backgroundPosition="background-position:-291px -1628px"></sidebar-menu-item> <sidebar-menu-item menuName="Công cụ dụng cụ" backgroundPosition="background-position:-336px -1628px"></sidebar-menu-item> <sidebar-menu-item menuName=" Tài sản cố định" backgroundPosition="background-position:-378px -1630px"></sidebar-menu-item> <sidebar-menu-item menuName="Tiền lương" backgroundPosition="background-position:-467px -1628px"></sidebar-menu-item> <sidebar-menu-item menuName="Thuế" backgroundPosition="background-position:-423px -1630px"></sidebar-menu-item> <sidebar-menu-item menuName="Giá Thành" backgroundPosition="background-position:-467px -1628px"></sidebar-menu-item> <sidebar-menu-item menuName="Ngân sách" backgroundPosition="background-position:-378px -1659px"></sidebar-menu-item> <sidebar-menu-item menuName="Báo cáo" backgroundPosition="background-position:-547px -1628px"></sidebar-menu-item> <sidebar-menu-item menuName=" Phân tích tài chính" backgroundPosition="background-position:-204px -1664px"></sidebar-menu-item> <sidebar-menu-item menuName=" Giá Thành" backgroundPosition="background-position:-467px -1628px"></sidebar-menu-item> 
            </div>    
        </div>
    </div>
</template>

<script>
import SidebarMenuItem from '../segments/SidebarMenuItem.vue';
export default {
    name: "MainSideBar",
    components: {
        SidebarMenuItem,
    },
    props: {

    },
    methods: {
        ChangeBack: function() { 
            console.log(SidebarMenuItem);
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

</style>