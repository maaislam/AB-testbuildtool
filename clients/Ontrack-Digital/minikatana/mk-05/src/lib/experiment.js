//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
// import { pollerLite } from '../../../../../../globalUtil/util'

const { ID, VARIATION } = shared;

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
};

export default () => {
  //setup(); //use if needed

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }
    setUniqueClass();
    const filterContainer = document.querySelector('.column-left')

    filterContainer.insertAdjacentHTML("afterbegin", '<div class="filter-search" id="filterSearch">Filter your search</div>');
    const node = document.querySelector('.filters-toolbar__sortby.toolbar-col')
    document.querySelector('#main-collection-filters').appendChild(node)
    document.querySelector('#main-collection-filters .filters-toolbar__sortby ul').classList.add('test-123')
  
    document.querySelector('#filterSearch').addEventListener('click', ()=>{
      console.log('clicked')
      document.querySelector('.sidebar-label').click()
    })
  
  


  const li = document.querySelectorAll('#main-collection-filters .filters-toolbar__sortby ul > li')

  li.forEach((item)=>{
    console.log(item)
    item.querySelector('span').addEventListener('click', (event)=>{
 
      console.log(event.target.innerText.trim())
      setTimeout(()=>{
        document.querySelector('#main-collection-filters').appendChild(node)
        document.querySelector('#main-collection-filters .filters-toolbar__sortby  ul').classList.add('test-123')
        document.querySelector('#main-collection-filters .filters-toolbar__sortby .filter-sortby span.label-text').innerText = event.target.innerText.trim()

        Array.from(li).forEach(el=>el.classList.remove('active'))
        item.classList.add('active')
      }, 2000)
    })
  })

  const pushState = window.history.pushState;
  window.history.pushState = function () {
    pushState.apply(history, arguments);
    console.log({history, arguments})

    setTimeout(()=>{
      document.querySelector('#main-collection-filters').appendChild(node)
      document.querySelector('#main-collection-filters .filters-toolbar__sortby  ul').classList.add('test-123')
    }, 2000)

    
  };
};
