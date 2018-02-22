const GlobalConfigs = {
  pageTitle: "Azino777 три топора",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://velkan.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://velkan.top/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://velkan.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://velkan.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://velkan.top/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://velkan.top/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "pink accent-2", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



