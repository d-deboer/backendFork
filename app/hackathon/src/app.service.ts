import { Injectable } from '@nestjs/common';


function fizzbuzz(){
	var num = 1;
	while (num < 101){
		if (num % 3 == 0){
			if (num % 5 == 0){
				console.log("fizzbuzz");
			}
			else {
				console.log("fizz")
			}
		}
		else if (num % 5 == 0){
			console.log("buzz")
		}
		else {
			console.log(num);
		}
		num++;
	}
}



@Injectable()
export class AppService {
  getHello(): string {
	fizzbuzz();
	console.log("test");
    return 'Hello World!____s';
  }
}


const base64url = require("base64url")

export function makeURL(company_name:string, title:string, email:string) {
	const encoded = base64url(company_name + '_' + title + '_' + email);
	const link = 'www.get-unbiased.com/joblisting/' + encoded;
	return (link);
}
