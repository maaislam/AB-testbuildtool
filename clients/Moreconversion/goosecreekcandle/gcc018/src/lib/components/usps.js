import { VARIATION } from '../shared/shared';

const usps = (id) => {
  const v2Icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M21 10.8099C21 16.6089 16.299 21.3099 10.5 21.3099C4.70101 21.3099 0 16.6089 0 10.8099C0 5.01095 4.70101 0.309937 10.5 0.309937C16.299 0.309937 21 5.01095 21 10.8099ZM2.31 10.8099C2.31 15.3331 5.97679 18.9999 10.5 18.9999C15.0232 18.9999 18.69 15.3331 18.69 10.8099C18.69 6.28672 15.0232 2.61994 10.5 2.61994C5.97679 2.61994 2.31 6.28672 2.31 10.8099Z" fill="#363636"/>
  <path d="M23.9998 1.5358C23.8826 1.63944 23.7424 1.70463 23.604 1.7745C22.0447 2.55768 20.6007 3.52048 19.2253 4.58926C19.1952 4.61271 19.1709 4.64413 19.1441 4.6718C18.5678 5.11451 18.0134 5.58254 17.4887 6.08574C17.4516 6.11341 17.4113 6.13733 17.378 6.16875C14.5928 8.76872 12.4125 11.7861 11.0178 15.3451C10.9559 15.5031 10.894 15.6546 10.6909 15.6602C10.479 15.6659 10.4283 15.4975 10.3645 15.347C9.8196 14.0606 9.16258 12.8356 8.34375 11.7002C7.69142 10.7956 6.94341 9.98851 5.98437 9.39432C5.63358 9.17672 5.3536 8.89159 5.35548 8.44513C5.35735 7.97381 5.50602 7.54096 5.88917 7.24879C6.54103 6.75215 7.25527 6.58566 8.03376 6.96084C8.28091 7.07996 8.50789 7.23003 8.71987 7.40308C9.49648 8.03666 10.0996 8.8189 10.6365 9.6546C10.7496 9.83093 10.7965 9.845 10.9231 9.66257C11.9497 8.18673 13.109 6.82296 14.4235 5.59239C14.9243 5.12389 15.4618 4.699 15.9837 4.25535C16.5779 3.82671 17.1862 3.41824 17.8094 3.03275C17.8521 3.01493 17.8967 3.00133 17.9365 2.97835C19.675 1.9907 21.5279 1.34868 23.5229 1.13108C23.7227 1.1095 23.8873 1.11466 23.9998 1.30225V1.53627V1.5358Z" fill="#6CAFC5"/>
  </svg>`;

  const uspV2 = `<div class='${id}__container'>
        <div class='usps-item'>
            <p><span>${v2Icon}</span> 35+ hour burn time</p>
            <div></div>
            <p><span>${v2Icon}</span> Clean Burn</p>
            <div></div>
            <p><span>${v2Icon}</span> Lead Free</p>
        </div>`;

  const uspV1 = `
        <div class='${id}__container'>
            <div class='usps-item'>
                <p><span>${v2Icon}</span> 35+ hour burn time</p>
                <div></div>
                <p><span>${v2Icon}</span> Clean Burn</p>
                <div></div>
                <p><span>${v2Icon}</span> Lead Free</p>
            </div>
        </div>`;

  const htmlStr = VARIATION === 1 ? uspV1 : uspV2;
  return htmlStr;
};
export default usps;
