// -------algorithumrithm------//

// Step :1  We use Three loops 
// to take set of three different elements from the arr

// 1. we run three loops. so for every value of x, we take 
// all the values of y except itself.
// For every values of y we take all the values of x.

// 2. x,y,z are elements from the arr.

// Step :2 We run the pythagorus theoram i.e x*x + y*y = z*z,
// for all sets of (x,y,z).

// step :3 
// 1. if the value of x,y,z satisfy pythagorus theoram then 
// it print "yes".

// 2. if the value of x(3),y(4),z(5) don't satisfy pythagorus theoram then 
// it print "no".

//This is the solution of complexity O(n^3)
//because i use Three Loops where n is  
// MAX_limit integer





// --------Program--------- // 

function algorithum( arr, n)
{
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
         
                let x = arr[i] * arr[i],
                y = arr[j] *arr[j],
                z = arr[k] * arr[k];
 
                if (x == y + z || y == x + z ||
                    z == x + y)
                    return true;
            }
        }
    }
 

    return false;
}
    
let arr = [ 5, 1, 12, 6, 13 ];
let ar_s = arr.length;
if (algorithum(arr, ar_s) == true)
    console.log("Yes");
else
    console.log ("No")