//JavaScript continue Statement

//Continue with For loop
console.log("Continue with For Loop");
for(let i1 = 1; i1<=5; i1++){
	if(i1==3){
		continue;
	}
	console.log(i1);
}

//Continue with While loop
console.log(" ");
console.log("Continue with While Loop");
let i2 = 1;
while(i2<=5){
	if (i2==2){
		i2+= 1;
		continue;
	}
	console.log(i2);
	i2 += 1;
}


//Continue with Nested loop
console.log(" ");
console.log("Continue with While Loop");
//first loop
for(let i3=1; i3<=3;i3++){
	//second loop
	for(let j3=1; j3<=3;j3++){
		if(j3 ==2){
			continue;
		}
		console.log(`i3 is: ${i3} and j3 is: ${j3}`);
	}
	console.log(`i3 is: ${i3}`);
}