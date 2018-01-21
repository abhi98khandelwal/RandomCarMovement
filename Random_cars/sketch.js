function setup() {
  // put setup code here
	createCanvas(1350,650);
	background(184,113,9);
}

var Cars = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


function init_cars() {
	// 0 - down
	// 1 - up
	// 2 - right
	// 3 - left
	//Cars.push({'x':5,'y':0,'movement':0});
	//Cars.push({'x':5+75,'y':650,'movement':1})
	//Cars.push({'x':5+25,'y':5,'movement':0})
	//Cars.push({'x':5+75+25,'y':650,'movement':1})
	//Cars.push({'x':5+75+75,'y':0,'movement':0})
	for(i=0;i<18;i++){
		var movement_temp = Math.random()*10;
		var car_colorR = getRndInteger(0,256);
		var car_colorG = getRndInteger(0,256);
		var car_colorB = getRndInteger(0,256);
		if(movement_temp>5){
			//Cars.push({'x':(75*i)+5,'y':650,'movement':1});
			Cars.push({'x':(75*i)+5,'y':650,'movement':1,'R':car_colorR,'G':car_colorG,'B':car_colorB});
			}
		else{
			//Cars.push({'x':(75*i)+5+25,'y':0,'movement':0});
			Cars.push({'x':(75*i)+5+25,'y':0,'movement':0,'R':car_colorR,'G':car_colorG,'B':car_colorB});
		}	
	}
	
}

function move_cars(){
	for(i=0;i<Cars.length;i++){
		//fill(Cars[i]['R'],Cars[i]['G'],Cars[i]['B']);
		fill(255);
		stroke(255);
		//fill(getRndInteger(0,256),getRndInteger(0,256),getRndInteger(0,256));
		rect(Cars[i]['x'],Cars[i]['y'],15,15);
		
		if(Cars[i]['movement']==0){
			Cars[i]['y']+=1;
			if(Cars[i]['y']==650){
				Cars[i]['y']=0;
			}
		}
		else if(Cars[i]['movement']==1){
			Cars[i]['y']-=1;
			if(Cars[i]['y']==0){
				Cars[i]['y']=650;
			}
		}
		else if(Cars[i]['movement']==2){
			Cars[i]['x']+=1;
			if(Cars[i]['x']==1350){
				Cars[i]['x']=0;
			}
		}
		else if(Cars[i]['movement']==3){
			Cars[i]['x']-=1;
			if(Cars[i]['x']==0){
				Cars[i]['x']=1350;
			}
		
		}	
	}

}

function decide_movement(){
	for(i=0;i<Cars.length;i++){	
		if(Cars[i]['movement']==1){
			if((Cars[i]['y']-5)%75==0){
				if(getRndInteger(0,2)){
					Cars[i]['movement']=2;
				}
			}
		}
		else if(Cars[i]['movement']==0){
			if((Cars[i]['y']-30)%75==0){
				if(getRndInteger(0,2)){
					Cars[i]['movement']=3;
				}
			}
		}
		else if(Cars[i]['movement']==2){
			if((Cars[i]['x']-30)%75==0){
				if(getRndInteger(0,2)){
					Cars[i]['movement']=0;
					}
			}
		}
		else if(Cars[i]['movement']==3){
			if((Cars[i]['x']-5)%75==0){
				if(getRndInteger(0,2)){
					Cars[i]['movement']=1;
				}
			}
		} 
		
		
		if(Cars[i]['movement']==1){
			if((Cars[i]['y']-30)%75==0){
				if(getRndInteger(0,2)){
					Cars[i]['movement']=3;
				}
			}
		}
		else if(Cars[i]['movement']==0){
			if((Cars[i]['y']-5)%75==0){
				if(getRndInteger(0,2)){
					Cars[i]['movement']=2;
				}
			}
		}
		else if(Cars[i]['movement']==2){
			if((Cars[i]['x']-5)%75==0){
				if(getRndInteger(0,2)){
					Cars[i]['movement']=1;
					}
			}
		}
		else if(Cars[i]['movement']==3){
			if((Cars[i]['x']-30)%75==0){
				if(getRndInteger(0,2)){
					Cars[i]['movement']=0;
				}
			}
		} 
		
		
	}
}

init_cars();

function draw() {
  // put drawing code here
  	//Length and width of Road
	var l = 1350;
	var w = 50;
	var startx = 0;
	var starty = 0;
	var gap = 25;//Distance between consecutive roads
	while(startx<1350){
		stroke(59);
		fill(59);
		rect(startx,starty,w,l);
		startx+=gap+w;
	}
	
	//Horizontal Roads
	startx = 0;
	l = 1350;
	while(starty<1350){
		fill(59);		
		rect(startx,starty,l,w);
		starty+=gap+w;
	}
	
	//Draw Lanes
	var line_length = 10;
	var gap_between_lines = 15;

	for(x=25;x<1350;x=x+75){
		for(y_start=0;y_start<650;y_start+=gap_between_lines+line_length){
			stroke(255,255,0);
			line(x,y_start,x,y_start+line_length);
		}
	}
	
	for(x=25;x<650;x=x+75){
		for(y_start=0;y_start<1350;y_start+=gap_between_lines+line_length){
			stroke(255,255,0);
			line(y_start,x,y_start+line_length,x);
		}
	}
	
	
	move_cars();
	decide_movement();
	
	
	//stroke(255,255,0);
	//line(25+75,60,25+75,65);
	//rect(30+75+75+75,5+75,15,15);
//	rect(5+75*horizontallane_number,5+75*verticallane_number);	
}


