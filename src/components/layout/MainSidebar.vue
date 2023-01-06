<template>
    <div class="sidebar">
        <a href="">
            <div id="menu-btn" class="header__left-side-menu-container">
                <div class="header-left-side__menu-button"></div>
            </div>
        </a>
        <div class="sidebar__header">
            <div class="sidebar__header--icon"></div>
            <div class="sidebar__header--logo">
                <img
                    data-v-e206d9c0=""
                    src="https://actappg1.misacdn.net/img/Logo_Module_TiengViet_White.66947422.svg"
                    class="sidebar__header--logo-image"
                />
            </div>
        </div>
        <div class="sidebar__menu">
            <router-link
                :to="item.link"
                class="sidebar__menu--item"
                v-for="(item, key) in this.menuItems"
                :key="key"
            >
            <div v-if="item.selected">test</div>
                <div
                    class="sidebar__item--icon"
                    :style="item.menuItemBackgroundPos"
                ></div>
                <div class="sidebar__item--label">
                    <span class="sidebar__item--label-text">
                        {{ item.menuItemName }}
                    </span>
                </div>
                <div class="sidebar__item-tool-tip">
                    {{ item.menuItemName }}
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainSideBar',
    components: {},
    props: {},

    data() {
        return {
            menuItems: [
                {
                    menuItemName: 'Tổng quát',
                    link: '/home',
                    menuItemBackgroundPos:
                        'background-position: -30px -1628px;',
                },
                {
                    menuItemName: 'Tiền mặt',
                    link: '/cash',
                    menuItemBackgroundPos:
                        'background-position: -73px -1628px;',
                },
                {
                    menuItemName: 'Tiền gửi',
                    link: '/cashinbank',
                    menuItemBackgroundPos:
                        'background-position: -117px -1628px;',
                },
                {
                    menuItemName: 'Mua hàng',
                    link: '/buyandsell',
                    menuItemBackgroundPos:
                        'background-position: -161px -1628px;',
                },
                {
                    menuItemName: 'Bán hàng',
                    link: '/selling',
                    menuItemBackgroundPos:
                        'background-position: -204px -1628px;',
                },
                {
                    menuItemName: 'Quản lý đơn hàng',
                    link: '/cart',
                    menuItemBackgroundPos:
                        'background-position: -249px -1628px;',
                },
                {
                    menuItemName: 'Kho',
                    link: '/container',
                    menuItemBackgroundPos:
                        'background-position: -291px -1628px;',
                },
                {
                    menuItemName: 'Công cụ tìm kiếm',
                    link: '/searchtool',
                    menuItemBackgroundPos:
                        'background-position: -336px -1628px;',
                },
                {
                    menuItemName: 'Tài sản cố định',
                    link: '/asset',
                    menuItemBackgroundPos:
                        'background-position: -378px -1630px;',
                },
                {
                    menuItemName: 'Tiền lương',
                    link: '/salary',
                    menuItemBackgroundPos:
                        'background-position: -467px -1628px;',
                },
                {
                    menuItemName: 'Thuế',
                    link: '/tax',
                    menuItemBackgroundPos:
                        'background-position: -423px -1630px;',
                },
                {
                    menuItemName: 'Giá thành',
                    link: '/prize',
                    menuItemBackgroundPos:
                        'background-position: -467px -1628px;',
                },
                {
                    menuItemName: 'Ngân sách',
                    link: '/budget',
                    menuItemBackgroundPos:
                        'background-position: -378px -1659px;',
                },
                {
                    menuItemName: 'Báo cáo',
                    link: '/report',
                    menuItemBackgroundPos:
                        'background-position: -547px -1628px;',
                },
                {
                    menuItemName: ' Phân tích tài chính',
                    link: '/finance analys',
                    menuItemBackgroundPos:
                        'background-position: -204px -1664px;',
                },
                {
                    menuItemName: ' Giá Thành',
                    link: '/prizes',
                    menuItemBackgroundPos:
                        'background-position: -467px -1628px;',
                },
            ],
        }
    },
}
</script>

<style scoped>
.sidebar {
    background-color: #393a3d;
    width: 200px;
    height: 100vh;
    position: relative;
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
.sidebar__menu-list {
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
    text-decoration: none;
}
.sidebar__menu--item:hover .sidebar__item-tool-tip {
    display: flex;
}

.sidebar__menu-item-selected {
    box-sizing: border-box;
    padding-left: calc(14px - 6px) !important;
    border-left: 6px solid #2ca01c;
}
.sidebar__menu-item-selected .sidebar__item--label-text {
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
    text-decoration: none;
    user-select: none;
    color: white;
}
.sidebar__item-tool-tip {
    z-index:100000 !important;
    position: absolute;
    left: calc(100% + 8px);
    /* width:94px; */
    padding: 0 12px;
    height: 40px;
    background-color: var(--sidebar-color);
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 94%;
    color: #ffffff;
    text-align: center;
    z-index: 10001;
    display: none;
}
.sidebar__item-tool-tip::before {
    content: '';
    background-color: var(--sidebar-color);
    width: 7px;
    height: 7px;
    right: calc(100% - 3.5px);
    transform: rotate(45deg);
    position: absolute;
}

.sidebar__menu--item:hover {
    background-color: #58595d;
}
</style>
