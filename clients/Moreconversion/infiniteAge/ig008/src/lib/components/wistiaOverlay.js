const wistiaOverlay = () => {
  const htmlString = `
    <div class="w-css-reset w-css-reset-tree"
    data-handle="click-for-sound-backdrop"
    style="display: block;height: 100%;left: 0px;pointer-events: auto;position: absolute;top: 0px;width: 100%;z-index: 9999;">
   <button aria-label="Click for sound"
           class="w-vulcan-v2-button click-for-sound-btn"
           style="width:50px;height:50px;background: rgba(0, 0, 0, 0.8);border: 2px solid transparent;border-radius: 60px;cursor: pointer;display: flex;justify-content: space-between;align-items: center;outline: none;pointer-events: auto;position: absolute;right: 60px;top: 20px;height: 46px;width: 47px;">
       <div
            style="display: flex;align-items: center;justify-content: flex-end;white-space: nowrap;overflow: hidden;max-width: 0px;transition: max-width 200ms ease 0s;">
           <span
                 style="color: rgb(255, 255, 255); font-family: WistiaPlayerInter, Helvetica, sans-serif; font-size: 18px; font-weight: 500; padding-left: 1em;">Click
               for sound</span>
       </div><svg viewBox="0 0 237 237"
            width="41.015625"
            height="41.015625">
           <style>
               @keyframes VOLUME_SMALL_WAVE_FLASH {
                   0% {
                       opacity: 0;
                   }

                   33% {
                       opacity: 1;
                   }

                   66% {
                       opacity: 1;
                   }

                   100% {
                       opacity: 0;
                   }
               }

               @keyframes VOLUME_LARGE_WAVE_FLASH {
                   0% {
                       opacity: 0;
                   }

                   33% {
                       opacity: 1;
                   }

                   66% {
                       opacity: 1;
                   }

                   100% {
                       opacity: 0;
                   }
               }

               .volume__small-wave {
                   animation: VOLUME_SMALL_WAVE_FLASH 2s infinite;
                   opacity: 0;
               }

               .volume__large-wave {
                   animation: VOLUME_LARGE_WAVE_FLASH 2s infinite .3s;
                   opacity: 0;
               }
           </style>
           <path fill="#fff"
                 d="M88 107H65v24h24l23 23V84z"></path>
           <g fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="10">
               <path d="M142 86c9 21 9 44 0 65"
                     class="volume__small-wave"></path>
               <path d="M165 74c13 23 13 66 0 89"
                     class="volume__large-wave"></path>
           </g>
       </svg>
   </button>
</div>    
    `;
  return htmlString.trim();
};
export default wistiaOverlay;
