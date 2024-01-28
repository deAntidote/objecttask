<h1>This is the first assignmwnt</h1>

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
      return "let return an instance method now"
    }
  
    // Static method
    static staticMethod() {
      return "let return a static method now"
    }
  }
  
  // Creating an instance of the class
  const myInstance = new MyClass("Instance Property Value");
  
  // Accessing instance property and method
  console.log(myInstance.instanceProperty); 
  console.log(myInstance.instanceMethod()); 
  
 
  console.log(MyClass.staticProperty); 
  console.log(MyClass.staticMethod()); 