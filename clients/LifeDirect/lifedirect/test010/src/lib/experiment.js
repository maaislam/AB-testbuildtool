//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const emailFixer = {
    CurrentId: -1,
    DoDebug: false,
    CommonDomains: [
      {
        Correct: 'gmail.com',
        Spellings: [
          ' gmail.com',
          'gmaio.com',
          'smail.com',
          'smail.con',
          'gmail.con',
          'gmail.co.nz',
          'gamil.com',
          'gmai.com',
          'gmail.co',
          'gnail.com',
          'gmail',
          'gmsil.com',
          'gmil.com',
          'gmail.cm',
          'gmailcom',
          'gail.com',
          'gmal.com',
          'gmaol.com',
          'gmaul.com',
          'gmail,com',
          'gmmail.com',
          'gmail.vom',
          'gmail..com',
          'gmial.com',
          'gmaill.com',
          'gmail.om',
          'gmail.comj',
          'gmailc.om',
          'fmail.com'
        ]
      },
      {
        Correct: 'hotmail.com',
        Spellings: [
          'hotmail.co',
          'hotnail.com',
          'hotmail',
          'hotmai.com',
          'hormail.com',
          'hot.com',
          'hoymail.com',
          'hotmal.com',
          'hotmail,com'
        ]
      },
      {
        Correct: 'xtra.co.nz',
        Spellings: ['xtra.com', 'xtra.co.n', 'xtra.co.mz']
      },
      {
        Correct: 'outlook.com',
        Spellings: ['outlook.co']
      },
      {
        Correct: 'finergy.co.nz',
        Spellings: ['testingfinergy.co.nz']
      },
      {
        Correct: 'yahoo.com',
        Spellings: ['yhaoo.com', 'yaho.com', 'yahoo.co']
      }
    ],
    BannedDomains: [
      '.',
      '.com',
      '.co.nz',
      '1.com',
      '123.com',
      '126.com',
      'a',
      'aaa',
      'aaaa',
      'abc',
      'asda',
      'asdasd',
      'asd',
      'asdf',
      'aa',
      'bob',
      'b',
      'bb',
      'c',
      'cc',
      'co',
      'com',
      'd',
      'dd',
      'ddd',
      'dddd',
      'dfdf',
      'doe',
      'dr',
      'e',
      'email',
      'example',
      'f',
      'fake',
      'ff',
      'fff',
      'fgh',
      'fggf',
      'g',
      'gc',
      'gg',
      'ggg',
      'gm',
      'go',
      'h',
      'hcl',
      'here',
      'hh',
      'hhg',
      'hhh',
      'hsjs',
      'grr',
      'j',
      'jj',
      'jay',
      'm',
      'mo',
      'myself',
      'na',
      'nate',
      'no',
      'noemail',
      'nope',
      'nowhere',
      'penis',
      'r',
      's',
      'sdfsdf',
      't',
      'test',
      'test',
      'testing',
      'testtest',
      'trash-mail',
      'x',
      'xyz',
      'asdfg'
    ],
    BannedTLD: ['aaa', 'test', 'a', 'b', 'd', 't', 'gc'],
    BannedEmails: [
      'bob@gmail.com',
      'test@gmail.com',
      'abc@gmail.com',
      'no@gmail.com',
      'a@gmail.com',
      'bob@hotmail.com',
      'asd@gmail.com',
      'john@gmail.com',
      'xxx@gmail.com'
    ],

    AddStyles() {
      this.Debug('AddStyles');

      const element = document.createElement('style');
      document.head.appendChild(element);
      const { sheet } = element;
      sheet.insertRule('div.did-you-mean { margin-top: 4px; font-size: 12px; text-align: right; }');
    },
    Start(addStyles, doDebug) {
      this.Debug('Start');

      const that = this;

      if (doDebug === true) {
        that.DoDebug = true;
      }

      if (addStyles) {
        that.AddStyles();
      }

      document.addEventListener(
        'BadEmail',
        (emailInfo) => {
          that.AddError(emailInfo.detail);
        },
        false
      );
    },
    LoadElement(element) {
      this.Debug('LoadElement');

      const that = this;
      that.CurrentId++;

      element.dataset.dymId = `email_dym_${that.CurrentId}`;
      console.log(element);
      //Onchange of the text field itself
      element.addEventListener('change', (event) => {
        that.ElementChange(element);
      });
    },
    ElementChange(element) {
      this.Debug('ElementChange');

      //Let's split it up :)
      const emailInfo = this.GetEmailDetails(element.value);
      emailInfo.Element = element;

      if (emailInfo.IsValidEmail()) {
        this.AddDidYouMean(element, emailInfo);
      } else if (emailInfo.IsParsed) {
        const event = new CustomEvent('BadEmail', {
          detail: emailInfo
        });
        //Dispatch the event.
        document.dispatchEvent(event);
      }
    },
    AddError(emailInfo) {
      this.Debug('AddError');

      emailInfo.Element.classList.add('_3y8gsIkX_dk5l4PdRAM3GR');
      emailInfo.Element.classList.add('_1109He9YEPmYEvUJQKKhFs');

      const holder = emailInfo.Element.parentElement.parentElement.parentElement;
      holder.querySelector('p').classList.add('text-pink--error');
      if (holder.children.length === 2) {
        holder.innerHTML += `<div class='layout-flex-row--centered gap-pre-m'><img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uLWFsZXJ0LXBpbms8L3RpdGxlPg0KICAgIDxnIGlkPSJhcnRib2FyZC10ZW1wbGF0ZXMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iNDQtLS1BZGQtcXVvdGVzLC1mYW1pbHktZGV0YWlscy0tLVZhbGlkYXRpb24tc3R5bGUtZXhhbXBsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyNC4wMDAwMDAsIC00MjEuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyNS4wMDAwMDAsIDQyMi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbi1pbmZvLXBpbmsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMDAwMDAwLCA5LjAwMDAwMCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtOS4wMDAwMDAsIC05LjAwMDAwMCkgIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsOSBDMCw0LjAyOTg4MjM1IDQuMDI5ODgyMzUsMCA5LDAgQzEzLjk3MTE3NjUsMCAxOCw0LjAyOTg4MjM1IDE4LDkgQzE4LDEzLjk3MDExNzYgMTMuOTcxMTc2NSwxOCA5LDE4IEM0LjAyOTg4MjM1LDE4IDAsMTMuOTcwMTE3NiAwLDkgWiIgaWQ9IlN0cm9rZS0xIiBzdHJva2U9IiNFRTA4NzIiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuOTc3ODU0NjcsNy40MTE3NjQ3MSBMOS45Nzc4NTQ2NywxNC43NTEzMzY5IEw4LjA0NzA1ODgyLDE0Ljc1MTMzNjkgTDguMDQ3MDU4ODIsNy40MTE3NjQ3MSBMOS45Nzc4NTQ2Nyw3LjQxMTc2NDcxIFogTTEwLjE2NDcwNTksNC45NzE3ODc5OCBDMTAuMTY0NzA1OSw1LjE0NjM3MjA2IDEwLjEzMzU2NDMsNS4zMTAzMzcwOCAxMC4wNzEyODAzLDUuNDYzNjg3OTUgQzEwLjAwODk5NjIsNS42MTcwMzg4MyA5LjkyMzg3NTk3LDUuNzUxNTEzNzMgOS44MTU5MTY5Niw1Ljg2NzExNjcgQzkuNzA3OTU3OTQsNS45ODI3MTk2NyA5LjU4MjM1MzY2LDYuMDc0NzI4ODIgOS40MzkxMDAzNSw2LjE0MzE0NjkgQzkuMjk1ODQ3MDMsNi4yMTE1NjQ5OSA5LjE0MzI1MzQsNi4yNDU3NzM1MSA4Ljk4MTMxNDg4LDYuMjQ1NzczNTEgQzguODIzNTI4NjIsNi4yNDU3NzM1MSA4LjY3NjEyNTI1LDYuMjExNTY0OTkgOC41MzkxMDAzNSw2LjE0MzE0NjkgQzguNDAyMDc1NDQsNi4wNzQ3Mjg4MiA4LjI4MDYyMzM3LDUuOTgyNzE5NjcgOC4xNzQ3NDA0OCw1Ljg2NzExNjcgQzguMDY4ODU3Niw1Ljc1MTUxMzczIDcuOTg1ODEzNDUsNS42MTcwMzg4MyA3LjkyNTYwNTU0LDUuNDYzNjg3OTUgQzcuODY1Mzk3NjIsNS4zMTAzMzcwOCA3LjgzNTI5NDEyLDUuMTQ2MzcyMDYgNy44MzUyOTQxMiw0Ljk3MTc4Nzk4IEM3LjgzNTI5NDEyLDQuNzkyNDg1NDIgNy44NjUzOTc2Miw0LjYyNDk4MTU5IDcuOTI1NjA1NTQsNC40NjkyNzE0NyBDNy45ODU4MTM0NSw0LjMxMzU2MTM1IDguMDY4ODU3Niw0LjE3NjcyNzIzIDguMTc0NzQwNDgsNC4wNTg3NjUwMiBDOC4yODA2MjMzNywzLjk0MDgwMjgxIDguNDAyMDc1NDQsMy44NDg3OTM2NiA4LjUzOTEwMDM1LDMuNzgyNzM0ODIgQzguNjc2MTI1MjUsMy43MTY2NzU5OCA4LjgyMzUyODYyLDMuNjgzNjQ3MDYgOC45ODEzMTQ4OCwzLjY4MzY0NzA2IEM5LjE0MzI1MzQsMy42ODM2NDcwNiA5LjI5NTg0NzAzLDMuNzE2Njc1OTggOS40MzkxMDAzNSwzLjc4MjczNDgyIEM5LjU4MjM1MzY2LDMuODQ4NzkzNjYgOS43MDc5NTc5NCwzLjk0MDgwMjgxIDkuODE1OTE2OTYsNC4wNTg3NjUwMiBDOS45MjM4NzU5Nyw0LjE3NjcyNzIzIDEwLjAwODk5NjIsNC4zMTM1NjEzNSAxMC4wNzEyODAzLDQuNDY5MjcxNDcgQzEwLjEzMzU2NDMsNC42MjQ5ODE1OSAxMC4xNjQ3MDU5LDQuNzkyNDg1NDIgMTAuMTY0NzA1OSw0Ljk3MTc4Nzk4IFoiIGlkPSJpIiBmaWxsPSIjRUUwODcyIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+' alt='img' draggable='false' class='space-m _3Igyg6mrpTBxxWJ1o8ajMq' style='user-select: none;'><span class='text-pink text-font-size-xs'>${emailInfo.Errors[0]}</span></div>`;
      }
    },
    AddDidYouMean(element, emailInfo) {
      this.Debug('AddDidYouMean');

      document.querySelectorAll('.did-you-mean').forEach((elem) => {
        elem.remove();
      });

      //Add some "did you mean options...
      let dym = null;
      this.CommonDomains.forEach((domain) => {
        domain.Spellings.forEach((spelling) => {
          if (emailInfo.FullDomain == spelling) {
            dym = domain;
          }
        });
      });

      if (dym != null) {
        const dymElem = document.createElement('div');
        dymElem.className = 'did-you-mean';
        dymElem.innerHTML = `Did you mean: <a href='#' id='${element.dataset.dymId}'>${emailInfo.Start}@${dym.Correct}</a>`;

        element.parentNode.insertBefore(dymElem, element.nextSibling);
        console.log(element, 'Prince Kumar');
        document.getElementById(element.dataset.dymId).addEventListener('click', function (event) {
          dymElem.remove();

          element.value = this.innerText;

          const evnt = new Event('change');
          element.dispatchEvent(evnt);

          event.preventDefault();
        });
      }
    },
    GetEmailDetails(value) {
      this.Debug('GetEmailDetails');
      //Let's split it up :)
      const that = this;

      if (value.length > 0) {
        value = value.trim().toLowerCase();
      } else {
        value = '';
      }

      const emailInfo = {
        Original: value,
        Start: '',
        FullDomain: '',
        Domain: '',
        TLD: '',
        Errors: [],
        IsParsed: false,
        IsValidEmail() {
          return this.Errors.length === 0;
        },
        AddError(error) {
          this.Errors[this.Errors.length] = error;
          that.Debug(error);
        }
      };

      if (value.length < 6) {
        emailInfo.AddError('Email length too short.');
      } else if (value.indexOf('@') <= 0) {
        emailInfo.AddError('No @ symbol or @ symbol first.');
      } else if (value.indexOf('.') <= 0) {
        emailInfo.AddError('No . symbol.');
      } else if (value.indexOf(' ') >= 0) {
        emailInfo.AddError('Space character found');
      } else if (value.indexOf('.') == value.length) {
        emailInfo.AddError('Email ends with period.');
      } else if (value.indexOf('@') == value.length) {
        emailInfo.AddError('Email ends with @.');
      } else if (value.indexOf('@.') > 0) {
        emailInfo.AddError('Found @. in email.');
      } else if (value.indexOf('.', value.indexOf('@')) == -1) {
        emailInfo.AddError('No period after @.');
      } else if (value.split('@').length > 2) {
        emailInfo.AddError('More than 1 @ symbol found.');
      }

      if (emailInfo.IsValidEmail()) {
        emailInfo.Start = value.substring(0, value.indexOf('@'));
        emailInfo.FullDomain = value.substring(value.indexOf('@') + 1);
        emailInfo.Domain = value.substring(value.indexOf('@') + 1).split('.')[0];
        emailInfo.TLD = emailInfo.FullDomain.split('.').slice(1).join('.');

        emailInfo.IsParsed = true;

        if (
          this.BannedDomains.includes(emailInfo.Domain) ||
          this.BannedEmails.includes(value) ||
          this.BannedTLD.includes(emailInfo.TLD)
        ) {
          emailInfo.AddError('Please enter a valid email.');
        }
      }

      return emailInfo;
    },
    LoadByName(elementName) {
      this.Debug(`LoadByName - ${elementName}`);

      const elems = document.getElementsByName(elementName);
      console.log(elems);
      const that = this;

      elems.forEach((e) => {
        that.LoadElement(e);
      });
    },
    LoadById(elementId) {
      this.Debug(`LoadById - ${elementId}`);

      if (document.getElementById(elementId) != null) {
        this.LoadElement(document.getElementById(elementId));
      }
    },
    TestEmails() {
      this.Debug('TestEmails');

      this.Debug(emailFixer.GetEmailDetails('foo@bar.com'));
      this.Debug(emailFixer.GetEmailDetails('a@g.co'));
      this.Debug(emailFixer.GetEmailDetails('@bar.com'));
      this.Debug(emailFixer.GetEmailDetails('foobar.com'));
      this.Debug(emailFixer.GetEmailDetails('foo@barcom'));
      this.Debug(emailFixer.GetEmailDetails('foobarcom@'));
      this.Debug(emailFixer.GetEmailDetails('foo@bar.@com'));
      this.Debug(emailFixer.GetEmailDetails('foobarcom.'));
    },
    Debug(text) {
      if (this.DoDebug) {
        console.log(text);
      }
    }
  };
  emailFixer.Start(true, true);
  emailFixer.LoadByName('email');
};

export default () => {
  const emailField = document.querySelector('._3y8gsIkX_dk5l4PdRAM3GR[type="email"]');
  emailField.addEventListener('blur', init);
};
