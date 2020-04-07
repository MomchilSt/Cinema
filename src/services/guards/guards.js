import store from '../../store/index';

export const authGuard = function(to, from, next) {
  if (!store.getters.isAuth) {
    next({ name: '/login' });
  }
  next();
};

export const innerGuard = function(to, from, next) {
  if (store.getters.isAuth) {
    next('/');
  }
  next();
};

export const adminGuard = function(to, from, next) {
    if (store.getters.isAdmin !== "Administrator") {
      next('/');
    }
    next();
  };