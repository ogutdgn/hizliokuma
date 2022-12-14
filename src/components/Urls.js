export const getPageTitleByRoute = (path) => {
  var title = "";
  
    routes.forEach(route => {
      if (route.subRoutes !== undefined){
        route.subRoutes.forEach(subRoute => {
          if(path === subRoute.path){
            title = subRoute.name;
          }
        });
      }

      else if(path === route.path){
        title = route.name;
      }
    });
    return title;
}

const routes = [
    // {
    //   path: "/anasayfa",
    //   name: "Ana Sayfa",
    // },
    {
      path: "/",
      name: "Okuma Testi",
    },
    {
      path: "/okumaegzersizi",
      name: "Okuma Egzersizi",
    },
  ];

export default routes;