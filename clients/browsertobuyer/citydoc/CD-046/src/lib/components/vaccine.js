const vaccine = (id, data) => {
  const html = `
    <div class="${id}__vaccine">
        <div class="${id}__vaccineItem">
          ${
            data['When to get vaccinated?']
              ? `<p class="${id}__item"><span class="${id}__question">When to get vaccinated? </span><span class="${id}__answer">${data['When to get vaccinated?']}</span></p>`
              : ''
          }
          ${
            data.Course
              ? `<p class="${id}__item"><span class="${id}__question">Course</span><span class="${id}__answer">${data.Course}</span></p>`
              : ''
          }  
        </div>
        <div class="${id}__vaccineItem">
              ${
                data['How is it given?']
                  ? `<p class="${id}__item"><span class="${id}__question">How is it given?</span><span class="${id}__answer">${data['How is it given?']}</span></p>`
                  : ''
              }
             ${
               data.Boosters
                 ? `<p class="${id}__item"><span class="${id}__question">Boosters</span><span class="${id}__answer">${data.Boosters}</span></p>`
                 : ''
             }
        </div>
        <div class="${id}__vaccineItem">
             ${
               data['How long does it last?']
                 ? `<p class="${id}__item"><span class="${id}__question">How long does it last?</span><span class="${id}__answer">${data['How long does it last?']}</span></p>`
                 : ''
             }
        ${
          data['Side effects']
            ? `<p class="${id}__item"><span class="${id}__question">Side effects</span><span class="${id}__answer">${data['Side effects']}</span></p>`
            : ''
        }
        
        </div>
        <div class="${id}__vaccineItem">
           ${
             data.Children
               ? `<p class="${id}__item"><span class="${id}__question">Children</span><span class="${id}__answer">${data.Children}</span></p>`
               : ''
           }
           ${
             data['Certificate requirements']
               ? `<p class="${id}__item"><span class="${id}__question">Certificate requirements</span><span class="${id}__answer">${data['Certificate requirements']}</span></p>`
               : ''
           }
        </div>
    </div>
  `;
  return html.trim();
};

export default vaccine;
