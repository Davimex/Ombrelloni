import RouteConfig from "../core/model/RouteConfig.model";

class Constants  {

    public readonly navLinks : RouteConfig [] = [
        {
          text: 'Home',
          path: '/home'
        },
        {
          text: 'About',
          path: '/about'
        },
        {
          text: 'Store',
          path: '/store'
        },
        {
          text: 'FAQ',
          path: '/faq'
        },
        {
          text: 'Contact',
          path: '/contact'
        }
      ];
}

export default Constants;

