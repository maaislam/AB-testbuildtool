import header from '../components/header';

const collectName = (id) => {
  const htmlStr = `
    ${header(id)}
    <div class="${id}__collectname ${id}__container site">
        <div class="${id}__collectname-text">
            <h1 class="${id}__collectname--title">
                <span>Remove your personal</span>
                <span>
                    information from Google
                </span>
                <span>
                    and data brokers
                </span>
            </h1>
        </div>
        <div class="${id}__collectname--form">
            <p>
                Find out which sites publish your info. It's free.
            </p>
            <form autocomplete="off"
                class="${id}__fullname--form">
                <span>
                    <input name="fullName"
                        type="text"
                        class="${id}__fullname--input common-input"
                        id="${id}__fullname--input">
                    <label for="${id}__fullname--input">
                        Enter First and Last Name
                    </label>
                </span>
                <input type="submit"
                    value="Search"
                    class="${id}__fullname--submit common-submit">
            </form>
        </div>
    </div>`;

  return htmlStr.trim();
};

export default collectName;
