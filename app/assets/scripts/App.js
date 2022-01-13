import '../styles/styles.css'
import StickyHeader from './modules/StickyHeader.js'
import MobileMenu from './modules/MobileMenu.js'

new StickyHeader()
new MobileMenu()

let modal

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if(typeof modal == "undefined") {
      import(/* webpackChunkName: "modal"*/'./modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem with the modal."))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
    module.hot.accept();
}
