const fakeBtn = (id) => {
  const html = `
    <button class="primary amscroll-load-button -after ${id}__fakeBtn" amscroll_type="after" style="color: rgb(201, 163, 97);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21" class="amscroll-loading-icon -amscroll-animate">
        <defs></defs>
        <path fill="#DFDEDD" fill-rule="evenodd" d="M10.5 18c4.1421 0 7.5-3.3579 7.5-7.5C18 6.35786 14.6421 3 10.5 3 6.35786 3 3 6.35786 3 10.5c0 4.1421 3.35786 7.5 7.5 7.5zm0 3C16.299 21 21 16.299 21 10.5 21 4.70101 16.299 0 10.5 0 4.70101 0 0 4.70101 0 10.5 0 16.299 4.70101 21 10.5 21z" clip-rule="evenodd"></path>
        <path class="amscroll-fill-path" fill="#a57d38!important" d="M17.8539 9.00958C17.1627 5.58145 14.1338 3 10.502 3c-4.14218 0-7.50005 3.35786-7.50005 7.5 0 3.6318 2.58145 6.6607 6.00958 7.3519.81208.1637 1.49047.8197 1.49047 1.6481 0 .8284-.67546 1.5113-1.49559 1.3943C3.91579 20.1684.00195 15.7913.00195 10.5.00195 4.70101 4.70296 0 10.502 0c5.2912 0 9.6683 3.91384 10.3943 9.00445.1169.82013-.5659 1.49555-1.3943 1.49555-.8285 0-1.4844-.67834-1.6481-1.49042z"></path>
    </svg><span class="amscroll-text">View more products</span></button>
  `;
  return html.trim();
};

export default fakeBtn;
