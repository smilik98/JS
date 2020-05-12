const assert = require('assert');
const task = require('./task.js');

it('openCookiesRoom should return number from the specified string', () => {
  [
    {
      text: ' _  _  _ \n' +
            '| || || |\n' +
            '|_||_||_|\n',

      result: 0,
    },
    {
      text: '         \n' +
            '  |  |  |\n' +
            '  |  |  |\n',

      result: 111,
    },
    {
      text: ' _  _  _ \n' +
            ' _| _| _|\n' +
            '|_ |_ |_ \n',

      result: 222,
    },
    {
      text: ' _  _  _ \n' +
            ' _| _| _|\n' +
            ' _| _| _|\n',

      result: 333,
    },
    {
      text: '         \n' +
            '|_||_||_|\n' +
            '  |  |  |\n',

      result: 444,
    },
    {
      text: ' _  _  _ \n' +
            '|_ |_ |_ \n' +
            ' _| _| _|\n',

      result: 555,
    },
    {
      text: ' _  _  _ \n' +
            '|_ |_ |_ \n' +
            '|_||_||_|\n',

      result: 666,
    },
    {
      text: ' _  _  _ \n' +
            '  |  |  |\n' +
            '  |  |  |\n',

      result: 777,
    },
    {
      text: ' _  _  _ \n' +
            '|_||_||_|\n' +
            '|_||_||_|\n',

      result: 888,
    },
    {
      text: ' _  _  _ \n' +
            '|_||_||_|\n' +
            ' _| _| _|\n',

      result: 999,
    },
    {
      text: '    _  _ \n' +
            '  | _| _|\n' +
            '  ||_  _|\n',

      result: 123,
    },
    {
      text: ' _  _  _ \n' +
            '|_ |_   |\n' +
            ' _||_|  |\n',

      result: 567,
    },
    {
      text: ' _  _  _ \n' +
            '|_||_||_|\n' +
            ' _||_| _|\n',

      result: 989,
    },
  ]
    .forEach((data) => {
      assert.equal(
        task.openCookiesRoom(data.text),
        data.result,
        `${data.text} has not parsed correctly:`,
      );
    });
});
