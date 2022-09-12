//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util'

const { ID, VARIATION } = shared;

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
};

export default () => {
  //setup(); //use if needed

  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }
    setUniqueClass();
    const filterContainer = document.querySelector('.column-left')

    filterContainer.insertAdjacentHTML("afterbegin", '<div class="filter-search" id="filterSearch">Filter your search</div>');
    document.querySelector('.filters-toolbar__sortby.toolbar-col label').innerText = 'Sort'
    const node = document.querySelector('.filters-toolbar__sortby.toolbar-col')
    const clone = node.cloneNode(true);
  
    document.querySelector('#filterSearch').addEventListener('click', ()=>{


      
      document.querySelector('.sidebar-label').click()
      document.querySelector('#main-collection-filters .facets').append(clone)
      document.querySelector('#main-collection-filters .facets .filters-toolbar__sortby ul').classList.add('clone-dropdown-mk')



      const li = document.querySelectorAll('#main-collection-filters .facets .filters-toolbar__sortby ul > li')
     
    
      li.forEach((item)=>{
        item.querySelector('span').addEventListener('click', (event)=>{

          setTimeout(()=>{
            document.querySelector('#main-collection-filters .facets .filters-toolbar__sortby .filter-sortby span.label-text').innerText = event.target.innerText.trim()
    
            Array.from(li).forEach(el=>el.classList.remove('active'))
            item.classList.add('active')
          }, 2000)
        })
      })
    })


  const mutationObserverInSideBar = function () {
    let listContainer = document.querySelector("#shopify-section-sidebar-filter");

    let observer = new MutationObserver(mutationRecords => {
       if( !document.querySelector('#main-collection-filters .facets .filters-toolbar__sortby  .clone-dropdown-mk')){
          document.querySelector('#main-collection-filters .facets').appendChild(clone)
          document.querySelector('#main-collection-filters .facets .filters-toolbar__sortby  ul').classList.add('clone-dropdown-mk')
       }
    });
    observer.observe(listContainer, {
      childList: true,
      attributes: true,
      subtree: true,
    });
};

mutationObserverInSideBar()
};
