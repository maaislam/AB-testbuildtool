import stepContainer from './stepContainer';
import policyStr from './policyStr';

const form = (id) => {
  const html = `
        <div class="${id}__formWrapper" data-step-active="1" data-fill-step="0">
            ${stepContainer(id)}
            <div class="${id}__formInner">
                <div class="${id}__first-step ${id}__step" data-step="1">
                    <div class="${id}__stepInner"></div>
                    <div class="${id}__actionWrapper">
                        <button style="opacity:0;" class="${id}__back-btn">Back</button>
                        <button class="${id}__next-btn">Next</button>
                    </div>
                </div>
                <div class="${id}__second-step ${id}__step" data-step="2">
                    <div class="${id}__stepInner"></div>
                    <div class="${id}__actionWrapper">
                        <button class="${id}__back-btn">Back</button>
                        <button class="${id}__next-btn">Next</button>
                    </div>
                </div>
                <div class="${id}__third-step ${id}__step" data-step="3">
                    <div class="${id}__stepInner"></div>
                    ${policyStr(id)}
                    <div class="${id}__actionWrapper">
                        <button class="${id}__back-btn">Back</button>
                        <button class="${id}__next-btn">Finish</button>
                    </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default form;
