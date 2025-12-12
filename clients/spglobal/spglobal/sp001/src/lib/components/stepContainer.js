const stepContainer = (id) => {
  const html = `
        <div class="wrap ${id}__stepContainer">
            <!-- Progress header -->
            <div class="${id}__progress-bar" aria-label="Progress: Step 1 of 3">
                <!-- Step 1 (current) -->
                <div class="segment" data-segment="1">
                <div class="segment-inner">
                    <span class="dot current" aria-hidden="true"></span>
                    <div class="rail" aria-hidden="true"></div>
                </div>
                <div class="marker">  
                    <div class="meta">
                    <span class="step">Step 1</span>
                    <span class="title">Basic Information</span>
                    </div>
                </div>
                </div>
                <!-- Step 2 -->
                <div class="segment" data-segment="2">
                <div class="segment-inner">
                    <span class="dot current" aria-hidden="true"></span>
                    <div class="rail" aria-hidden="true"></div>
                </div>
                <div class="marker">
                    <div class="meta">
                    <span class="step">Step 2</span>
                    <span class="title">Business Details</span>
                    </div>
                </div>
                </div>
                <!-- Step 3 -->
                <div class="segment" data-segment="3">
                <div class="segment-inner">
                    <span class="dot current" aria-hidden="true"></span>
                    <div class="rail" aria-hidden="true"></div>
                </div>
                <div class="marker">
                    <div class="meta">
                    <span class="step">Step 3</span>
                    <span class="title">Challenges</span>
                    </div>
                </div>
                </div>
            </div>
            <!-- Page title & copy -->
            <div class="${id}__formHeader">
                <div class="${id}__formHeader-info" data-info="1">
                    <h1>Basic Information</h1>
                    <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div class="${id}__formHeader-info" data-info="2">
                    <h1>Business Details</h1>
                    <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div class="${id}__formHeader-info" data-info="3">
                    <h1>Basic Information</h1>
                    <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
            </div>
            <div class="hint">* Indicates a required field</div>
        </div>
    
    `;
  return html.trim();
};

export default stepContainer;
