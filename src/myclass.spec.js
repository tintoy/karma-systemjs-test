import {MyClass} from "myclass";

describe("My class", () => {
	let myClass;

	beforeEach(() => {
		myClass = new MyClass();
	});

	it("should have a foo of bar", () => {
		expect(myClass.foo).toEqual("bar");
	});
});
