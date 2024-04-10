export const FormMessage = (ID) => {
  const html = `
        <div class="${ID}__formMessage ${ID}__hide">
            <div class="${ID}__formMessage-title">Thanks!</div>
        </div>
    `;

  return html.trim();
};
