import { pollerLite } from '../../../../../../../globalUtil/util';

/* eslint-disable no-undef */
export const initRatingsScript = () => {
  return ratingSnippet('ruk_rating_snippet', {
    store: 'snocks',
    mode: 'default',
    color: '#F9CA4F',
    linebreak: false,
    lang: 'en',
    usePolaris: false,
    showEmptyStars: false,
  });
};
export const initReviews = (sku) => {
  // const reviewInterval = window.setInterval(myReviewsIo, 100);
  let reviewsIo;
  const loadRevWidget = () => {
    // document.querySelector('.ruk_rating_snippet')?.remove();
    initRatingsScript();

    reviewsIo = new ReviewsWidget('#ReviewsWidget', {
      //Your REVIEWS.io Store ID and widget type:
      store: 'snocks',
      widget: 'polaris',

      options: {
        types: 'product_review',
        lang: 'de',
        //Possible layout options: bordered, large and reverse.
        layout: '',
        //How many reviews & questions to show per page?
        per_page: 10,
        store_review: {
          hide_if_no_results: false,
        },
        third_party_review: {
          hide_if_no_results: false,
        },
        product_review: {
          sku: sku,
          enable_rich_snippets: true,
          hide_if_no_results: true,
          /* Your custom Structured Data */
        },
        /* Toggle Options */
        questions: {
          hide_if_no_results: false,
          enable_ask_question: true,
          show_dates: true,
          grouping:
            "{{ product.variants | map: 'sku' | join: ';' }};{{ product.variants | map: 'id' | join: ';' }}",
        },
        //Header settings:
        header: {
          enable_summary: true, //Show overall rating & review count
          enable_ratings: true,
          enable_attributes: false,
          enable_image_gallery: false, //Show photo & video gallery
          enable_percent_recommended: false, //Show what percentage of reviewers recommend it
          enable_write_review: false, //Show "Write Review" button
          enable_ask_question: false, //Show "Ask Question" button
          enable_sub_header: true, //Show subheader
          rating_decimal_places: 2,
        },
        //Filtering settings:
        filtering: {
          enable: true, //Show filtering options
          enable_text_search: false, //Show search field
          enable_sorting: true, //Show sorting options (most recent, most popular)
          enable_product_filter: true, //Show product options filter
          enable_media_filter: false, //Show reviews with images/video/media options
          enable_overall_rating_filter: true, //Show overall rating breakdown filter
          enable_language_filter: false, // Filter by review language
          enable_language_filter_language_change: false, // Update widget language based on language selected
          enable_ratings_filters: true, //Show product attributes filter
          enable_attributes_filters: true, //Show author attributes filter
        },
        //Review settings:
        reviews: {
          enable_avatar: false, //Show author avatar
          enable_reviewer_name: true, //Show author name
          enable_reviewer_address: false, //Show author location
          reviewer_address_format: 'city, country', //Author location display format
          enable_verified_badge: true, //Show "Verified Customer" badge
          review_content_filter: 'undefined', //Filter content
          enable_reviewer_recommends: false, //Show "I recommend it" badge
          enable_attributes: true, //Show author attributes
          enable_product_name: true, //Show display product name
          enable_review_title: true, //Show review title
          enable_replies: undefined, //Show review replies
          enable_images: true, //Show display review photos
          enable_ratings: true, //Show product attributes (additional ratings)
          enable_share: false, //Show share buttons
          enable_helpful_vote: false, //Show "was this helpful?" section
          enable_helpful_display: true, //Show how many times times review upvoted
          enable_report: false, //Show report button
          enable_date: false, //Show when review was published
        },
      },
      //Translation settings
      translations: {
        'Verified Customer': 'Verifizierter Käufer',
      },
      //Style settings:
      styles: {
        //Base font size is a reference size for all text elements. When base value gets changed, all TextHeading and TexBody elements get proportionally adjusted.
        '--base-font-size': '16px',
        //Button styles (shared between buttons):
        '--common-button-font-family': 'inherit',
        '--common-button-font-size': '16px',
        '--common-button-font-weight': '500',
        '--common-button-letter-spacing': '0',
        '--common-button-text-transform': 'none',
        '--common-button-vertical-padding': '10px',
        '--common-button-horizontal-padding': '20px',
        '--common-button-border-width': '2px',
        '--common-button-border-radius': '0px',
        //Primary button styles:
        '--primary-button-bg-color': '#0E1311',
        '--primary-button-border-color': '#0E1311',
        '--primary-button-text-color': '#ffffff',
        //Secondary button styles:
        '--secondary-button-bg-color': 'transparent',
        '--secondary-button-border-color': '#0E1311',
        '--secondary-button-text-color': '#0E1311',
        //Star styles:
        '--common-star-color': '#F9CA4F',
        '--common-star-disabled-color': '#FFFFFF',
        '--medium-star-size': '22px',
        '--small-star-size': '19px',
        //Heading styles:
        '--heading-text-color': '#666666',
        '--heading-text-font-weight': '700',
        '--heading-text-font-family': 'inherit',
        '--heading-text-line-height': '1.4',
        '--heading-text-letter-spacing': '0',
        '--heading-text-transform': 'none',
        //Body text styles:
        '--body-text-color': '#575757',
        '--body-text-font-weight': '500',
        '--body-text-font-family': 'inherit',
        '--body-text-line-height': '1.4',
        '--body-text-letter-spacing': '0',
        '--body-text-transform': 'none',
        //Input field styles:
        '--inputfield-text-font-family': 'inherit',
        '--input-text-font-size': '14px',
        '--inputfield-text-font-weight': '400',
        '--inputfield-text-color': '#0E1311',
        '--inputfield-border-color': 'rgba(0,0,0,0.2)',
        '--inputfield-background-color': 'transparent',
        '--inputfield-border-width': '1px',
        '--inputfield-border-radius': '0px',
        '--common-border-color': 'rgba(0,0,0,0.15)',
        '--common-border-width': '1px',
        '--common-sidebar-width': '190px',
        //Slider indicator (for attributes) styles:
        '--slider-indicator-bg-color': '#F9CA4F',
        '--slider-indicator-button-color': '#666666',
        '--slider-indicator-width': '270px',
        //Badge styles:
        '--badge-icon-color': '#0E1311',
        '--badge-icon-font-size': '0px',
        '--badge-text-color': '#575757',
        '--badge-text-font-size': 'inherit',
        '--badge-text-letter-spacing': 'inherit',
        '--badge-text-transform': 'capitalize',
        //Author styles:
        '--author-font-size': 'inherit',
        '--author-text-transform': 'none',
        //Author avatar styles:
        '--avatar-thumbnail-size': '60px',
        '--avatar-thumbnail-border-radius': '100px',
        '--avatar-thumbnail-text-color': '#0E1311',
        '--avatar-thumbnail-bg-color': 'rgba(0,0,0,0.1)',
        //Product photo or review photo styles:
        '--photo-video-thumbnail-size': '80px',
        '--photo-video-thumbnail-border-radius': '0px',
        //Media (photo & video) slider styles:
        '--mediaslider-scroll-button-icon-color': '#0E1311',
        '--mediaslider-scroll-button-bg-color': 'rgba(255, 255, 255, 0.85)',
        '--mediaslider-overlay-text-color': '#ffffff',
        '--mediaslider-overlay-bg-color': 'rgba(0, 0, 0, 0.8))',
        '--mediaslider-item-size': '110px',
        //Pagination & tabs styles (normal):
        '--pagination-tab-text-color': '#666666',
        '--pagination-tab-text-transform': 'none',
        '--pagination-tab-text-letter-spacing': '0',
        '--pagination-tab-text-font-size': '14px',
        '--pagination-tab-text-font-weight': '600',
        //Pagination & tabs styles (active):
        '--pagination-tab-active-text-color': '#666666',
        '--pagination-tab-active-text-font-weight': '700',
      },
    });
  };

  (function myReviewsIo() {
    pollerLite(
      [() => window.ReviewsWidget != undefined, () => window.ratingSnippet != undefined],
      () => {
        loadRevWidget();

        // window.clearInterval(reviewInterval);
      }
    );
  })();
};
