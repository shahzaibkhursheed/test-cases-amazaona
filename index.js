const { Testcase1 } = require('./Testcase1');
const { Testcase2 } = require('./Testcase2');
const { Testcase3 } = require('./Testcase3');
const { Testcase4 } = require('./Testcase4');
const { Testcase5 } = require('./Testcase5');

const main = async () => {
	await Testcase1();
	await Testcase2();
	await Testcase3();
	await Testcase4();
	await Testcase5();
};

main();
