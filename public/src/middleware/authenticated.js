export default function ({ store, redirect }) {
    // Si l'utilisateur n'est pas authentifi√©
    if ((Object.keys(store.state.userStore.userInfo).length == 0)) {
      return redirect('/login')
    }
  }