export const tooltip = () => {
  const html = `
    <div class="tooltip">
        <div class="tooltip-toggle">?</div>
        <span class="tooltip-content"
            id="tooltip-1"
            role="tooltip">
            <p><strong>Grades Explained</strong><br><u>Rustic planks</u> contain knots, imperfections and colour variation
                found in natural wood. Any open knots and imperfections will be filled in, giving your floor an aged wood
                effect.<br><br><u> Prime wood</u> contains minimal colour variation and knots, making it the ultimate choice
                for a clean, uniform finish.</p>
        </span>
    </div>
    `;
  return html;
};
