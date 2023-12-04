class CollectionFiltersForm extends HTMLElement {
    constructor() {
      super();
      this.filterData = [];
      this.onActiveFilterClick = this.onActiveFilterClick.bind(this);
      this.productGridId = "CollectionProductGrid";
      this.filterFormsId = "CollectionFiltersForm";
      this.sections = this.getSections();
      this.filterWrapper = document.querySelector("collection-filtering-form");
      this.filterDrawer = this.filterWrapper.querySelector(
        "#CollectionFiltersForm"
      );
      this.searchTemplate = document.querySelector("#main-body.search-template");
      this.collectionTemplate = document.querySelector(
        "#main-body.collection-template"
      );
  
      function debounce(fn, wait) {
        let t;
        return (...args) => {
          clearTimeout(t);
          t = setTimeout(() => fn.apply(this, args), wait);
        };
      }
  
      this.debouncedOnSubmit = debounce((event) => {
        this.onSubmitHandler(event);
      }, 500);
  
      this.querySelector("form").addEventListener(
        "input",
        this.debouncedOnSubmit.bind(this)
      );
      document
        .querySelector("[data-drawer-open-btn]")
        .addEventListener("click", this.handleDrawerOpen.bind(this));
      this.addDrawerListeners.bind(this);
      window.addEventListener("resize", this.addDrawerListeners.bind(this));
      window.addEventListener("popstate", this.onHistoryChange.bind(this));
  
      this.bindActiveFacetButtonEvents();
      this.onDropDownBlur();
    }
  
    onDropDownBlur() {
      const getDropDowns = document.querySelectorAll("details");
  
      for (let item of getDropDowns) {
        document.addEventListener("click", function (event) {
          var isClickInside = item.contains(event.target);
  
          if (!isClickInside) {
            //the click was outside the specifiedElement, close the dropdown
            item.removeAttribute("open");
          }
        });
      }
    }
  
    isHidden(el) {
      return el.offsetParent === null;
    }
  
    addDrawerListeners() {
      const drawerOpenBtn = document.querySelector("[data-drawer-open-btn]");
  
      this.filterDrawer.removeAttribute("role");
      this.filterDrawer.removeAttribute("aria-modal");
  
      if (window.innerWidth < 991) {
        this.filterDrawer.setAttribute("role", "dialog");
        this.filterDrawer.setAttribute("aria-modal", "true");
      }
  
      if (this.isHidden(drawerOpenBtn)) return;
  
      drawerOpenBtn.addEventListener("click", this.handleDrawerOpen);
    }
  
    handleDrawerOpen(e) {
      e.target.setAttribute("tabIndex", "-1");
      const drawerCloseBtn = this.querySelector("[data-drawer-close-btn]");
  
      this.filterWrapper.classList.add("is-open");
      document.body.classList.add("js-drawer-open-left", "js-drawer-open");
      this.trapFocus("main-collection-filters", true);
      drawerCloseBtn.addEventListener("click", this.handleDrawerClose.bind(this));
  
      document.addEventListener(
        "click",
        (e) => this.handleOffDrawerClick(e),
        true
      );
    }
  
    handleOffDrawerClick(e) {
      // @todo: figure out why this method keeps getting called
      const isDrawerClick = this.filterDrawer.contains(e.target);
  
      if (!isDrawerClick) this.handleDrawerClose();
    }
  
    handleDrawerClose() {
      const filterBtn = document.querySelector("[data-drawer-open-btn]");
  
      document.body.classList.remove("js-drawer-open-left", "js-drawer-open");
      this.filterWrapper.classList.remove("is-open");
  
      filterBtn.setAttribute("tabIndex", "0");
      document.removeEventListener("click", this.handleOffDrawerClick, true);
    }
  
    trapFocus(slideout_id, is_initial_open) {
      const idString = `#${slideout_id}`;
      const menu = document.getElementById(slideout_id);
      const togglers = document.querySelectorAll(
        ".facets__disclosure, .collection-filters__sort"
      );
      const inputs = document.querySelectorAll(
        `${idString} input:not([type=hidden]), ${idString} button:not([tabindex="-1"]), ${idString} a:not([tabindex="-1"]), ${idString} textarea`
      );
      // The first input will always stay the same so we'll declare it here
      const firstInput = inputs[0];
      let lastInput;
  
      menu.addEventListener("keydown", function (e) {
        const getLastToggler = togglers[togglers.length - 1];
        const lastGroupCollapsed = !getLastToggler.hasAttribute("open");
  
        // If the last tag list is collapsed, the toggle button becomes the 'last input'
        // else the last input is equal to the last input in the array
        lastInput = lastGroupCollapsed
          ? getLastToggler
          : inputs[inputs.length - 1];
  
        // Redirect last tab to first input
        if (
          e.code === "Tab" &&
          !e.shiftKey &&
          document.activeElement == lastInput
        ) {
          e.preventDefault();
          firstInput.focus();
        }
  
        // Redirect first shift+tab to last input
        if (
          e.code === "Tab" &&
          e.shiftKey &&
          document.activeElement == firstInput
        ) {
          e.preventDefault();
          lastInput.focus();
        }
      });
    }
  
    onSubmitHandler(event) {
      event.preventDefault();
      if (this.collectionTemplate) {
        const formData = new FormData(event.target.closest("form"));
        const searchParams = new URLSearchParams(formData).toString();
        this.renderPage(searchParams, event);
      } else if (this.searchTemplate) {
        // Store the initial URL so that we can get the search query from it to add to the formData object
        const searchParamsInitial = new URLSearchParams(window.location.search);
  
        // Get the selected result types, we will need to use them later on
        const activeTypes = document.querySelector("#page-type-input").value;
        const types = Array.from(activeTypes.split(","));
        const defaultTypes = document.querySelector(
          '#search-wrapper input[name="type"]'
        );
  
        if (activeTypes == "") {
          const getInput = document.querySelector("#page-type-input");
          getInput.value = defaultTypes.value;
        }
  
        // Add the initial search query to the formData object otherwise the query will be lost and we will get an error
        const formData = new FormData(event.target.closest("form"));
        formData.append("q", searchParamsInitial.get("q"));
  
        // If the result type is not of type product, we want to disable the filter inputs and remove product type queries from the URL
        if (
          (types.includes("article") && !types.includes("product")) ||
          (types.includes("page") && !types.includes("product"))
        ) {
          const getInputs = document.querySelectorAll(
            `#${this.filterFormsId} input:not(#page-type-input)`
          );
          const getLabels = document.querySelectorAll(
            `#${this.filterFormsId} label:not(.collection-filters__label)`
          );
  
          // Disable the inputs if the result type is article or page
          for (let item of getInputs) {
            item.setAttribute("disabled", "disabled");
          }
  
          for (let inputLabel of getLabels) {
            inputLabel.classList.add("facet-checkbox--disabled");
          }
  
          // If our result is an article or page type, remove all product related filters from the URL
          if (searchParamsInitial.has("filter.p.product_type")) {
            let newFormData = new URLSearchParams(
              window.location.search
            ).toString();
  
            formData.delete("filter.p.product_type");
            this.renderPage(newFormData, event);
          }
  
          if (searchParamsInitial.has("filter.p.vendor")) {
            let newFormData = new URLSearchParams(
              window.location.search
            ).toString();
            formData.delete("filter.p.vendor");
            this.renderPage(newFormData, event);
          }
  
          if (searchParamsInitial.has("filter.v.availability")) {
            let newFormData = new URLSearchParams(
              window.location.search
            ).toString();
            formData.delete("filter.v.availability");
            this.renderPage(newFormData, event);
          }
        }
  
        const searchParams = new URLSearchParams(formData).toString();
        this.renderPage(searchParams, event);
      }
    }
  
    onActiveFilterClick(event) {
      event.preventDefault();
      this.toggleActiveFacets();
      this.renderPage(new URL(event.target.href).searchParams.toString());
    }
  
    onHistoryChange(event) {
      const searchParams = event.state?.searchParams || "";
      this.renderPage(searchParams, null, false);
    }
  
    toggleActiveFacets(disable = true) {
      document.querySelectorAll(".js-facet-remove").forEach((element) => {
        element.classList.toggle("disabled", disable);
      });
    }
  
    renderPage(searchParams, event, updateURLHash = true) {
      document
        .querySelector(`#${this.productGridId}>div`)
        .classList.add("loading");
  
      function removeParamFromUrl(url, paramToRemove) {
        const urlObj = new URL(url);
  
        const searchParams = urlObj.searchParams;
        if (searchParams.has(paramToRemove)) {
          searchParams.delete(paramToRemove);
  
          urlObj.search = searchParams.toString();
        }
        return urlObj.href;
      }
  
      this.sections.forEach((section) => {
        if (this.collectionTemplate) {
          const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
          const modifiedUrl = removeParamFromUrl(`${window.location.origin}${url}`, 'filter.v.scent');
          const filterDataUrl = (element) => element.url === modifiedUrl;
  
          this.filterData.some(filterDataUrl)
            ? this.renderSectionFromCache(filterDataUrl, section, event)
            : this.renderSectionFromFetch(url, section, event);
        } else if (this.searchTemplate) {
          const url = `${window.location.pathname}?${searchParams}`;
          const filterDataUrl = (element) => element.url === url;
  
          this.filterData.some(filterDataUrl)
            ? this.renderSectionFromCache(filterDataUrl, section, event)
            : this.renderSectionFromFetch(url, section, event);
        }
      });
  
      if (updateURLHash) this.updateURLHash(searchParams);
    }
  
    renderSectionFromFetch(url, section, event) {
      fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
          const html = responseText;
          this.filterData = [...this.filterData, { html, url }];
  
          switch (section.id) {
            case this.productGridId:
              this.renderProductGrid(html);
              break;
            case this.filterFormsId:
              this.renderFilters(html, event);
              break;
            default:
              return;
          }
        });
    }
  
    renderSectionFromCache(filterDataUrl, section, event) {
      const html = this.filterData.find(filterDataUrl).html;
      this.renderFilters(html, event);
      this.renderProductGrid(html);
    }
  
    renderProductGrid(html) {
      const initialDoc = new DOMParser().parseFromString(html, "text/html");
      const productGridId = initialDoc.getElementById(this.productGridId);
  
      let innerHTML = "";
      if (productGridId) {
        innerHTML = productGridId.innerHTML;
      }
  
      const getSearchParamValue = (paramName) => {
        const queryParams = new URLSearchParams(window.location.search);
        const paramValue = queryParams.getAll(paramName);
        return paramValue;
      };
  
      const scentFilters = getSearchParamValue("filter.v.scent");
  
      if (!scentFilters) {
        document.getElementById(this.productGridId).innerHTML = innerHTML;
        const event = new CustomEvent("paginate");
        document.dispatchEvent(event);
        return;
      }
  
      const addWordToPath = (existingUrl, newWord) => {
        const url = new URL(existingUrl);
        const pathParts = url.pathname
          .split("/")
          .filter((part) => part.trim() !== "");
        pathParts.push(newWord);
        url.pathname = `/${pathParts.join("/")}`;
        return url.href;
      };
  
      if (scentFilters.length > 0) {
        try {
          const updatedUrl = addWordToPath(window.location.href, scentFilters[0]);
          
          fetch(updatedUrl)
            .then((response) => response.text())
            .then((html) => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, "text/html");
  
              const scentFilteredHtml = doc.getElementById(
                this.productGridId
              ).innerHTML;
  
              document.getElementById(this.productGridId).innerHTML =
                scentFilteredHtml;
            });
        } catch (error) {
          console.log("filtered scent throw error: ", error);
        }
      }
  
      const event = new CustomEvent("paginate");
      document.dispatchEvent(event);
    }
  
    renderFilters(html, event) {
      const parsedHTML = new DOMParser().parseFromString(html, "text/html");
  
      const facetDetailsElements = parsedHTML.querySelectorAll(
        `#${this.filterFormsId} .js-filter`
      );
      const matchesIndex = (element) =>
        element.dataset.index ===
        event?.target.closest(".js-filter")?.dataset.index;
      const facetsToRender = Array.from(facetDetailsElements).filter(
        (element) => !matchesIndex(element)
      );
      const countsToRender = Array.from(facetDetailsElements).find(matchesIndex);
  
      facetsToRender.forEach((element) => {
        const filterIndex = document.querySelector(
          `.js-filter[data-index="${element.dataset.index}"]`
        );
        if (filterIndex) {
          filterIndex.innerHTML = element.innerHTML;
        }
      });
  
      this.renderActiveFacets(parsedHTML);
  
      if (countsToRender)
        this.renderCounts(countsToRender, event?.target.closest(".js-filter"));
    }
  
    renderActiveFacets(html) {
      const activeFacetElementSelectors = [
        ".active-facets-mobile",
        ".active-facets-desktop",
      ];
  
      activeFacetElementSelectors.forEach((selector) => {
        const activeFacetsElement = html.querySelector(selector);
        if (!activeFacetsElement) return;
        document.querySelector(selector).innerHTML =
          activeFacetsElement.innerHTML;
      });
  
      this.bindActiveFacetButtonEvents();
      this.toggleActiveFacets(false);
    }
  
    renderMobileElements(html) {
      const mobileElementSelectors = [
        ".mobile-facets__open",
        ".mobile-facets__count",
      ];
  
      mobileElementSelectors.forEach((selector) => {
        document.querySelector(selector).innerHTML =
          html.querySelector(selector).innerHTML;
      });
  
      document
        .getElementById("CollectionFiltersFormMobile")
        .closest("menu-drawer")
        .bindEvents();
    }
  
    renderCounts(source, target) {
      const countElementSelectors = [".count-bubble", ".facets__selected"];
      countElementSelectors.forEach((selector) => {
        const targetElement = target.querySelector(selector);
        const sourceElement = source.querySelector(selector);
  
        if (sourceElement && targetElement) {
          target.querySelector(selector).outerHTML =
            source.querySelector(selector).outerHTML;
        }
      });
    }
  
    bindActiveFacetButtonEvents() {
      document.querySelectorAll(".js-facet-remove").forEach((element) => {
        element.addEventListener("click", this.onActiveFilterClick, {
          once: true,
        });
      });
    }
  
    updateURLHash(searchParams) {
      history.pushState(
        { searchParams },
        "",
        `${window.location.pathname}${searchParams && "?".concat(searchParams)}`
      );
    }
  
    getSections() {
      return [
        {
          id: this.productGridId,
          section: document.getElementById(this.productGridId).dataset.sectionId,
        },
        {
          id: this.filterFormsId,
          section: document.getElementById("main-collection-filters").dataset.id,
        },
      ];
    }
  }
  
  customElements.define("collection-filtering-form", CollectionFiltersForm);
  
  class PriceRange extends HTMLElement {
    constructor() {
      super();
      this.querySelectorAll("input").forEach((element) =>
        element.addEventListener("change", this.onRangeChange.bind(this))
      );
  
      this.setMinAndMaxValues();
    }
  
    onRangeChange(event) {
      this.adjustToValidValues(event.currentTarget);
      this.setMinAndMaxValues();
    }
  
    setMinAndMaxValues() {
      const inputs = this.querySelectorAll("input");
      const minInput = inputs[0];
      const maxInput = inputs[1];
      if (maxInput.value) minInput.setAttribute("max", maxInput.value);
      if (minInput.value) maxInput.setAttribute("min", minInput.value);
      if (minInput.value === "") maxInput.setAttribute("min", "0");
      if (maxInput.value === "")
        minInput.setAttribute("max", maxInput.getAttribute("max"));
    }
  
    adjustToValidValues(input) {
      const value = Number(input.value);
      const min = Number(input.getAttribute("min"));
      const max = Number(input.getAttribute("max"));
  
      if (value < min) input.value = min;
      if (value > max) input.value = max;
    }
  }
  
  customElements.define("price-range-selector", PriceRange);
  
  class PageType extends HTMLElement {
    constructor() {
      super();
      this.selector = document.querySelector("[data-page-type-selector]");
      this.selector.addEventListener("change", this.setValue);
    }
  
    setValue(e) {
      const selectedTypes = e.currentTarget.querySelectorAll("input:checked");
      const types = Array.from(selectedTypes)
        .map((option) => option.value)
        .join(",");
  
      const typeInput = document.querySelector("#page-type-input");
      typeInput.value = types;
  
      const event = new Event("input");
      typeInput.closest("form").dispatchEvent(event);
    }
  }
  
  customElements.define("page-type-selector", PageType);
  