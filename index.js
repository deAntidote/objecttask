class MyClass {
    // This is a Static property
    static staticProperty = "I am a Web 3.0 Genie";
  
    // This is a Instance property
    instanceProperty;
  
    constructor(instancePropertyValue) {
      this.instanceProperty = instancePropertyValue;
    }
  
    // Instance method
    instanceMethod() {
      return "I am an instance method with property value: ${this.instanceProperty};"
    }
  
    // Static method
    static staticMethod() {
      return "I am a static method with static property value: ${MyClass.staticProperty};"
    }
  }
  
  // Creating an instance of the class
  const myInstance = new MyClass("Instance Property Value");
  
  // Accessing instance property and method
  console.log(myInstance.instanceProperty); // Output: Instance Property Value
  console.log(myInstance.instanceMethod()); // Output: I am an instance method with property value: Instance Property Value
  
  // Accessing static property and method without an instance
  console.log(MyClass.staticProperty); // Output: I am a static property
  console.log(MyClass.staticMethod()); // Output: I am a static method with static property value: I am a static property