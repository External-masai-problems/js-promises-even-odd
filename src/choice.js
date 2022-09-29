// Your function must always return a promise
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

function choice(data) {
  //Write your code below
  return new Promise((resolve, reject) => {
    try{
      if(isNaN(data)){
        reject('error');
        }
         else if(data%2 === 0) {
        setTimeout(reject, 2000, 'even');
        console.log('even')
        } else {
        setTimeout(resolve, 1000, 'odd');
        console.log('odd')
        }
      }
      catch(error) {
        alert(error);
      }
  });
   
}
  



console.log(choice('test'))
export default choice;