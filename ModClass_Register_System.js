// EternalDev

let ModClass_Namespaces_Registered = {}

function Register_Mod_Class(_Class_Name, _Class_Namespace, _class) {
    let Has_Namespace = ModClass_Namespaces_Registered[_Class_Namespace]
    if (!Has_Namespace) ModClass_Namespaces_Registered[_Class_Namespace] = [];
    
    ModClass_Namespaces_Registered[_Class_Namespace].push({ _Class_Name, _class });
  }

function using(_ModClass) {
  if (ModClass_Namespaces_Registered[_ModClass]) {
    ModClass_Namespaces_Registered[_ModClass].forEach(({ _Class_Name, _class }) => {
      
      return globalThis[_Class_Name] = _class;
    });
  } else console.log(`"${_ModClass}" no founded.`);
}

class Testing {
  static Loggin() {
    console.log('Logged')
  }
}

Register_Mod_Class('Other_Name', 'ModType', Testing)
using('ModType')

Other_Name.Loggin() // Logged