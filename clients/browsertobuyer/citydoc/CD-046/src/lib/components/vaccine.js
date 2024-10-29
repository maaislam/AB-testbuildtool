const vaccine = (id, data) => {
  const html = `
    <div class="${id}__vaccine">
        <div class="${id}__title">${data['About the heading']}</div>
        ${
          data['When to get vaccinated']
            ? `<p><span>When to get vaccinated: </span>${data['When to get vaccinated']}</p>`
            : ''
        }
        ${data.Course ? `<p><span>Course: </span>${data.Course}</p>` : ''}
        ${data.Boosters ? `<p><span>Boosters: </span>${data.Boosters}</p>` : ''}
        ${
          data['How is it given']
            ? `<p><span>How is it given: </span>${data['How is it given']}</p>`
            : ''
        }
        ${
          data['How long does it last']
            ? `<p><span>How long does it last: </span>${data['How long does it last']}</p>`
            : ''
        }
        ${data['Side effects'] ? `<p><span>Side effects: </span>${data['Side effects']}</p>` : ''}
        ${data.Children ? `<p><span>Children: </span>${data.Children}</p>` : ''}
        ${
          data['Additional precautions']
            ? `<p><span>Additional precautions: </span>${data['Additional precautions']}</p>`
            : ''
        }
        ${
          data['Certificate requirements']
            ? `<p><span>Certificate requirements: </span>${data['Certificate requirements']}</p>`
            : ''
        }
        ${
          data['Risk if you contract']
            ? `<p><span>Risk if you contract: </span>${data['Risk if you contract']}</p>`
            : ''
        }
    </div>
  `;
  return html.trim();
};

export default vaccine;
