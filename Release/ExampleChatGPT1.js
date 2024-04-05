const moduleDefine = (name, factory) => {
    const module = { exports: {} };
    factory(module.exports);
    window[name] = module.exports;
};

moduleDefine('MyModule', exports => {
    class MyClass {
        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log(`Hello, ${this.name}!`);
        }
    }

    exports.MyClass = MyClass;
});
