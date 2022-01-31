// 1.destructure the name and password from

const a = {  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' }

const {name, password} = a;

console.log(name, password);

// 2.destructure the pincode and rename to pin

const b = {  name: 'masai', address: {  pincode: 560095 }  }

const { address: { pincode: pin } } = b;

console.log(pin);


// 3.destructure the first value and second value of the array

const c = [ 100, 200, 500, 600 ] 

const [ first, second ] = c;

console.log(first, second);

// 4.destructure to get the value 50 from this array

const d = [ 100, [  50, 60, 70  ] ] 

const [ , [ fifty ] ] = d;

console.log(fifty)

// 5.destructure to get the value 2,3 into a new array

const e = [  1, {  
     arr: [ 1, 2, 3 ]
   }
 ] 

const [ , { arr: [ , ...args] } ] = e;

console.log(args);



